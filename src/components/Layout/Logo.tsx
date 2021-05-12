import React from 'react';
import { Logo } from '../../assets/images';

function LogoWrapper() {
	return (
		<div className="logo">
			<img src={Logo} alt="Big Omega" />
		</div>
	);
}

export default LogoWrapper;
