import { useParams } from "react-router-dom";
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Detailpage.scss"

const Detailpage = () => {

    const addressProp = useParams();

    const [APIData, setAPIData] = useState(null);

        useEffect(() => {

                fetch(`https://newsapi.org/v2/everything?q=${addressProp.title}&language=${addressProp.language}&apiKey=5958e89ca85b4e6a9e8e633ba54f9845`)
                .then((res) => res.json())
                .then((data) => setAPIData(data))
                .catch((err) => console.log(err))
        }, []);

    return ( 
        <section className="singleArticle">
            <Link className="backButton" to={`/${addressProp.title}/${addressProp.language}`}>BACK</Link>
            <h2>{APIData?.articles[`${addressProp.index}`].title}</h2>
            <img src={APIData?.articles[`${addressProp.index}`].urlToImage}/>
            <p>{APIData?.articles[`${addressProp.index}`].content}</p>
            <hr />
            <p>{APIData?.articles[`${addressProp.index}`].author}</p>
            <p>{APIData?.articles[`${addressProp.index}`].publishedAt}</p>
            <a href={APIData?.articles[`${addressProp.index}`].url} target="_blank">go to source</a>
        </section>
    );
}

export default Detailpage;
