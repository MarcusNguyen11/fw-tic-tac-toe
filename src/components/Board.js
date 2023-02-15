import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square
            title={squares[0]}
            onClick={() => {
              handleClick(0);
            }}
          />
          <Square
            title={squares[1]}
            onClick={() => {
              handleClick(1);
            }}
          />
          <Square
            title={squares[2]}
            onClick={() => {
              handleClick(2);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            title={squares[3]}
            onClick={() => {
              handleClick(3);
            }}
          />
          <Square
            title={squares[4]}
            onClick={() => {
              handleClick(4);
            }}
          />
          <Square
            title={squares[5]}
            onClick={() => {
              handleClick(5);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            title={squares[6]}
            onClick={() => {
              handleClick(6);
            }}
          />
          <Square
            title={squares[7]}
            onClick={() => {
              handleClick(7);
            }}
          />
          <Square
            title={squares[8]}
            onClick={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}
