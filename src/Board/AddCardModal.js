import React,{useState,useContext,useRef} from 'react';
import {Modal,Button} from 'react-bootstrap';
import {v4} from 'uuid';
import BoardContext from '../Contexts/BoardContext';

function AddCardModal({show,onHide,keyId,title}) {
    const [input, setInput] = useState("");
    const {setTaskList} = useContext(BoardContext);
    const inputRef = useRef();
    const handleSubmit = e => {
        e.preventDefault();
        setTaskList(prev => {
      //Copying old state
      prev = { ...prev };
      //Adding item to destination list and selected index
      prev[keyId].items.splice(
        0,
        0,
        {name:input, id:v4()}
      );
        return prev;
        });
        setInput("");
        onHide();
    }


    return (
        <Modal
          onHide={onHide}
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onShow={() => {inputRef.current.focus()}}
          
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form  onSubmit={handleSubmit} >
                <label >Task is : </label>
                <input ref={inputRef} type="text" style={{marginLeft:10}} value={input} onChange={(e) => setInput(e.target.value)}></input>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default AddCardModal
