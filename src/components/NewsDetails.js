import React, { Component } from "react";

class NewsDetails extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: this.props.name,
            url: this.props.url
        };
    }


    render() {
        return (
            <section>
                <p><a href={this.state.url} target='_blank'>{this.state.name}</a></p>
            </section>
        );
    }
}
export default NewsDetails;