import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({title, keywords}) => {
	return (

		<Helmet>
			<title>{`${title} | BigOmega`}</title>
			<meta name="description" content="A personal blog website"/>
			<meta name="author" content="Prashant Acharya" />
			<meta name="keywords" content={`${keywords}`}/>
		</Helmet>
	)
}

export default Head