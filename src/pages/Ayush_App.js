import React from 'react';
import './Ayush_App.css';

export default function App() {
    const [search, setSearch] = React.useState("");
    const [news, setNews] = React.useState([]);

    function getNews(input) {
        const options = {
            method: 'GET',
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
                'X-RapidAPI-Key': 'a4b766d322mshd50e1298aca799ap157203jsn5c3f4aa97a3b'
            }
        };
        let formattedinput = encodeURIComponent(input);
        fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${formattedinput}&safeSearch=Off&textFormat=Raw&freshness=Day&count=100`, options)
            .then(response => response.json())
            .then(data => setNews(data.value))
            .catch(err => console.error(err));
    }

    function Cards({ article }) {
        return (
            <div className="fakediv">
                <div className="card">
                    <div className="adjust">
                        <div>
                            <h2 className="headline">
                                <a className="headtext" rel="noopener noreferrer"
                                    href={article.url} target="_blank">{article.name}
                                </a>
                            </h2>
                            <p className="summary">Published on : {article.datePublished.slice(0, 10)}</p>
                            <p className="summary">By : {article.provider[0].name}</p>

                        </div>
                        <div className="paragraph">
                            {article.image && <img className="thumbnail" alt=""
                                src={article.image.thumbnail.contentUrl}
                            />}
                            <p className="summary">{article.description}</p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="newsapp">

            <form className='newsform' onSubmit={(event) => {
                event.preventDefault();
                getNews(search);
            }}><h1 className="desc">News aggregator</h1>
                <input
                    className='searchbar'
                    autoFocus
                    value={search}
                    onChange={evnt => setSearch(evnt.target.value)}
                />
                <button className='searchbutton'>Fetch News</button>
            </form>
            {search === "" && news.length === 0 ? <div className='filler'><h1 className="headings">Welcome to our news section</h1></div> : <p></p>}
            {news.length === 0 && search !== "" ? <div className='filler'><h1 className="headings">Your search yielded no results</h1></div> :
                <ul className='newslist'><li>
                    {news.map((article, counter) => (<Cards key={counter} article={article} />))}
                </li></ul>
            }
            {news.length !== 0 ? <h1 className="headings">That's all for now</h1> : <p></p>}
            <footer className='newsfooter'>AK^&)</footer>
        </div>
    );
}