import React, { Component } from "react";

class NewsDetails extends Component {
    constructor(props, context) {
        super(props, context);
        // this.state = {
        //     name: this.props.name,
        //     url: this.props.url
        // };
    }


    render() {
        return (
            <section>
                <p>
                <a href={this.props.url} target='_blank'>{this.props.title}</a>
                <span className='newsDescription'>{this.props.description}</span>
                </p>
            </section>
        );
    }
}
export default NewsDetails;