import "./styles.css";
import Board from "./Board";
import { BoardProvider } from "./Contexts/BoardContext";
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div className="App">
    <BoardProvider>
    <Container style={{maxWidth:"100%"}}>
        <Row style={{width:"100%"}}>
          <Col xl={1} lg={1} md={1} sm={1} xs={1} style={{backgroundColor:"rgb(102, 110, 238)",height:"100vh",textAlign:"center  "}}>
            <h3 style={{color:"white",marginTop:15}}>KUBoard</h3>
          </Col>
          
          <Board />
          
        </Row>
        </Container>
    </BoardProvider>
    </div>
    
  );
}
