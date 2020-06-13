import React, { useState } from "react";
import db from "../firebaseConfig";


const Day = () => {

    const [task, setTask] = useState("");
    const [li, setLi] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value) 
    }

//handles the button be clicked
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("tasks").add({ 
            task : task,
            dueDate: "june 17th",
         })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });    
        setTask("");
    }

    const handleTask = () => {
        db.collection("tasks")
            .get()
            .then(QuerySnapshot => {
                // const data = querySnapshot.docs.map(doc => doc.data());
                console.log(QuerySnapshot.docs);
                // setLi(data.map(obj => {
                //     return <li>{li}</li>;
                // }

            });
            setLi("");
    }


    return (
        <div className="container">
            <h4 className="center">Day</h4>
           
             <form onSubmit={handleSubmit} className="center">
                <input onChange={handleChange} type="text" placeholder="What do you want to do?" value={task}></input>
                <button>Add task</button>
             </form>

             <form className="container center" onSubmit={handleTask}>
                 <h2>Today's tasks</h2>
                    <ul>
                        <li>Drink water</li>
                    </ul>
             </form>
        </div>
    )
}

export default Day;