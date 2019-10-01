import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'

const Mailchimp = () => {
	const [email, setEmail] = useState('')
	const [status, setStatus] = useState(false)
	const [statusMessage, setStatusMessage] = useState('')

	const handleEmailChange = e => {
		setEmail(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const result = await addToMailchimp(email)
		setStatusMessage(result.msg)

		const resStatus = result.result === 'success' ? true : false
		setStatus(resStatus)
	}

	return (
		<div className='mailchimp'>
			{ !status && 
				(
				<div>
					<h2>Don't wanna miss out the contents I share on the website?</h2>
					<small>Consider Subscribing</small> 
				</div>
				)
			}

			{
				!status && (
					<form onSubmit={handleSubmit}>
						<input className='items' type="email" onChange={handleEmailChange} placeholder='Email' required />
						<button className='items' type='submit'>Submit</button>
					</form>
				)
			}
			{
				status && (
					<h3>Thank you for subscribing</h3>
				)
			}
			{
				!status && (
					<p className='error'>{statusMessage.split('<a')[0]}</p>
				)
			}
		</div>
	)
}

export default Mailchimp
