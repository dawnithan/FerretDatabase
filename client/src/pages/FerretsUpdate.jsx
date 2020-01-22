import React, { Component } from 'react'
import api from '../api'

class FerretsUpdate extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.match.params.id,
			name: '',
			age: '',
			breed: '',
			litter: ''
		}
	}

	handleChangeInputName = async event => {
		const name = event.target.value
		this.setState({ name })
	}

	handleChangeInputAge = async event => {
		const age = event.target.value
		this.setState({ age })
	}

	handleChangeInputBreed = async event => {
		const breed = event.target.value
		this.setState({ breed })
	}

	handleChangeInputLitter = async event => {
		const litter = event.target.value
		this.setState({ litter })
	}

	handleUpdateFerret = async () => {
		const { id, name, age, breed, litter } = this.state
		const payload = { name, age, breed, litter }

		await api.updateFerretById(id, payload).then(res => {
			window.alert("Entry updated successfully.")
			this.setState({
				name: '',
				age: '',
				breed: '',
				litter: ''
			})
		})
	}

	handleCancel = (event) => {
		event.preventDefault()
		window.location.href = "/ferrets/list"
	}

	componentDidMount = async () => {
		const { id } = this.state
		const ferret = await api.getFerretById(id)

		this.setState({
			name: ferret.data.data.name,
			age: ferret.data.data.age,
			breed: ferret.data.data.breed,
			litter: ferret.data.data.litter
		})
	}

	render() {
		const { name, age, breed, litter } = this.state
		return (
			<div className="container">
				<div className="row">
					<h1>Update Ferret</h1>
				</div>
				<div className="form-group row">
					<label>Name</label>
					<input className="form-control" value={name} onChange={this.handleChangeInputName} />
				</div>
				
				<div className="form-group row">
					<label>Age</label>
					<input className="form-control" value={age} onChange={this.handleChangeInputAge} />
				</div>

				<div className="form-group row">
					<label>Breed</label>
					<input className="form-control" value={breed} onChange={this.handleChangeInputBreed} />
				</div>

				<div className="form-group row">
					<label>Litter</label>
					<input className="form-control" value={litter} onChange={this.handleChangeInputLitter} />
				</div>

				<div className="form-group row">
					<button type="button" className="btn btn-primary mr-2" 
						onClick={this.handleUpdateFerret}>Update</button>
					<button type="button" className="btn btn-danger"
						onClick={this.handleCancel}>Return to List</button>
				</div>
			</div>
		)
	}
}

export default FerretsUpdate