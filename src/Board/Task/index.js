import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Task({ id, index, name }) {
  return (
    <Draggable key={id} index={index} draggableId={id}>
      {(provided, snapshot) => {
        return (
          <>
          <div
            className={`item ${snapshot.isDragging && "dragging"}`}
            //This ref is used for recognize to draggable item from DOM
            ref={provided.innerRef}
            {...provided.draggableProps}
            //This prop helps us to recognize, where we can hold item to drag
            // If we add this to inner child of this div, then that we can drag div only by holding from that child
            {...provided.dragHandleProps}
          >
            {name}
            {<p style={{color:"rgb(170, 170, 170)", fontSize:8}}>{id}</p>}
          </div>
          </>
        );
      }}
    </Draggable>
  );
}
