import React from 'react'
import {Row , Col} from 'react-bootstrap';
import {FaRocket} from 'react-icons/fa';
function TopBar() {
    return (
        <Row  style={{marginLeft:10,padding:15, borderBottom:"1px solid black"}}>
            <Col xl={1} lg={1} md={1}><FaRocket style={{fontSize:25}}/></Col>
            <Col style={{textAlign:"center"}} xl={10} lg={10} md={10}>KUBoard</Col>
            <Col style={{textAlign:"right"}} xl={1} lg={1} md={1}>Avatar</Col>
        </Row>
    )
}

export default TopBar
