module.exports = {
  siteMetadata: {
    // Main Site Title
    title: `Matthias Monnier Portfolio`,
    // Site URL for when it goes live
    siteUrl: `https://www.yourdomain.tld`,
    // Your Name
    name: 'Matthias Monnier',
    // Description that goes under your name in main bio
    description: `Full-Stack Developer - Freelance`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: ``,
    // Optional: LinkedIn account URL
    linkedin: ``,
    // Content of the About Me section
    about: `Hi I'm Mat, a 28 years old french developer.
    I love designing elegant solutions to complex problem. 
    I'm fascinated by the web technologies, and blockchain and crypto world.`,
    projects: [
      {
        name: 'Personal Portfolio',
        imageSrc: 'projects.jpeg',
        description:
          'Blazing fast Portfolio built from scratch with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
        tools: 'Gatsby V2, React, TailwindCSS, PostCSS',
      },
      {
        name: 'Personal Portfolio 2',
        imageSrc: 'projects.jpeg',
        description:
          'Blazing fast personal site built from scratch with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Personal Portfolio 3',
        imageSrc: 'resume.jpeg',
        description:
          'Blazing fast personal site built from scratch with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
