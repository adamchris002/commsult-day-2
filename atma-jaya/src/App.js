import React from "react";
import "./App.css";
// import AgeComponent from "./AgeComponent";
import Login from "./login";
import Home from "./Home";

//function App() diganti menjadi class App extends React.Component
class App extends React.Component {
  //menggunakan constructor untuk membuat state
  constructor(props) {
    super(props);

    this.state = {
      page: "login"
    };
  }

  changePage = newPage => {
    this.setState({page: newPage})
  }



  render() {
    console.log("editIndex", this.state.editIndex);
    return (
      <div className="App">
        {
          this.state.page === "login" ? 
          <Login changePage={this.changePage}/> : <Home changePage={this.changePage}/>
        }
      </div>
    );
  }
}

export default App;
