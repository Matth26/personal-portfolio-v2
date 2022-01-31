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
    skills: [
      'HTML5, CSS3, JavaScript • 5 Years of Experience',
      'Node.js, Express.js, Mongoose • 2 Years of Experience',
      'React.js, Next.js, Gatsby.js • 2 Years of Experience',
      'MongoDB MongoDB Atlas • 2 Years of Experience',
      'Git, Version Control, GitLab, GitHub • 5 Years of Experience',
      'Vercel, Heroku, Netlify, GitHub Pages • 3 Years of Experience',
      'PHP, Laravel • 4 Years of Experience',
      'Python, Flask • 7 Years of Experience',
      'Java • 4 Years of Experience',
      'Electron • 4 Years of Experience',
      'Firebase • 5 Years of Experience',
      'Jekyll • 5 Years of Experience',
      'Chrome Extension Development • 4 Years of Experience',
      'Flutter • 1 Year of Experience',
    ],
    workExperiences: [
      {
        title: 'Software Architect and R&D lead',
        dates: 'Feb 20 - Oct 21',
        contract: 'CDI',
        duration: '4 year',
        entreprise: {
          name: 'KeyInfuser',
          location: 'Sophia Antipolis (06), France',
          tag: 'Startup de conception et développement de solutions innovantes pour le retail',
        },
        post: 'Responsable conception, developpement, tests et déploiement du logiciel embarqué du robot et de sa platforme web. Responsable Recherche et Developpmement sur le demonstrateur robotisé',
      },
      {
        title: 'Développeur R&D',
        dates: 'Sep 16 - Feb 20',
        contract: 'CDI',
        duration: '4 year',
        entreprise: {
          name: 'KeyInfuser',
          location: 'Sophia Antipolis (06), France',
          tag: 'Startup de conception et développement de solutions innovantes pour le retail',
        },
        post: 'Responsable conception, developpement, tests et déploiement du logiciel embarqué du robot et de sa platforme web. Responsable Recherche et Developpmement sur le demonstrateur robotisé',
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
