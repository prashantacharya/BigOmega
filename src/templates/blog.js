import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/head'
import Mailchimp from '../components/Mailchimp'

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date(formatString: "Do MMMM, YYYY")
				keywords
			}
			html
			timeToRead
		}
	}
`

const Blog = (props) => {
	return (
		<Layout>
			<Head
				title={props.data.markdownRemark.frontmatter.title}
				keywords={props.data.markdownRemark.frontmatter.keywords}
			/>
			<article className="blog">
				<h1>{props.data.markdownRemark.frontmatter.title}</h1>
				<p>
					<i className="far fa-calendar-alt"></i> {props.data.markdownRemark.frontmatter.date} |&nbsp;
						<i className="fas fa-stopwatch"></i> {props.data.markdownRemark.timeToRead}min read
					</p>
				<div className="blog-content" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
			</article>

			<Mailchimp />
		</Layout>
	)
}

export default Blog