import './app.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { VelocityTransitionGroup } from 'velocity-react';
import { createHashHistory }  from 'history';

import HeaderDesktop from './components/header/header-desktop';
import Home from './components/home/home';
import Page1 from './components/page1/page1';

import { Provider } from 'react-redux';
import store from './redux/store';
import { setDevice } from './redux/action-global';

class App extends Component {
	constructor() {
		super();

		this.enterAnimation = {
			duration: 500,
			delay: 500,
	    easing: 'ease',
	    animation: {
	      opacity: [1, 0],
	      translateY: [0, '5%']
	    }
	  };

	  this.leaveAnimation = {
	    duration: 500,
	    easing: 'ease',
	    animation: {
	      opacity: [0, 1],
	      translateY: ['5%', 0]
	    }
	  };

	  store.dispatch(setDevice('desktop'));
	}

	render() {
		return (
			<div className='section desktop'>
				<HeaderDesktop />
				<VelocityTransitionGroup enter={this.enterAnimation} leave={this.leaveAnimation}>
					{React.cloneElement(this.props.children, {key: this.props.location.pathname})}
				</VelocityTransitionGroup>
			</div>
		);
	}
};

ReactDOM.render((
	<Provider store={store}>
		<Router history={browserHistory}>
	    <Route path='/' component={App}>
	      <IndexRoute component={Home} />
	      <Route path='page1' component={Page1} />
	    </Route>
	  </Router>
  </Provider>
), document.getElementById('app'));