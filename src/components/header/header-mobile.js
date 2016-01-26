import './header-mobile.scss';

import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

class HeaderMobile extends Header {
	render() {
		return (
			<div className='header mobile'>
				<div className='title'>
					mobile
				</div>
				{super.renderLinks()}
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
			url: state.routing.location.pathname
		};
	},
	(dispatch) => {
		return {
			goToHome: () => dispatch(routeActions.push('/')),
			goToPage1: () => dispatch(routeActions.push('/page1'))
		};
	}
)(HeaderMobile);