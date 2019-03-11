import React, { Component } from "react";

class NewsDetails extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: this.props.name
        };
    }


    render() {
        return (
            <section>
                <p>{this.state.name}</p>
            </section>
        );
    }
}
export default NewsDetails;