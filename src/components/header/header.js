import './header.scss';

import { Component } from 'react';
import ReactMixin from 'react-mixin';
import { History } from 'react-router';

export default class Header extends Component {
	onClick(url) {
		this.history.pushState(null, url);
	}
}

ReactMixin.onClass(Header, History);