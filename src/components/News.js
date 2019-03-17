import React, { Component } from 'react'
import NewsDetails from './NewsDetails'

const newsAPI = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9d7c1743544f4e8f9a7fcde8da9b3b68'
const sportAPI = 'https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=9d7c1743544f4e8f9a7fcde8da9b3b68'

class News extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            news: [],
            sportNews: [],
        };
    }

    componentDidMount() {
        fetch(newsAPI)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    news: json
                });
            });
        fetch(sportAPI)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    sportNews: json
                });
            });
    }

    render() {
        if (this.state.news.length !== 0) {
            var news = this.state.news.articles.map(news => {
                return (
                    <NewsDetails
                        key={news.title}
                        title={news.title}
                        url={news.url}
                        description={news.description}
                    />
                );
            }
            )
        }
        if (this.state.sportNews.length !== 0) {
            var sportNews = this.state.sportNews.articles.map(news => {
                return (
                    <NewsDetails
                    key={news.title}
                        title={news.title}
                        url={news.url}
                        description={news.description}
                    />
                );
            }
            )
        }

        return (
            this.state.news !== 'null' && (
                <fragment>
                    <h2>BBC News</h2>
                    {news}
                    <hr/>
                    <h2>BBC Sport</h2>
                    {sportNews}
                </fragment>

            )
        )
    }
}

export default News