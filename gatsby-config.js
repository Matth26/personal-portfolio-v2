module.exports = {
  siteMetadata: {
    title: `Matthias Monnier Portfolio`,
    siteUrl: `https://matthiasmonnier.com`,
    name: 'Matthias Monnier',
    description: `Full-Stack Developer - Freelance`,
    email: `matthias.monnier@gmail.com`,
    github: `https://github.com/Matth26`,
    linkedin: `https://fr.linkedin.com/in/matthiasmonnier`,

    projects: [
      {
        name: 'Personal Portfolio',
        imageSrc: 'personal-portfolio.png',
        description:
          'Blazing fast Portfolio built from scratch with GatsbyJs and TailwindCSS',
        link: 'https://github.com/',
        tools: 'Gatsby, React, TailwindCSS, PostCSS, Netlify',
      },
      {
        name: 'Sensor Stations Dashboard',
        imageSrc: 'projects.jpeg',
        description:
          'React dashboard for managing multiple data stations (Raspberry Pi)',
        link: 'https://github.com/',
        tools: 'React, Redux, SocketIO, C, Raspberry Pi',
      },
      {
        name: 'Travian Automated Google Sheet',
        imageSrc: 'travian-sheet.png',
        description:
          'Colaborative Sheet for Travian game scripted with Google App Script',
        link: 'https://github.com/Matth26/gap-travian-deff',
        tools: 'Google Sheet, Google Drive, Js',
      },
      {
        name: 'Showcase website with DatoCMS',
        imageSrc: 'charousse.png',
        description: 'Blazing fast showcase website, data stored on DatoCMS',
        link: 'https://www.charousse.fr/',
        tools: 'Gatsby, React, Netlify', //DatoCMS
      },
    ],

    activities: [
      'Reading self-help books',
      'Ren Xue Qigong',
      'DIY projects',
      'Bike',
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
        name: 'Heroku, Netlify',
        rate: 3.5,
      },
      {
        category: 'Scripting Tools',
        name: 'Python, Bash',
        rate: 5.0,
      },
      {
        category: 'Mobile App',
        name: 'Java, React Native',
        rate: 3.0,
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
        rate: 4.0,
      },
    ],

    workExperiences: [
      {
        title: 'Software Architect and Head of R&D',
        dates: '2020-2021',
        contract: 'Permanent Contract',
        duration: '1y 8m',
        entreprise: {
          name: 'KeyInfuser',
          location: 'Sophia Antipolis (06), France',
          tag: 'Robotic startup building innovative solution for international retail',
        },
        post: [
          'In charge of the whole lifecycle of the robot software and its web interface: conception, developement, tests, deployement and maintenance.',
          'In charge of the R&D department.',
        ],
        //post: 'Responsable conception, developpement, tests et déploiement du logiciel embarqué du robot et de sa platforme web. Responsable Recherche et Developpmement sur le demonstrateur robotisé',
      },
      {
        title: 'R&D developer',
        dates: '2016-2020',
        contract: 'Permanent Contract',
        duration: '3y 5m',
        entreprise: {
          name: 'KeyInfuser',
          location: 'Sophia Antipolis (06), France',
          //tag: 'Startup de conception et développement de solutions innovantes pour le retail',
          tag: 'Robotic startup building innovative solution for international retail',
        },
        post: [
          'Developement and maintenance of the embedded software of the robot.',
          'In charge of the creation of custom software for each client, test, deployement and maintenance.',
        ],
      },
    ],

    educations: [
      {
        school: 'Polytech Montpellier',
        title: 'Microelectronic and Automation',
        dates: '2013-2016',
        description: [
          'Speciality: Robotic - Embedded systems',
          'Semester abroad at the Norwegian University of Science and Technology (NTNU), Norway',
        ],
      },
      {
        school: 'University of Sciences of Montpellier',
        title: 'Preparatory Class',
        dates: '2011-2013',
        description: ['Preparatory class of Polytech Montpellier (PEIP)'],
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
