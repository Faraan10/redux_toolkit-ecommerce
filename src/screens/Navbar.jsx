import React from "react";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import {useSelector} from "react-redux"

const Navbar = () => {
	//console.log(cart.length);

	const cart=useSelector((state)=> state.cart)
	//console.log(cart.length);

	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-body" data-bs-theme="dark">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						REDUX-TOOLKIT STORE
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/" className="nav-link active">
									PRODUCTS
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/cart" className="nav-link active">
									CART
								</Link>
							</li>
						</ul>
						<ul>
							<li className="nav-item">
								<Link to="/cart" className="nav-link active" aria-disabled="true">
									<span>
										<IoMdCart style={{ fontSize: "40px", marginRight: "10px", color: "white" }} />
									</span>
									<span
										style={{
                                            borderRadius:"9px",
                                            fontSize: "14px",
                                            backgroundColor: "blueviolet",
                                            color: "#fff",
                                            padding: "0 5px",
                                            bottom:"-15px",
                                            verticalAlign:"17px",
                                            marginLeft:"-20px" 
										}}
									>
                                        {cart.length}
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
