// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Research projects — ongoing and completed.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-impact",
          title: "impact",
          description: "Policy work, media coverage, datasets, and public engagement.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/impact/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught at Universidad de los Andes and other institutions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-experimental-evaluation-of-an-early-childhood-education-program-in-peru",
          title: 'Experimental Evaluation of an Early Childhood Education Program in Peru',
          description: "Evaluating a new early childhood education model (Educuna) in partnership with the Peruvian government using randomized assignment of slots in oversubscribed centers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/early-childhood-education-educuna/";
            },},{id: "projects-impact-evaluations-of-english-learning-interventions-in-colombia",
          title: 'Impact Evaluations of English Learning Interventions in Colombia',
          description: "A multi-year research agenda of experimental and quasi-experimental evaluations of English language training programs in Colombia.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/english-learning-interventions/";
            },},{id: "projects-jóvenes-a-la-u-scholarship-access-to-higher-education-in-colombia",
          title: 'Jóvenes a la U: Scholarship Access to Higher Education in Colombia',
          description: "Evaluating the impact of Bogotá&#39;s scholarship program on access to and persistence in higher education.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jovenes-a-la-u/";
            },},{id: "projects-massive-open-online-courses-and-labor-market-outcomes-evidence-from-colombia",
          title: 'Massive Open Online Courses and Labor Market Outcomes: Evidence from Colombia',
          description: "Studying the impact of MOOC certificates on formal labor employment using an RCT with ~21,000 applicants.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/moocs-labor-market/";
            },},{id: "projects-parental-engagement-intervention-for-early-childhood-language-development",
          title: 'Parental Engagement Intervention for Early Childhood Language Development',
          description: "Evaluating a low-cost behavioral intervention to improve early childhood language development by promoting parent-child interaction in Peru.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/parental-engagement/";
            },},{id: "projects-impact-of-a-pedagogical-coaching-program-on-learning-outcomes-in-peru",
          title: 'Impact of a Pedagogical Coaching Program on Learning Outcomes in Peru',
          description: "Evaluating the short and long-run effects of a large-scale pedagogical coaching program implemented in rural Peru.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pedagogical-coaching-peru/";
            },},{id: "projects-the-effect-of-a-preschool-expansion-on-early-learning-outcomes-in-peru",
          title: 'The Effect of a Preschool Expansion on Early Learning Outcomes in Peru',
          description: "Examining the short- and long-term impacts of expanded access to preschool education in Peru on educational attainment and later-life outcomes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/preschool-expansion-peru/";
            },},{id: "projects-regular-psychological-support-and-student-outcomes-in-peru",
          title: 'Regular Psychological Support and Student Outcomes in Peru',
          description: "Studying the impact of a large-scale randomized program that assigned full-time school psychologists to high-violence public secondary schools in Peru.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/school-psychologists-peru/";
            },},{id: "teachings-impact-evaluation-evaluación-de-políticas-públicas",
          title: 'Impact Evaluation (Evaluación de Políticas Públicas)',
          description: "This course covers the foundational aspects of impact evaluation.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/impact-evaluation-2026-spring/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/smajerowicz_cv_2026.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73.%6D%61%6A%65%72%6F%77%69%63%7A@%75%6E%69%61%6E%64%65%73.%65%64%75.%63%6F", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UHJ35nUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
