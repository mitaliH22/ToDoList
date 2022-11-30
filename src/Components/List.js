import React from 'react';

function List(){
  return (
    <ul>
      <li className="todo-card">
        <p>username</p>
      </li>
    </ul>
  );
}

// class List extends Component {
//   deleteItem(i){
//     this.props.deleteItem(i);
//   }


//     render() {
//         return (
//           <div className="todoList">
//             <ul className="list">
//               {this.props.value.map((item, i) => (
//                 <li key={i}>
//                   <p>{item}</p>
//                   <div className="btn-group">
//                     {/* <button className="editBtn">
//                       <i class="bi bi-pencil-square"></i>
//                     </button> */}
//                     <button
//                       className="delBtn"
//                       onClick={() => this.deleteItem(i)}
//                       label="del"
//                     >
//                       <i className="bi bi-trash"></i>
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
            
//           </div>
//         );
//     }
// }

export default List