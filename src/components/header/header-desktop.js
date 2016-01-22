import './header-desktop.scss';

import React from 'react';
import Header from './header';

export default class HeaderDesktop extends Header {
	constructor() {
		super();
		this.state = {
			url: '/',
			count: 1
		};
	}
	
	render() {
		return (
			<div className='header desktop'>
				<div className='title'>
					desktop {this.state.count}
				</div>
				<div className='links'>
					<div className={'link' + (this.state.url == '/' ? ' active' : '')} onClick={() => super.onClick('/')}>
						home
					</div>
					<div className={'link' + (this.state.url == '/page1' ? ' active' : '')} onClick={() => super.onClick('/page1')}>
						page 1
					</div>
				</div>
			</div>
		);
	}
}