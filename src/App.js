import './App.css';
import React from 'react';
import './index.css';
import { Route, Link } from 'react-router-dom'; 
import { HashRouter as BrowserRouter } from 'react-router-dom';
import Info from './Info.js'; 
import population from './acs_population.json';

var upperbound = 6;
var lowerbound = 1;
const counties = [];

for (const county of population) {
  counties.push(county.Name);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value_loc: '',
      value_num: 3
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(event) {
    const direc = event.target.getAttribute("mode");
    if (direc === "loc") {
      this.setState({value_loc: event.target.value});
    }
    if (direc === "num") {
      this.setState({value_num: event.target.value});
    }
  }

  handleSubmit(event) {
    if (isNaN(+this.state.value_num)) {
      alert('Please enter a valid number');
    }
    else if (this.state.value_num > upperbound || this.state.value_num < lowerbound) {
      alert('Please enter a number between '+ lowerbound +' and '+upperbound);
    }
    else {
      alert('A name was submitted: ' + this.state.value_loc + this.state.value_num);
      event.preventDefault();
    }
  }

  handleClick(event) {
    event.preventDefault();
    const val = event.target.getAttribute("mode");
    if (val === "plus") {
      if (this.state.value_num+1 > upperbound) {
        alert('Please enter a number between '+ lowerbound +' and '+upperbound);
      }
      else {
         this.setState({value_num: this.state.value_num+1});
      }
    }
    if (val === "minus") {
      if (this.state.value_num-1 < lowerbound) {
        alert('Please enter a number between '+ lowerbound +' and '+upperbound);
      }
      else {
        this.setState({value_num: this.state.value_num-1});
      }
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} className = "Main">
        <div className = "inputform">
          <label>
            Enter a location for comparison, and the number of counties to compare it to:
            </label>
        <label>
          Location:
          <input mode="loc" type="text" value={this.state.value_loc} onChange={this.handleChange} />
        </label>
        <div className="similarcounties">
        <label>
          Number of similar counties:
          <input id="simcount" mode="num" type="text" value={this.state.value_num} onChange={this.handleChange} />
        </label>
        <div className="updownbutton">
          <button className="plusminbutton" onClick={this.handleClick} mode="plus">+</button>
          <button className="plusminbutton" onClick={this.handleClick} mode="minus">-</button>
          </div>
          </div>
        <div className="submitbutton">
        <input type="submit" value="Search" />
        </div>
        </div>
      </form>
      
      <div className="censusinfo">
      
      </div>
      </div>
    );
  }
}
export default App;

// https://www.census.gov/quickfacts/cookcountyillinois