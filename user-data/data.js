import { unsafeHTML } from "https://unpkg.com/lit-html/directives/unsafe-html.js?module";



export const bio = [
  "<strong>Welcome to my portfolio</strong>, this is where I keep all of the cool projects I work on.",
  "I love project management, product developement, data, and programming.", 
   "With a hybrid background in data analysis, procurement, fashion retail, industrial manufacturing, running kitchens, and game development, I have worn alot of hats and have proven <strong>I love big tasks</strong>.",
  "I’ve led international sourcing, designed fashion collections, built Python programs and automations, and launched analytics dashboards for real-world decision making.",
  "Now I’m blending creativity and tech to build tools, games, and experiences that captivate and inform."
  
];


export const skills = [
  {
    category: "Project & Process Management",
    items: [
      "Agile / Scrum, Gantt charts, Kanban",
      "Vendor coordination, Budgeting, Cost tracking",
      "Inventory management, Cross-functional team leadership",
    ],
  },
  {
    category: "Programming",
    items: [
      "Python, JavaScript, HTML, gdScript",
      "Flask, Render",
      "SQL, DAX",
    ],
  },
  {
    category: "Data Analysis & Visualization",
    items: [
      "Power BI, Tableau",
      "Python (pandas, numpy)",
    ],
  },
  {
    category: "Data Engineering",
    items: [
      "ETL development, Data cleansing",
      "Workflow automation",
      "Orchestration, Data lakes",
    ],
  },
  {
    category: "Software & Tools",
    items: [
      "Monday.com, Jira, Asana",
      "Notion, Cursor",
      "Illustrator, InDesign, Aseprite",
    ],
  },
  {
    category: "Purchasing & Product Development",
    items: [
      "Buying and merchandising, Product lifecycle management",
      "Vendor sourcing, International coordination",
      "Trend-driven planning, Quality control, Product launches",
    ],
  },
  {
    category: "Game Development",
    items: [
      "Godot, Python Arcade",
      "Asset integration, Art and music pipeline coordination",
      "Aseprite, Pixel art asset development",
    ],
  },
  {
    category: "Design & Adobe Suite",
    items: [
      "Product design and development",
      "Fashion design, Interior",
    ],
  },
];

export const featuredProjects = [
  {
    id: "tarot",
    title: "What's New:<span class=highlight-green> Mama Nyah's House of Tarot</span>",
    description: [
      "<strong>Mama Nyah's House of Tarot</strong> is a unique interactive tarot experience blending mystical themes with custom art and music, inspired by New Orleans.",
      "<strong>Developed entirely in Python</strong>, this project features dynamic gameplay and a rich narrative framework.  I used <strong>integrated AI APIs</strong> to show my ability to code with artificial intelligence.  The AI <strong>generates unique readings based on 27 million combinations</strong> of your intention and the cards you pull, a feat impossible for any human game studio. <strong> All of the art, code, and music were made with human hands</strong>.",
      "The app integrates creative design with robust programming, using an OpenAI-powered card reading system and a custom-built animation pipeline.  We use Python Arcade, Flask to connect, Render to handle the server, and SQL to manage user data.  We used Aseprite to create most of the art assets.",
      "I managed this project with Cat & Mallard Studios, as well as handled the publishing, created much of the art, and contributed over half of the code.  It was a great experience and <strong>I can't wait to hear what you think about it.</strong>",
    ],
    github: "https://github.com/DevinReid/Tarot_Generate_Arcade",
    steam: "https://store.steampowered.com/app/3582900/Mama_Nyahs_House_of_Tarot/",
    video: "https://www.youtube.com/embed/pZuKnJhKN_g",
    screenshots: [
      "media/Screenshot 2025-06-11 113710.png",
      "media/intension_selection.png",
      "media/card_selection.png",
      "media/begin_reading.png",
      "media/card_example_1.png"
    ],
    banner: "media/HeaderCapsuleTarotOption2.png"
  }
];

