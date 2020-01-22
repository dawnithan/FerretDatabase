import React, { Component } from 'react'
import api from '../api'

class UpdateFerret extends Component {
	updateFerret = event => {
		event.preventDefault()
		window.location.href = `/ferrets/update/${this.props.id}`
	}

	render () {
		return <input type="button" className="btn btn-primary" onClick={this.updateFerret} value="Update" />
	}
}

class DeleteFerret extends Component {
	deleteFerret = event => {
		event.preventDefault()

		if (window.confirm("Delete this entry permanently?")) {
			api.deleteFerretById(this.props.id)
			window.location.reload()
		}
	}

	render() {
		return <input type="button" className="btn btn-danger" onClick={this.deleteFerret} value="Delete" />
	}
}

class FerretsList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ferrets: []
		}
	}

	componentDidMount = async () => {
		await api.getAllFerrets().then(ferrets => {
			this.setState({ ferrets: ferrets.data.data })
		})
	}

	renderTableData() {
		return this.state.ferrets.map((ferret, index) => {
			const { _id, name, age, breed, litter } = ferret
			return (
				<tr key={index}>
					<td>{name}</td>
					<td>{age}</td>
					<td>{breed}</td>
					<td>{litter}</td>
					<td><UpdateFerret id={_id}/></td>
					<td><DeleteFerret id={_id}/></td>
				</tr>
			)
		})
	}

	// renderTableHeader() {
	// 	let f = this.state.ferrets
	// 	if (f.length > 0) {
	// 		let header = Object.keys(f)
	// 		return header.map((key, index) => {
	// 			return <th key={index}>{key.toUpperCase()}</th>
	// 		})
	// 	}
	// 	else {
	// 		return <th>Loading...</th>
	// 	}		
	// }
	// <tr>{this.renderTableHeader()}</tr>

	render() {
		// const ferrets = this.state
		// let showTable = true
		// if (!ferrets.length) {
		// 	showTable = false
		// }

		return (
			<div className="container">
				<h1>Current Entries</h1>
				<a href="/ferrets/create">Add a ferret</a>
				<table className="table table-bordered">
					<thead className="thead-light">
						<tr>
							<th>Name</th>
							<th>Age</th>
							<th>Breed</th>
							<th>Litter</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.renderTableData()}
					</tbody>
				</table>
			</div>
		)
	}
}

export default FerretsList