import { useState, useEffect } from "react";

function Home() {
    const [news, setNews] = useState([]);

    //fetch news from database
    useEffect(() => {
        fetch("/newsfeed")
            .then((res) => res.json())
            .then((allnews) => {
                console.log(allnews);
                setNews(allnews);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="home-cmp">
            <h1>Welcome!</h1>
            <div className="news-section">
                {news &&
                    news.map((newsentry) => {
                        console.log(newsentry);
                        return (
                            <div className="entry" key={newsentry.id}>
                                <section>{newsentry.news}</section>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Home;
