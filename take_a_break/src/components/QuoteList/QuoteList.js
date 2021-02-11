import React, { useEffect, useState } from 'react'



export default function QuoteList() {
    const [ quotes, setQuotes ] = useState([]);
    

    const loadQuotes = () => {
        fetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json')
        .then(res => res.json())
            .then(data => {
                console.log(data)
                setQuotes(data);
                setQuotes(data[Math.floor(Math.random() * 62)])
        })
    } 
    

    useEffect(() => {
        loadQuotes();
}, [])

        return (
            <div>
                <button onClick={loadQuotes}>Click Here For Kanye Quotes</button>
                <br />
                {quotes}

            </div>
        )
    }




/* <button onClick={this.loadQuotes}>Get Quote</button>  */
