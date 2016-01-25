import './header-desktop.scss';

import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

class HeaderDesktop extends Header {
	render() {
		return (
			<div className='header desktop'>
				<div className='title'>
					desktop {this.props.count}
				</div>
				{super.renderLinks()}
			</div>
		);
	}
}

export default connect(
	(state) => {
		return { 
			count: state.count
		} 
	},
	(dispatch) => {
		return {
			goToHome: () => dispatch(routeActions.push('/')),
			goToPage1: () => dispatch(routeActions.push('/page1'))
		}
	}
)(HeaderDesktop)