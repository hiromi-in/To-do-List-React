import React from'react';

export const CompleteTodos = (props) =>{
    const {todos, onClickRevert} = props;
    return (
        <div className="complete-area">
        <p className="title">Completed task</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={()=> onClickRevert(index)}>Revert</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
};