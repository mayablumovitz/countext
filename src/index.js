import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Info from './Info';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter className = "page">
    <header className="App-header">
        <Link to="/#" className="links">CounText</Link>
        <label className="headercontent"> A comparison tool for journalists who need to make sense of their data - through context.
        </label>
        <Link to="/#/Info" className="links">More Info</Link>
      </header>
      <div className="main">
      <Route exact path="/#" component={App}  />
      <Route path="/#/Info" component={Info} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
