import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteList from './components/QuoteList/QuoteList'
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <div>
            <Jumbotron fluid style={{ "background-color": "teal", "color": "white"}}>
                <Container>
                    <h1 style={{"margin-left": "38%"}}>Kanye West </h1>
                    <p style={{"margin-left": "40%"}}>
                        An overflowing well of wisdom
    </p>
                </Container>
            </Jumbotron>


            <QuoteList />
        </div>
    )
}

export default App;
