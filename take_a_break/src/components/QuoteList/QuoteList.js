import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';



export default function QuoteList() {
    const [quotes, setQuotes] = useState([]);


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
            <button style={{ "margin-left": "40%" }} onClick={loadQuotes}>Click Here For Kanye Quotes</button>
            <br />
            <br />
            
            <Card style={{ "margin-left": "20%", "margin-right": "20%" }}>
                <Card.Body>
                    <Card.Text>
                        "{quotes}"
    </Card.Text>
                    
                </Card.Body>
            </Card>

        </div>
    )
}




/* <button onClick={this.loadQuotes}>Get Quote</button>  */
