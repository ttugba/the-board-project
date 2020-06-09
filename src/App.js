import React from 'react';
// import { connect } from "react-redux";
import db from "./firebaseConfig";
import Greet from "./components/greet";
import Submit from "./components/submit";
import planner from "./reducers/planner";
import { addWeek, deleteWeek, addTask, deleteTask, mark } from "./reducers/action"




const App = () => {

  return (
    <div className="App">
      <Greet />
      <Submit />
    </div>
  );
}



// async componentDidMount({
//   const res = await db.collection("boards").doc("board").get()
//   const data = res.data()
//   this.setState({
//     field1: data.field1,
//   })
//   console.log(this)
// })

// addList = e => {
//   db.collection("lists").add({
//     title: this.state.item,
//     dueDate: this.state.dueDate
//   })
//   this.setState({
//     item: "",
//     dueDate: "",
//   });
// };


export default App;
