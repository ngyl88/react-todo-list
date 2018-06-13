import React, { Component } from "react";
// import TodoList from "./TodoList.js";
import "./App.css";
import HelloWorld from "./HelloWorld.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        {/* <TodoList
          title="David's To Do"
          todos={["buy milk", "learn javascript", "buy lunch"]}
        />
        <TodoList
          title="Sahil's To Do"
          todos={["buy banana", "learn ruby", "buy supper"]}
        /> */}
      </div>
    );
  }
}

export default App;
