import React, { Component } from 'react'
const cNAPI = 'http://api.icndb.com/jokes/random'
const factAPI = 'http://randomuselessfact.appspot.com/random.json?language=en'

class ChuckNorris extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            norris: {
                type: "success",
                value: {
                    id: 65,
                    joke: "When Chuck Norris was denied an Egg McMuffin at McDonald's because it was 10:35, he roundhouse kicked the store so hard it became a Wendy's.",
                    categories: []
                }
            },
            fact: {
                text: "A full-loaded supertanker traveling at normal speed takes at least 20 minutes to stop.",
                permalink: "http://randomuselessfact.appspot.com/ahNzfnJhbmRvbXVzZWxlc3NmYWN0chELEgRGYWN0GICAgIDrydEKDA",
                source_url: "http://www.djtech.net/humor/useless_facts.htm",
                language: "en",
                source: "djtech.net"
                }
        };
    }

    componentDidMount() {
        fetch(cNAPI)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    norris: json
                });
            });
        fetch(factAPI)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    fact: json
                });
            });

    }

    render() {
        var joke = ''
        this.state.norris !== 'null' && (
            joke = this.state.norris.value.joke
        )
        console.log(this.state.fact)
        var fact = ''
        this.state.fact !== 'null' && (
            fact = this.state.fact.text
        )

        return (
            <fragment>
                <div>"{joke}"</div>
                {/* <br></br>
                <div>FACT
                    "{fact}"</div> */}
            </fragment>

        )
    }
}


export default ChuckNorris