export const dataSections = {
  powerbi: {
    id: "powerbi",
    title: "Data <span class=highlight-green> Visualization </span>",
    description: [
      "I've built custom <strong>Power BI</strong> dashboards from scratch, leveraging <strong>DAX for advanced calculations</strong> and insights. From executive-level KPI summaries to detailed user engagement tracking, I specialize in building dynamic, insightful visualizations.",
      "I’m also experienced in Tableau and Looker for BI dashboards and use <strong>Python (with pandas, matplotlib, and seaborn)</strong> to prepare, transform, and visualize data for analysis.",
      "These screenshots highlight dashboards I’ve developed, designed for readability, performance, and decision-making impact."
    ],
    screenshots: [
      "media/PowerBi/Screenshot 2025-06-12 133349.png",
      "media/PowerBi/Screenshot 2025-06-12 133508.png",
      "media/PowerBi/Screenshot 2025-06-12 133542.png",
      "media/PowerBi/Screenshot 2025-06-12 133706.png",
      "media/PowerBi/Screenshot 2025-06-12 133802.png",
      "media/PowerBi/Screenshot 2025-06-12 133833.png",
      "media/PowerBi/Screenshot 2025-06-12 133901.png",
      "media/PowerBi/Screenshot 2025-06-12 133930.png"
    ]
  }
};

export const testimonials = [
  {
    name: "Tess Goodwin",
    company: "iheartRaves / Emazing group",
    image: "media/testimonials/unnamed.jpg",
    linkedin: "https://www.linkedin.com/in/tessla-goodwin-1a80b61b/",
    testimonial: "Devin tackles every project with a can-do attitude, determination, and endless creativity - he never gives up and always meets his deadlines. He’s a talented storyteller with fantastic, unique ideas that consistently enhance both products andartistic vision. As a leader, he keeps the team on track, stays positive, and is always the first one to step in and help a teammate.",
    flip: false,
  },
  {
    name: "Kyle McVeigh",
    company: "KKR / Cat & Mallard Studios",
    image: "media/testimonials/1538763272701.jpg",
    linkedin: "https://www.linkedin.com/in/kyle-mcveigh/",
    testimonial: "Devin worked with us on a digital app product launch, and I was consistently impressed by his ability to balance creative vision with execution. He brings a strong sense of structure, communicate clearly across teams, and are relentless about hitting deadlines without compromising quality. His planning instincts and proactive problem-solving made a huge difference.",
    flip: true,
  },
  {
    name: "Yena Zhang",
    company: "Hangzhou Fonesun Textile Technology Co.",
    image: "media/testimonials/yena.png",
    linkedin: "https://hzfsfashion.en.alibaba.com/",
    testimonial: "Devin is very good to work with. Always clear with what they want, and always follows up on time. When we a have problem, Devin does not get angry, just find solution together. They respect our holiday time and understand how our factory works. Very professional and kind client.",
    flip: false,
  }
];


export const accolades = [
  {
    title: "Congressional Medal for Antarctic Service",
    subtitle: "McMurdo Station, Antarctica",
    date: "2018",
    description: [
      "Awarded by the United States Congress in recognition of exceptional service in support of U.S. scientific operations in Antarctica.",
      "Served as Head Chef at McMurdo Station from 2015 to 2018, supporting NASA, NSF, and international science teams."
    ],
    images: [
      "media/accolades/IMG_0820.JPG",
      "media/accolades/IMG_0821.JPG",
    ],
  },
];


