import React, { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import BoardContext from "../../Contexts/BoardContext";
import Column from "../Column";
import _ from "lodash";
import {Row} from 'react-bootstrap';

export default function ColumnGrid() {
  const { taskList, setTaskList } = useContext(BoardContext);
  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return console.log("Not dropped inside dropable");
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      console.log("dropped in same place");
    }
    
    //Generating an copy of object
    //If we dont do this then we can't add item to other list
    const itemCopy = { ...taskList[source.droppableId].items[source.index] };
    setTaskList((prev) => {
      //Copying old state
      prev = { ...prev };
      //Deleting item from source list
      prev[source.droppableId].items.splice(source.index, 1);
      //Adding item to destination list and selected index
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );
      return prev;
    });
  };

  return (
    <Row style={{padding:20}}>
    <DragDropContext onDragEnd={handleDragEnd}>
      {_.map(taskList, (data, key) => 
      <Column key={key} keyId={key} title={data.title} items={data.items} />
      )}
    </DragDropContext>
    </Row>
  );
}
