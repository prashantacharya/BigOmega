import React from 'react'
import { Link } from 'gatsby'
import myImage from '../images/myImage.jpg'

const Header = () => {
	return (
		<>
			<header>
				<h1 id="logo">
					<Link to="/">
						Big Omega<span></span>
					</Link>
				</h1>
			</header>
			<aside className="author-info">
				<div className="img">
					<img src={myImage} alt="Prashant Acharya" className="profile-pic" />
				</div>
				<div className="text">
					<p>A personal blog by Prashant Acharya.</p>
					<ul className="social-media-links">
						<li>
							<a
								href="https://www.instagram.com/prashant_acharya_/"
								target="blank"
							>
								<i className="fab fa-instagram"></i>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/dev_prashaant" target="blank">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="https://github.com/prashantacharya" target="blank">
								<i className="fab fa-github"></i>
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</>
	)
}

export default Header
