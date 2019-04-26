module.exports = {
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog-posts',
				path: `${__dirname}/contents`
			}
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 600,
							linkImagesToOriginal: false
						}
					},
					{
						resolve: 'gatsby-remark-prismjs'
					}
				]
			}
		}
	]
}