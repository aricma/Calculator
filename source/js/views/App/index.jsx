import React, { Component } from 'react';

import Calculator from '../../components/calculator/Calculator';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>SIMPLE CALULATOR</h1>
				<Calculator />
			</div>
    );
  }
}
