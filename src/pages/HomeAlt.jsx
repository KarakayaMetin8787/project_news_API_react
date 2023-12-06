import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Home.scss"

const HomeAlt = () => {

    const previousFetch = useParams()
    const [APIData, setAPIData] = useState(null);
    let [startSearch, setStartSearch] = useState(false);
    const [searchTitle, setSearchTitle] = useState(previousFetch.title);
    const [searchLanguage, setSearchLanguage] = useState(previousFetch.language);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

        useEffect(() => {
        

            fetch(`https://newsapi.org/v2/everything?q=${previousFetch.title}&language=${previousFetch.language}&apiKey=5958e89ca85b4e6a9e8e633ba54f9845`)
            .then((res) => res.json())
            .then((data) => setAPIData(data))
            .catch((err) => console.log(err))
        }, []);

        useEffect(() => {
            if (startSearch){

                fetch(`https://newsapi.org/v2/everything?q=${searchTitle}&language=${searchLanguage}&apiKey=5958e89ca85b4e6a9e8e633ba54f9845`)
                .then((res) => res.json())
                .then((data) => setAPIData(data))
                .catch((err) => console.log(err))
            }
        }, [startSearch]);

        return ( 
        <main>
            <h1>Breaking News</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search for topic or keyword i.e. Microsoft" type="text" onChange={(element) => setSearchTitle(element.target.value)} value={searchTitle}/>
                <select onChange={(element) => setSearchLanguage(element.target.value)} value={searchLanguage} >
                    <option value="de">Deutsch</option>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="es">Español</option>
                    <option value="it">Italiano</option>
                    <option value="ru">Русский</option>
                    <option value="nl">Nederlands</option>
                    <option value="pt">Português</option>
                    <option value="sv">Svenska</option>
                    <option value="no">Norsk</option>
                    <option value="zh">中文</option>
                    <option value="ar">العربية</option>
                    <option value="he">עברית</option>
                    <option value="ud">اردو</option>
                </select>
                <input type="submit" value="Search" onClick={setStartSearch}/>
            </form>
            <br />
            <hr />
            <br />
            <div className="newsContainer">
                {APIData?.articles.map((elem, index) => (
                    <section key={index}>
                    <h2>{elem.title}</h2>
                    <img src={elem.urlToImage}/>
                    <p>{elem.description}</p>
                        <Link to={`/detailpage/${searchTitle}/${searchLanguage}/${index}`} state={elem}>Read more</Link>
                </section>
                ))}
            </div>
        </main>
    );
}

export default HomeAlt;
