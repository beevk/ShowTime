import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
/*
const currentDate = () => {
	const date = new Date();
	return date.toDateString();
};

// const greeting = React.createElement('h1', {}, 'Hello World!');
const greeting = <h1>Hello World! Current Date: {currentDate()}</h1>;
*/

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
