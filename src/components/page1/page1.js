import './page1.scss';

import React, { Component } from 'react';

export default class Page1 extends Component {
	constructor() {
		super();
		this.state = {
			count: 1,
			page1Word: 'hi',
		};
	}

	render() {
		return (
			<div className='content page1'>
				<h1>Page 1</h1>
				<p>This is page 1</p>
				<h1>Page 1 Counter</h1>
				<p>{this.state.count}</p>
				<button onClick=''>+</button>
				<button onClick=''>-</button>
				<h1>Justin is... <i>{this.state.page1Word}</i></h1>
				<button onClick=''>toggle</button>
			</div>
		);
	}
}