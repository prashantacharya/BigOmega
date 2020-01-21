import React from "react"

const Footer = () => {
	const year = new Date()
	return (
		<footer>Copyright &copy; {year.getFullYear()}, Prashant Acharya</footer>
	)
}

export default Footer
