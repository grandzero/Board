import React,{useState} from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task";
import {Col} from 'react-bootstrap';
import AddCardModal from '../AddCardModal';

export default function Column({ keyId, title, items }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Col xl={3} lg={3} md={3} sm={12} xs={12}>
    <div key={keyId} className="column">
      
      <Droppable droppableId={keyId}>
        {(provided) => {
          return (
            <div ref={provided.innerRef} className="droppable-col">
              <p style={{fontSize:16,fontWeight:"bold"}} className="title">{title}</p>
              {items.map((element, index) => (
                <Task key={element.id} id={element.id} index={index} name={element.name} />
              ))}
              {provided.placeholder}
              <button onClick={()=> setShowModal(true)} className="addCardBtn"> + Add Card </button>
            </div>
          );
        }}
      </Droppable>
      
    </div>
        <AddCardModal 
        show={showModal}
        keyId={keyId}
        title={title}
        onHide={() => setShowModal(false)} />
    </Col>
  );
}
