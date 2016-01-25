import './page1.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as global from '../../redux/action-global';
import * as page1 from '../../redux/action-page1';

class Page1 extends Component {
	render() {
		return (
			<div className='content page1'>
				<h1>Page 1</h1>
				<p>This is page 1</p>
				<br />
				<h1>Global Counter</h1>
				<p>{this.props.count}</p>
				<button onClick={this.props.increaseCount}>+</button>
				<button onClick={this.props.decreaseCount}>-</button>
				<br /><br />
				<h1>State of page 1: <i>{this.props.page1Word}</i></h1>
				<button onClick={this.props.togglePage1Word}>toggle</button>
				<br /><br />
				<h1>Device</h1>
				<p>{this.props.device}</p>
				<br />
				<h1>Url</h1>
				<p>{this.props.url}</p>
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
			url: state.routing.location.pathname,
			device: state.device,
			count: state.count,
			page1Word: state.page1Word
		} 
	},
	(dispatch) => {
		return {
			increaseCount: () => dispatch(global.increaseCount),
			decreaseCount: () => dispatch(global.decreaseCount),
			togglePage1Word: () => dispatch(page1.togglePage1Word)
		}
	}
)(Page1)