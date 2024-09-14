import axios from 'axios'

const axiosDf = axios.create({
	// baseURL: 'https://jira-clone.onrender.com/',
	baseURL: "http://ec2-3-110-84-3.ap-south-1.compute.amazonaws.com/",
	// baseURL: "http://localhost:4000/",
	withCredentials: true,
})

export default axiosDf
