import React, { Component } from 'react'

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="/ferrets/list">Ferret Database</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-item nav-link" href="/ferrets/list">Home <span className="sr-only">(current)</span></a>
							<a className="nav-item nav-link" href="/ferrets/create">Create</a>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavBar