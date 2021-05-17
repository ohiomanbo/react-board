import React from "react";

function Board({ boardId, boardTitle, boardContent, onRemove, onRowClick }) {
  return (
    <tr align="center">
      <td onClick={() => onRowClick(boardId)}>{boardId}</td>
      <td onClick={() => onRowClick(boardId)}>{boardTitle}</td>
      <td onClick={() => onRowClick(boardId)}>{boardContent}</td>
      <td>
        <button onClick={() => onRemove(boardId)}>삭제</button>
      </td>
    </tr>
  );
}

export default Board;