export const experience = [
  {
    title: "Cat and Mallard Studios",
    duration: "2024 – Present",
    subtitle: "Python Developer / Digital Project Manager",
    details: [
      "Built and launched 'Mama Nyah’s House of Tarot', a cross-platform game integrating Python Arcade, Flask API, and OpenAI GPT.",
      "Developed a PostgreSQL backend and Flask-based logic hosted on Render for AI-driven tarot readings.",
      "Led end-to-end game development, from concept and design to packaging and Steam deployment.",
      "Managed art and audio pipelines, documentation, Git source control, and agile sprint planning.",
    ],
    tags: ["Python", "Flask", "PostgreSQL", "Arcade", "PyInstaller", "Git", "GameDev"],
    icon: "gamepad",
  },
  {
    title: "Fenclaw & Faund",
    duration: "2019 – 2024",
    subtitle: "Production Manager / Buyer",
    details: [
      "Directed product development and merchandising for a fantasy fashion brand, managing vendor relations and international sourcing.",
      "Used Gantt and Kanban workflows in Monday.com and Jira to coordinate design, procurement, and launches.",
      "Designed reporting dashboards using Power BI and Python to track product milestones and sales trends.",
      "Led seasonal campaigns, educated wholesale partners, and enforced quality control standards.",
    ],
    tags: ["Product Development", "Power BI", "Python", "Excel", "Vendor Sourcing", "Fashion"],
    icon: "tshirt",
  },
  {
    title: "Madgineering Agricultural Technology Company",
    duration: "2019 – 2023",
    subtitle: "Operations Manager",
    details: [
      "Oversaw construction and launch of a new ag-tech facility, coordinating contractors and sourcing materials.",
      "Implemented data systems in Power BI and Excel to track production metrics, hiring needs, and supply chain logistics.",
      "Built automated workflows to improve vendor coordination and reduce inventory delays.",
      "Recruited and trained a team of 20+, creating SOPs to drive efficiency and ensure regulatory compliance.",
    ],
    tags: ["Operations", "Power BI", "Excel", "Procurement", "SOPs", "Team Leadership"],
    icon: "leaf",
  },
  {
    title: "U.S. Antarctic Research Program",
    duration: "2016 – 2019",
    subtitle: "Head Chef – McMurdo Station",
    details: [
      "Led culinary and logistical operations in Antarctica, feeding hundreds of researchers under extreme conditions.",
      "Managed nutrition data, supply chain orders, and safety standards with limited access to resupply.",
      "Supported scientific missions by ensuring morale and sustenance in an isolated environment.",
      "Received the Congressional Medal for Antarctic Service in 2018.",
    ],
    tags: ["Leadership", "Logistics", "Inventory", "Nutrition", "Safety", "Antarctica"],
    icon: "snowflake",
  },
    {
    title: "Silver Bay Seafoods",
    duration: "2019 – 2021",
    subtitle: "Head Chef / Project Manager",
    details: [
      "Directed culinary operations and oversaw construction projects at a globally renowned seafood processing facility in Naknek, Alaska.",
      "Managed day-to-day kitchen operations, setting and maintaining high culinary standards to enhance facility reputation.",
      "Led the construction and expansion of dining facilities, coordinating project timelines with executives to implement strategic improvements.",
      "Created and implemented new SOPs that streamlined operations and improved consistency across culinary teams.",
      "Established training programs and mentored both kitchen and front-of-house teams, improving service quality and operational flow.",
      "Collaborated with cross-functional teams to align on quality and efficiency goals, contributing to improved guest experience."
    ],
    tags: ["Project Management", "Construction Coordination", "Culinary Operations", "SOPs", "Team Training"],
    icon: "fish"
  },
];

export const education = [
  {
    title: "B.F.A. in Culinary Management",
    duration: "2010 – 2014",
    subtitle: "Miami Institute of Art and Design, FL",
    details: [
      "Focused on operations, hospitality, and team leadership. Supported by electives in design and cross-cultural management.",
    ],
    tags: ["Culinary", "Management", "Design"],
    icon: "graduation-cap",
  }
];


