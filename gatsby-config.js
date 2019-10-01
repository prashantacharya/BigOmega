module.exports = {
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog-posts',
				path: `${__dirname}/contents`
			}
		},
		{
			resolve: 'gatsby-plugin-favicon',
			options: {
				logo: './src/static/favicon.png',
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					yandex: false,
					windows: false
				}
			}
		},
		'gatsby-plugin-react-helmet',
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
						resolve: 'gatsby-remark-prismjs',

					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-140813740-1",
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Big Omega`,
				short_name: `BigOmega`,
				start_url: `/`,
				background_color: `#f16063`,
				theme_color: `#f16063`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,
				icon: `src/images/icon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-offline`,
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: 'https://gmail.us20.list-manage.com/subscribe/post?u=05488767b8396fd6572fd2c88&amp;id=a4f0618a3f',
			},
		},
	]
}