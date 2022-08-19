import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar';
import FormTask from './components/FormTask';
import Task from './components/Task/Task';
import TaskModel from './models/TaskModel';

function App() {
  function create(title: string) {

    return {
      _id: "saasdasd",
      title,
      description: "string",
      date: new Date(),
      isFinished: false,
    }
  }
  let tasksList: TaskModel[] = ["comer", "dormir", "correr", "volar"].map(e => create(e));


  return (
    <div className="mainApp">
      <TitleBar />

      <div className="contentArea">
        <div id="mySidebar" className="leftMenu">

        </div>
        <div className="contentPage">

          <FormTask />

          <div>
            <h1>Lista de tareas</h1>
            <ul>
              {tasksList.map((item, index) => <Task task={item} index={index} />)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
