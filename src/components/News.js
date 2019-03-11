import React, { Component } from 'react'
import NewsDetails from './NewsDetails'

const newsAPI = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9d7c1743544f4e8f9a7fcde8da9b3b68'

class News extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            news: [],
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
    }
    render() {
        if (this.state.news.length !== 0) {
            var news = this.state.news.articles.map(news => {
                return (
                    <NewsDetails
                        name={news.title}
                        url={news.url}
                    />
                );
            }
            )
        }
        return (
            this.state.news !== 'null' && (
                <fragment>
                    {news}
                </fragment>

            )
        )
    }
}

export default News