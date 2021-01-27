import React from 'react'
import {Row,Col} from 'react-bootstrap';
import {FaPen} from 'react-icons/fa';
function BoardTopBar() {
    return (
        <Row style={{marginLeft:10, marginTop:10}}>
            <Col xl={6} lg={6} md={6} sm={6} xs={6}><p style={{color:"rgb(104, 105, 246)",fontSize:"1.25rem", fontWeight:"bold"}}>Board Name</p></Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={6} style={{textAlign:"right"}}><button className="editLabelsBtn">
            <FaPen style={{margin:"auto"}}/> EDIT LABELS </button></Col>
        </Row>
    )
}

export default BoardTopBar
