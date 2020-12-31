import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getAllEntries = () => {
  return axios.get(`${baseUrl}/db`)
}

const addNewEntry = newObject => {
  return axios.post(`${baseUrl}/notes`, newObject)
}

const updateEntry = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteEntry = (id) => {
    return axios.delete(`${baseUrl}/notes/${id}`)
  }

export default { 
  getAllEntries: getAllEntries, 
  addNewEntry: addNewEntry, 
  updateEntry: updateEntry,
  deleteEntry: deleteEntry 
}