export const travels = [
  {
    title: "Life at the Bottom of the World",
    subtitle: "Antarctica • McMurdo Station",
    date: "2015–2018",
    description: [
      "I worked three seasons as the head chef at McMurdo Station, supporting the U.S. research community.",
      "People always ask if it was lonely—honestly, I was surrounded by 600 fascinating people and always busy.",
      "Without the internet, life slowed down in a good way. It was one of the most unique and connected places I've lived."
    ],
    images: [
      "media/travel/ice1.webp",
      "media/travel/ice6.webp",
      "media/travel/ice2.webp",
      "media/travel/ice3.webp",
      "media/travel/ice4.webp",
      "media/travel/ice5.webp",
      "media/travel/ice7.webp",
      "media/travel/ice8.webp",
      "media/travel/ice9.webp",
      "media/travel/ice10.webp",
    ]
  },
  {
    title: "Making Money on Motorbikes",
    subtitle: "Vietnam • North to South",
    date: "2019",
    description: [
      "Two weeks on a motorbike through the north, a week fabric shopping in Hanoi, and two weeks working with tailors and clothing manufacturers in Hoi An.",
      "Vietnam is my favorite country—lush jungles, amazing people, and some of the best food on Earth.",
      "I can't wait to go back."
    ],
    images: [
      "media/travel/nam1.webp",
      "media/travel/nam2.webp",
      "media/travel/nam3.webp",
      "media/travel/nam4.webp",
    ]
  },
  {
    title: "My Stardew Valley Era",
    subtitle: "France • Venterol, Provence-Alpes-Côte d'Azur",
    date: "2017",
    description: [
      "I helped restore an abandoned vineyard, cooked for the locals, and became part of a small French village community.",
      "We had a cellar full of unsellable ancient wine the owner wanted cleared out—I was up to the challenge.",
      "It really did feel like living inside Stardew Valley."
    ],
    images: [
      "media/travel/france1.webp",
      "media/travel/france2.webp",
      "media/travel/france3.webp",
      "media/travel/france4.webp",
      "media/travel/france5.webp",
      "media/travel/france6.webp",
      "media/travel/france7.webp",
    ]
  },
  {
  title: "Everywhere Else I've Been",
  subtitle: "Countries Visited",
  date: "",
  description: [
    "I’ve been lucky to travel extensively through over 30 countries. Each trip changed how I see the world.",
    "From sipping mint tea in Morocco to hiking fjords in Norway, here are more places I've visited:"
  ],
  images: [],
  tags: [
    "Malaysia", "New Zealand", "Australia", "Ireland", "England", "Scotland", "The Netherlands", "Belgium",
    "Norway", "Sweden", "Denmark", "Germany", "Czech Republic", "Romania", "Greece", "Italy", "Spain",
    "Portugal", "Morocco", "Laos", "Cambodia", "Thailand", "Indonesia", "India", "China"
  ]
},
{
  title: "Places I Want to Go",
  subtitle: "Still on the List",
  date: "",
  description: [
    "I don't believe that the world is too big for one lifetime, but connecting with every soul on this earth surely is. I know that seems crazy, connecting with billions, but I'll try my best. Here are the places calling to me most right now:"
  ],
  images: [],
  tags: ["Japan", "Turkey", "More of Vietnam", "More of Germany", "The Caribbean Islands"]
}

];

export const mediaAppearances = [
  {
    title: "Parts Unknown: Antarctica",
    platform: "CNN / YouTube / Max / hulu / Prime",
    description: [
      "Featured in kitchen scenes and a group pan shot at McMurdo Station. The green beans!",
      "Anthony Bourdain was reserved, only spoke with him a few times, but I spent alot of time with his amazing crew.",
      "Lived with them for weeks while filming, great experience"
    ],
    mediaType: "video",
    embed: "https://www.youtube.com/embed/dOCo1NzDNnQ",
    thumbnail: "media/appearances/partsUnkown.png",
    fullEpisodeLink: "https://explorepartsunknown.com/destination/antarctica/"
  },
  {
    title: "Game Changer – One Year Later",
    platform: "Dropout.tv / YouTube",
    description: [
      "Helped a contestant, Lou Wilson, complete a year long challenge that involved taking a cardboard cutout of the host, Sam Reich, to most remote place on Earth.",
      "We pulled it off—and it aired.",
      "3 Points!"
    ],
    mediaType: "video",
    embed: "https://www.youtube.com/embed/Yt8hrH71gko",
    thumbnail: "media/appearances/dropout.png",
    fullEpisodeLink: "https://www.dropout.tv/videos/one-year-later"
  },
  {
    title: "The Besties Podcast",
    platform: "Simplecast / Apple Music / Spotify",
    description: [
      "Mentioned on the show after giving a host some items from Fenclaw & Faund at a movie screening.",
      "They helped us promote our LA Comic Con event."
    ],
    mediaType: "audio",
    mediaSrc: "media/appearances/BestiesCameo.mp3",
    thumbnail: "media/appearances/BestiesLogo.webp",
    fullEpisodeLink: "https://the-besties.simplecast.com/episodes/2023-indies-you-might-have-missed"
  },
  {
    title: "Tarot Interviews Podcast",
    platform: "Podfollow / Apple Music / Spotify",
    description: [
      "I was interviewed about Mama Nyah’s House of Tarot and the game design process behind it.", 
      "Check this out!",
    ],
    mediaType: "audio",
    mediaSrc: "media/appearances/tarotInterview.mp3",
    thumbnail: "media/appearances/tarotLogo.webp",
    fullEpisodeLink: "https://podfollow.com/tarot-interviews/episode/253015580c890b330671adb45563f1de01cc53e3/view"
  }
];


