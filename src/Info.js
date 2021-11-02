import React from "react";
import './index.css';
import './App.css';

class Info extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
        <div className="descrip">
        <h1>
        How does it work?
        </h1>
        <h2>
        We talked to data journalists around the world to determine what they think makes two locations “statistically similar.” The result is a mix of different data points like population, demographics, income rates, etc. To use it, just type in the county (or other related location) you’re researching, how many similar counties you’re looking for, and CounText will do the rest!
        </h2>
        <h1>
        Why is it important?
        </h1>
        <h2>
        Numbers do not always equal truth. When reporting with data, simply letting the numbers speak for themselves can have detrimental effects on your story. Take a simple example: If you were looking at crime rates in Chicago, trying to compare those to crime rates in a tiny town in Oklahoma would not be easy to understand. By comparing a location’s data to corresponding data from similar locales, it allows the journalist to identify patterns, outliers, and the general universe of the data. That’s why we made CounText - we take a complicated step out of your research process to get you to your story faster and better.        </h2>
        </div>
        )
    }
}
export default Info;