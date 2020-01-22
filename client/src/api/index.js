import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3000/api'
})

export const insertFerret = payload => api.post(`/ferret`, payload)
export const getAllFerrets = () => api.get(`/ferrets`)
export const updateFerretById = (id, payload) => api.put(`/ferret/${id}`, payload)
export const deleteFerretById = id => api.delete(`/ferret/${id}`)
export const getFerretById = id => api.get(`/ferret/${id}`)

const apis = {
	insertFerret,
	getAllFerrets,
	updateFerretById,
	deleteFerretById,
	getFerretById,
}

export default apis