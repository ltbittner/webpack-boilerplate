import './home.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as global from '../../redux/actions/action-global';

class Home extends Component {
	render() {
		return (
			<div className='content home'>
				<h1>Home page</h1>
				<p>This is a home page</p>
				<img className='logo' src={require('../../assets/logo_tb.png')} />
				<br />
				<br />
				<h1>Global Counter at Home</h1>
				<p>{this.props.count}</p>
				<button onClick={this.props.increaseCount}>+</button>
				<button onClick={this.props.decreaseCount}>-</button>
				<br />
				<br />
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
			count: state.count
		};
	},
	(dispatch) => {
		return {
			increaseCount: () => dispatch(global.increaseCount()),
			decreaseCount: () => dispatch(global.decreaseCount())
		};
	}
)(Home);