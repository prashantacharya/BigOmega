import React from 'react';

import Sidebar from './Sidebar';

interface Props {
	children: any;
}

const Layout: React.FC<Props> = (props) => {
	return (
		<div className="layout dark">
			<Sidebar />
			<div className="main-content">{props.children}</div>
		</div>
	);
};

export default Layout;
