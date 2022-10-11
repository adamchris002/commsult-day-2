import React from "react";
import "./App.css";
import AgeComponent from "./AgeComponent";

//function App() diganti menjadi class App extends React.Component
class App extends React.Component {
  //menggunakan constructor untuk membuat state
  constructor(props) {
    super(props);

    this.state = {
      names: ["Adam Christoper"],
      name: "",
      age: 20,
      hobby: "Playing Games",
      editIndex: null,
    };
  }

  componentDidUpdate() {
    console.log("App is updated!");
  }

  // ada 2 cara untuk jalanin function add dan substract
  // incrementAge() {
  //   this.setState({age: this.state.age + 1})
  // }
  // decrementAge() {
  //   this.setState({age: this.state.age - 1})
  // }

  incrementAge = () => {
    this.setState({ age: this.state.age + 1 });
  };
  decrementAge = () => {
    this.setState({ age: this.state.age - 1 });
  };

  addName = () => {
    this.setState({
      names: [...this.state.names, this.state.name],
    });
  };

  deleteName = (names) => () => {
    const result = this.state.names.filter(index => {
      return index !== names
    })
    this.setState({names: result})
  };

  editname = () => {
    var element = document.createElement("input")
    var main_element = document.getElementById("Nama")
    main_element.replaceChild(element, main_element.childNodes[0]);
  }

  render() {
    return (
      <div className="App">
        {this.state.names.map((names) => {
          return (
            <div>
              <ul className="list-nama">
                <li>
                  <span>
                    {/* parameter names itu dari index yang ada di map */}
                    <label className="label-nama" id="Nama">{names}</label>
                    <button onClick={this.deleteName(names)}>Delete</button>
                    <button onClick={this.editname()}>Edit</button>
                  </span>
                </li>
              </ul>
            </div>
          );
        })}
        <h1>Hello my Name is {this.state.name}</h1>
        <h3>My hobby is {this.state.hobby}</h3>
        {/* untuk metode function biasa */}
        {/* <AgeComponent age={this.state.age} incrementAge={this.incrementAge.bind(this)} decrementAge={this.decrementAge.bind(this)}/> */}
        {/* jika meggunakan metode arrow function */}
        <AgeComponent
          age={this.state.age}
          incrementAge={this.incrementAge}
          decrementAge={this.decrementAge}
        />

        {/* mengubah data dalam state dari input */}
        <input
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
          className="ini-input"
        />
        <br />
        <button onClick={this.addName}>Add Name</button>
        <button onClick={this.deleteName}>Delete</button>
      </div>
    );
  }
}

export default App;
