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
    const result = this.state.names.filter(name => {
      return name !== names
    })
    this.setState({names: result})
  };

  render() {
    return (
      <div className="App">
        {this.state.names.map((names) => {
          return (
            <div>
              <ul className="testing">
                <li>
                  <span>
                    <label className="label-nama">{names}</label>
                    <button onClick={this.deleteName(names)}>Delete</button>
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
        />
        <br />
        <button onClick={this.addName}>Add Name</button>
        <button onClick={this.deleteName}>Delete</button>
      </div>
    );
  }
}

export default App;
