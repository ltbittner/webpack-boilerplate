import './home.scss';

import React, { Component } from 'react';
// import signal from '../../signal/signal';
import { connect } from 'react-redux';
import { increaseAction } from '../../redux/action';

class Home extends Component {
	render() {
		const { value, onIncreaseClick } = this.props;
		return (
			<div className='content home'>
				<h1>Home page</h1>
				<p>This is a home page</p>
				<img className='logo' src={require('../../assets/logo_tb.png')} />
				<h1>Home Counter</h1>
				<p>{value}</p>
				<button onClick={onIncreaseClick}>+</button>
				<button onClick=''>-</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		value: state.count
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncreaseClick: () => dispatch(increaseAction)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)