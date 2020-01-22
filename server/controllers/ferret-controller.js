const Ferret = require('../models/ferret-model')

createFerret = (req, res) => {
	const body = req.body

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a valid ferret.",
		})
	}

	const ferret = new Ferret(body)

	if (!ferret) {
		return res.status(400).json({ success: false, error: err })
	}

	ferret
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: ferret._id,
				message: "Ferret created!",
			})
		})

		.catch(error => {
			return res.status(400).json({
				error,
				message: "Ferret not created... :(",
			})
		})
}

updateFerret = async (req, res) => {
	const body = req.body

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a body to update.",
		})
	}

	Ferret.findOne({ _id: req.params.id }, (err, ferret) => {
		if (err) {
			return res.status(404).json({
				err,
				message: "Ferret not found!",
			})
		}
		
		ferret.name = body.name
		ferret.age = body.age
		ferret.breed = body.breed
		ferret.litter = body.litter

		ferret
			.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: ferret._id,
					message: "Ferret updated!",
				})
			})

			.catch(error => {
				return res.status(404).json({
					error,
					message: "Ferret not updated... :("
				})
			})
	})
}

deleteFerret = async (req, res) => {
	await Ferret.findOneAndDelete({ _id: req.params.id }, (err, ferret) => {
		if (err) {
			return res.status(400).json({ 
				success: false, 
				error: err 
			})
		}

		if (!ferret) {
			return res
				.status(400)
				.json({ 
					success: false, 
					error: "Ferret not found" 
				})
		}

		return res.status(200).json({ success: true, data: ferret })
	}).catch(err => console.log(err))
}

getFerretById = async (req, res) => {
	await Ferret.findOne({ _id: req.params.id }, (err, ferret) => {
		if (err) {
			return res.status(400).json({ 
				success: false, 
				error: err
			})
		}

		if (!ferret) {
			return res
				.status(400)
				.json({ 
					success: false, 
					error: "Ferret not found" 
				})
		}

		return res.status(200).json({ success: true, data: ferret })
	}).catch(err => console.log(err))
}

getFerrets = async (req, res) => {
	await Ferret.find({}, (err, ferrets) => {
		if (err) {
			return res.status(400).json({ 
				success: false, 
				error: err
			})
		}

		if (!ferrets.length) {
			return res
				.status(400)
				.json({ 
					success: false, 
					error: "Ferrets not found" 
				})
		}
		
		return res.status(200).json({ success: true, data: ferrets })
	}).catch(err => console.log(err))
}

module.exports = {
	createFerret,
	updateFerret,
	deleteFerret,
	getFerrets,
	getFerretById,
}