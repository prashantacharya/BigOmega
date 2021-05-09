import React from 'react';
import { Link } from 'gatsby';
import {
	HomeIcon,
	TerminalIcon,
	MailIcon,
	BookOpenIcon,
} from '@heroicons/react/solid';

import { Prashant } from '../../assets/images';

const Sidebar = () => {
	return (
		<nav className="sidebar">
			<img src={Prashant} alt="Prashant Acharya" />

			<ul>
				<li>
					<Link to="/" activeClassName="active-nav-link">
						<span className="nav-icon">
							<HomeIcon />
						</span>
						<span className="nav-text">Home</span>
					</Link>
				</li>
				<li>
					<Link to="/blogs" activeClassName="active-nav-link">
						<span className="nav-icon">
							<BookOpenIcon />
						</span>
						<span className="nav-text">Blogs</span>
					</Link>
				</li>
				<li>
					<Link to="/projects" activeClassName="active-nav-link">
						<span className="nav-icon">
							<TerminalIcon />
						</span>
						<span className="nav-text">Projects</span>
					</Link>
				</li>
				<li>
					<Link to="/contact" activeClassName="active-nav-link">
						<span className="nav-icon">
							<MailIcon />
						</span>
						<span className="nav-text">Contact Me</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;
