import React from 'react';

import Sidebar from './Sidebar';
import Logo from './Logo';

interface Props {
	children: any;
}

const Layout: React.FC<Props> = (props) => {
	return (
		<div className="layout dark">
			<Sidebar />
			<div className="main-content">
				<div className="container">
					<Logo />
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
