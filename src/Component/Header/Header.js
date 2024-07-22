import React from 'react';
import './Header.scss';
import logo from '../../images/logo.svg';
export default function Header() {
	return (
		<header className="header">
			<img src={logo} className="header__logo" />
		</header>
	);
}
