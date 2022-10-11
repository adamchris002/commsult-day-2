import React from "react";
import "./App.css";

//function App() diganti menjadi class App extends React.Component
class AgeComponent extends React.Component  {
  //untuk memberikan informasi kalau ada data yang telah terupdate di console
  componentDidUpdate() {
    console.log("This component is updated");
  }
  render() {
    return (
      <div>
        <h3>I am {this.props.age} years old</h3>

        {/* menggunakan setState */}
        <button
          className="Add"
          onClick={ () =>this.props.incrementAge()}
        >
          Add
        </button>
        <button
          className="Substract"
          onClick={this.props.decrementAge}
        >
          Substract
        </button>
      </div>
    );
  }
}

export default AgeComponent;