export const interiors = {
  title: "Interior Design & <span class=highlight-green>Spatial Aesthetics</span>",
  description: [
    "Before I was a developer, or a project manager or a chef, I was a painter—and that sense of composition and attention to detail still drives my design work today.",
    "Building beautiful, moody, and functional spaces has become one of my favorite creative outlets.",
    "Here are a few of my favorite interiors I've brought to life."
  ],
  images: [
    "media/interiors/interior1.webp",
    "media/interiors/interior2.webp",
    "media/interiors/interior3.webp",
    "media/interiors/interior4.webp"
  ]
};


export const shortStories = [
  {
    title: "The Cat Captain's Coffers",
    description: [
      "Felix Fenclaw, the fearless cat captain, lands at the harbor town of Kazan and meets enchantress Fiona Faund.",
      "Their fateful encounter kicks off a thrilling adventure to find the golden portal."
    ],
    thumbnail: "media/stories/CCClogo.png",
    link: "https://www.fenclawandfaund.com/product-page/storybook"
  },
  {
    title: "Adaween, Gem of the Jungle",
    description: [
      "Join Felix and Fiona as they search for the Golden Portal ruins and face off with the notorious Jeweler's Guild.",
      "A jungle heist with magic, mystery, and daring pirates."
    ],
    thumbnail: "media/stories/AGJlogo.png",
    link: "https://www.fenclawandfaund.com/product-page/adaween-gem-of-the-jungle-storybook"
  },
  {
    title: "Cult of Mathilda",
    description: [
      "Felix, Fiona, and the Swordfish crew battle evil forces and a spider-worshiping cult to reach the legendary golden portal.",
      "Danger and mystery await at every turn."
    ],
    thumbnail: "media/stories/COM.png",
    link: "https://www.fenclawandfaund.com/product-page/cult-of-mathilda-storybook"
  }
];
export const music = {
  title: "How Much Is Enough?",
  description: [
    "This pirate shanty, featured in one of our short stories, was produced in collaboration with Velvet Honey.",
    "A QR code linking to the song is sewn into the inside of our pirate hat, so you can listen and officially join the crew.",
  ],
  spotifyEmbed: "https://open.spotify.com/embed/track/7xbLPXHrLjEnfXtEpdr96f?utm_source=generator",
  mp3: "media/HowMuchIsEnough-Mastered1.0(16-44.1)-Fenclaw&Faund.mp3",
  hatImage: "media/pirateHat.webp",
  hatLink: "https://www.fenclawandfaund.com/product-page/how-much-is-enough-tricorn",
  producerLink: "https://www.velvethoney.com/"
};



export const footer = [
  {
    label: "Links",
    data: [
      {
        text: "Buy me a coffee",
        link: "https://buymeacoffee.com/devinreid",
      },
      {
        text: "Github",
        link: "https://github.com/devinreid",
      },

    ],
  },
  {
    label: "copyright-text",
    data: ["Made with magic by Devin Reid"],
  },
];
