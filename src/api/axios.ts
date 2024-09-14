import axios from 'axios'

const axiosDf = axios.create({
	// baseURL: 'https://jira-clone.onrender.com/',
	baseURL: "http://ec2-43-204-218-102.ap-south-1.compute.amazonaws.com/",
	// baseURL: "http://localhost:4000/",
	withCredentials: true,
})

export default axiosDf
