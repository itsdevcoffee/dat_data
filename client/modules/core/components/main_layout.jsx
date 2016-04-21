import React from 'react';
import SideNav from './../containers/sidenav.js';
const Layout = ({content = () => null }) => (
	<div className="wrapper">
		<SideNav />
		<div className="page-wrapper">
			{content()}
		</div>
	</div>
);

export default Layout;
