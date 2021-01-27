import React from "react";
import ColumnGrid from "./ColumnGrid";
import {Col} from 'react-bootstrap';
import TopBar from './TopBar';
import BoardTopBar from './BoardTopBar';

export default function Board() {
  return (
    <Col xl={11} lg={11} md={11} sm={11} xs={11}>
      <TopBar />
      <BoardTopBar/>
      <ColumnGrid />
    </Col>
  );
}
