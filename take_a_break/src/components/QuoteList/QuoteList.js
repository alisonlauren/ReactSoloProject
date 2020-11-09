import React, { Component } from 'react'
import Quote from '../Quote/Quote'

export default class QuoteList extends Component {
    constructor() {
        super();

        this.state = {
            quotes: []
        }
    }

    loadQuotes = () => {
        fetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    quotes: data
                })
            })

    }

    componentDidMount() {
        this.loadQuotes();
    }

    render() {
        return (
            <div>
                
                { this.state.quotes.map((quote) => {
                    return <Quote key={quote.id} quoteData={quote} />

                }) }

            </div>
        )
    }
}



/* <button onClick={this.loadQuotes}>Get Quote</button>  */
