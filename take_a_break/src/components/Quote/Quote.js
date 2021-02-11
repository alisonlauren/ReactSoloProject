import React from 'react'
import { Card } from 'react-bootstrap';

export default function Quote(props) {
    return (
        <div>
            <Card style={{"margin-left": "38%"}}>
            {props.quoteData}
            </Card>
            
        </div>
    )
}
