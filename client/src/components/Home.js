import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
    const [news, setNews] = useState([]);
    const [bossData, setBossData] = useState([]);

    //fetch news from database
    useEffect(() => {
        fetch("/newsfeed")
            .then((res) => res.json())
            .then((allnews) => {
                // console.log("news: ", allnews);
                setNews(allnews);
            })
            .catch((error) => console.log("error at newsfeed: ", error));
    }, []);

    //fetch my data from database
    useEffect(() => {
        fetch("/boss")
            .then((res) => res.json())
            .then((data) => {
                // console.log("boss: ", data);
                setBossData(data);
            })
            .catch((error) => console.log("error at boss fetch: ", error));
    }, []);

    return (
        <div className="home-cmp">
            <h1>Welcome!</h1>
            <br />
            <div className="news-section">
                {news &&
                    news.map((newsentry) => {
                        console.log(newsentry);
                        return (
                            <div className="entry" key={newsentry.id}>
                                <section>
                                    {newsentry.news}
                                    <br />
                                    <br />
                                    Posted: {newsentry.created_at}
                                </section>
                            </div>
                        );
                    })}
                {bossData &&
                    bossData.map((data) => {
                        console.log(data);
                        return (
                            <div className="myData" key={data.id}>
                                <section>
                                    {data.firstname} {data.lastname}
                                </section>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Home;
