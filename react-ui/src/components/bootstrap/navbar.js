import React from 'react';

const Navbar = () =>
	<div className="row">
		<div className="col-12">
			<div className="row">
				<div className="col-4">
					<ul className="nav">
					  <li className="nav-item mx-auto">
					    <a className="nav-link" href="#"><h4>Founders</h4></a>
					  </li>
					  <li className="nav-item mx-auto">
					    <a className="nav-link" href="#"><h4>Investors</h4></a>
					  </li>
					</ul>
				</div>
				<div className="col-4 text-center">
				    <img src="assets/images/transpLogo.png" className="w-25" alt="Go Fish Logo"></img>
				</div>
				<div className="col-4">
					<ul className="nav">
					  <li className="nav-item mx-auto">
					    <a className="nav-link" href="#"><h4>Sign In</h4></a>
					  </li>
					  <li className="nav-item mx-auto">
					    <a className="nav-link" href="#"><h4>Sign Up</h4></a>
					  </li>
					</ul>
				</div>
			</div>
		</div>
	</div>
		
export default Navbar;