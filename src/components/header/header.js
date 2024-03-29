import './header.scss';

import React, { Component } from 'react';

export default class HeaderDesktop extends Component {
	renderLinks() {
		return (
			<div className='links'>
				<div className={'link' + (this.props.url == '/' ? ' active' : '')} onClick={() => this.props.goToHome()}>
					home
				</div>
				<div className={'link' + (this.props.url == '/page1' ? ' active' : '')} onClick={() => this.props.goToPage1()}>
					page 1
				</div>
			</div>
		);
	}
}