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
        tools: 'Gatsby, React, TailwindCSS, PostCSS',
      },
      {
        name: 'Personal Portfolio 2',
        imageSrc: 'projects.jpeg',
        description:
          'Blazing fast personal site built from scratch with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
        tools: 'Gatsby, React, TailwindCSS, PostCSS',
      },
      {
        name: 'Personal Portfolio 3',
        imageSrc: 'resume.jpeg',
        description:
          'Blazing fast personal site built from scratch with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
        tools: 'Gatsby, React, TailwindCSS, PostCSS',
      },
    ],
    skills: [
      {
        category: 'Web Tools',
        name: 'HTML5, CSS3, JS(ES6), TypeScrit',
        rate: 4.5,
      },
      {
        category: 'Backend',
        name: 'Node.js, Express.js',
        rate: 4,
      },
      {
        category: 'Web App',
        name: 'React.js, Redux, Next.js, Gatsby.js',
        rate: 4,
      },
      {
        category: 'CSS framework',
        name: 'Bootstrap, TailwindCSS',
        rate: 4,
      },
      {
        category: 'Data Management',
        name: 'MongoDB, PostGreSQL, GraphQL',
        rate: 3.5,
      },
      {
        category: 'Version Control',
        name: 'Git, Bitbucket, GitHub',
        rate: 4.5,
      },
      {
        category: 'Cloud Hosting',
        name: 'Heroku, Netlify, GitHub Pages',
        rate: 3.5,
      },
      {
        category: 'Scripting Tools',
        name: 'Python, Bash',
        rate: 0.5,
      },
      {
        category: 'Mobile App',
        name: 'Java, React Native',
        rate: 4.5,
      },
      {
        category: 'Embedded Dev',
        name: 'C, C++, Makefile',
        rate: 4.5,
      },
      {
        category: 'Linux',
        name: 'Archlinux, Buildroot',
        rate: 4.5,
      },
      {
        category: 'Dev Tools',
        name: 'Prettier, ESLint, WebPack',
        rate: 4.5,
      },
    ],
    workExperiences: [
      {
        title: 'Software Architect and R&D lead',
        dates: '2020-2021',
        contract: 'CDI',
        duration: '1y 8m',
        entreprise: {
          name: 'KeyInfuser',
          location: 'Sophia Antipolis (06), France',
          tag: 'Startup de conception et développement de solutions innovantes pour le retail',
        },
        post: 'Responsable conception, developpement, tests et déploiement du logiciel embarqué du robot et de sa platforme web. Responsable Recherche et Developpmement sur le demonstrateur robotisé',
      },
      {
        title: 'Développeur R&D',
        dates: '2016-2020',
        contract: 'CDI',
        duration: '3y 5m',
        entreprise: {
          name: 'KeyInfuser',
          location: 'Sophia Antipolis (06), France',
          tag: 'Startup de conception et développement de solutions innovantes pour le retail',
        },
        post: 'Responsable conception, developpement, tests et déploiement du logiciel embarqué du robot et de sa platforme web. Responsable Recherche et Developpmement sur le demonstrateur robotisé',
      },
    ],
    educations: [
      {
        school: 'Polytech Montpellier',
        title: 'Microélectronique et Automatique',
        dates: '2013-2016',
        description: 'Spécialité: Robotique',
      },
      {
        school: 'Faculté de Science de Montpellier',
        title: 'Classe préparatoire intégrée (PEIP)',
        dates: '2011-2013',
        description: 'Classe préparatoire intégrée à Polytech Montpellier',
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
