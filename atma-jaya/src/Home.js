import React from "react";
import AgeComponent from "./AgeComponent";
import axios from 'axios';

//function Home() diganti menjadi class Home extends React.Component
class Home extends React.Component {
  //menggunakan constructor untuk membuat state
  constructor(props) {
    super(props);

    this.state = {
      names: ["Adam Christoper"],
      name: "",
      editName: "",
      age: 20,
      hobby: "Playing Games",
      editIndex: -1,
      fruitId: 0,
      fruitName: "",
    };
  }

  componentDidMount() {
    axios.get("/api/fruit/all")
      .then(res => {
        this.setState({
          names: res.data.map(fruit => fruit.name)
        })
      })
  }

  componentDidUpdate() {
    console.log("Home is updated!");
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
    axios.put("api/fruits/all")
  };

  deleteName = (names) => () => {
    const result = this.state.names.filter((index) => {
      return index !== names;
    });
    this.setState({ names: result });
  };

  editName = (index, name) => () => {
    this.setState({ editIndex: index, editName: name });
    
  };

  cancel = () => {
    console.log("cancel");
    this.setState({ editIndex: -1 });
  };

  changeName = () => {
    // tapi ini indexnya mulainya bukannya dari 0?
    this.setState({editIndex: -1, names: this.state.names.map((nama, index) => {
      if (index === this.state.editIndex) {
        return this.state.editName;
      }
      else {
        return nama;
      }
    })})
  };

  handleSearch = () => {
    axios.get(`/api/fruit/${this.state.fruitId}`).then(res => {
      this.setState({
        fruitName: res.data.name
      })
    }).catch(err =>  {
      this.setState({
        fruitName: "Not Found"
      })
    })
  }

  render() {
    console.log("editIndex", this.state.editIndex);
    return (
      <div className="Home">
        {this.state.names.map((names, index) => {
          if (index === this.state.editIndex) {
            return (
              <div>
                <ul className="list-nama">
                  <li>
                    <span>
                      {/* parameter names itu dari index yang ada di map */}
                      <input className="input-nama" value={this.state.editName} onChange={(event) => this.setState({editName: event.target.value })}/>
                      <button
                        className="tombol-delete"
                        onClick={this.changeName}
                      >
                        Save
                      </button>
                      <button onClick={this.cancel}>Cancel</button>
                    </span>
                  </li>
                </ul>
              </div>
            );
          } else {
            return (
              
              <div>
                
                <ul className="list-nama">
                  <li>
                    <span>
                      {/* parameter names itu dari index yang ada di map */}
                      <label className="label-nama" id="Nama">
                        {names}
                      </label>
                      <button
                        className="tombol-delete"
                        onClick={this.deleteName(names)}
                      >
                        Delete
                      </button>
                      <button onClick={this.editName(index, names)}>Edit</button>
                    </span>
                  </li>
                </ul>
              </div>
            );
          }
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
        <br/><br/>
        <input className="fruit-search-bar" placeholder="Search for a fruit" onChange={(event) => this.setState({ fruitId: event.target.value })}/>
        <button onClick={this.handleSearch}>Search</button>
        <br/>
        <label>{this.state.fruitName}</label>
        <br />
        <button className="tombol-logout" onClick={() => this.props.changePage("login")}>Logout</button>
      </div>
    );
  }
}

export default Home;
