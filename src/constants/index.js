import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Hi! I'm Misha, a motivated university student passionate about math, computer science, and data science. Throughout my time in university, I have developed skills in full stack engineering, machine learning, and artificial intelligence through various work experiences and personal projects. My main career interests are in software development/engineering, data science/engineering, and quantitative finance.`;

export const ABOUT_TEXT = `I am a current student at Emory University studying math and computer science. Since beginning my studies in computer science, I have worked with a variety of programming languages, including Python, Java, C/C++, SQL, HTML, CSS, and JavaScript. I have also used various libraries, frameworks, and technologies, such as Flask, SQLite, React, Scikit-Learn, and Pandas. My work in software development is motivated by impact-driven projects. I love to use software as a tool to improve the lives of others and make real impact that I can see in the world. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy playing in my university orchestra, watching sports, leading outdoor trips, and going to the gym.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Undergraduate Research Assistant",
    company: "Emory University Computer Science Department",
    description: `Develop a collaborative filtering model for user-POI recommendations, utilizing Singular Value Decomposition (SVD) on a sparse matrix of 500,000 users and 20,000 places of interest (POIs), to increase recommendation precision. Implement Randomized SVD in Scikit-Learn to factorize a high-dimensional user-POI matrix, improving computational efficiency and enabling real-time recommendation updates based on new data. Conduct data analysis on user visitation patterns and POIs, leveraging collaborative filtering techniques to enhance personalized recommendations for the dataset with the goal of improving recommendation relevance.`,
    technologies: ["Python", "Scikit-Learn", "Data Mining", "Machine Learning"],
  },
  {
    year: "2024 - Present",
    role: "SAT & Computer Science tutor",
    company: "The Princeton Review",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Java", "Data Structures", "Algorithms", "Recursion"],
  },
];

export const PROJECTS = [
  {
    title: "StockSimulator",
    image: project1,
    description: "Developed a full stack stock portfolio management web app using Python, Flask, HTML/CSS and JavaScript, integrating the Yahoo Finance API to retrieve real-time stock prices and portfolio values. Engineered a robust user authentication system with a SQLite database for storing user information, enabling users to register, log in, and manage saved portfolios, leading to an enhanced user experience. Implemented a feature that allows users to simulate stock transactions by querying real-time stock prices, accounting for losses/gains in portfolio values for a realistic stock trading experience.",
    technologies: ["Python", "Flask", "HTML/CSS", "Bootstrap", "SQLite", "Yahoo Finance API"],
  },
  {
    title: "Movie Recommendation Engine",
    image: project2,
    description: "Developed a movie recommendation engine using Python, Scikit-Learn, Pandas, and NumPy, enhancing user experience by providing personalized movie suggestions based on the IMDb 5000 movie database. Utilized Pandas for data preprocessing, cleaning, and transformation to prepare the dataset for machine learning tasks. Applied cosine similarity to compute similarity scores between movies, facilitating accurate recommendations.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Machine Learning"],
  },
  {
    title: "APIDA Networking Platform (Currently in progress)",
    image: project3,
    description: "A full stack platform with functionality similar to Linkedin where students identifying as Asian, Pacific Islander, and/or Desi American can connect with similarly-identifying Emory graduates to learn about various careers in Law, Government, Finance, Nonprofits, and more.",
    technologies: ["React", "Next.js", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Atlanta, GA, USA",
  phoneNo: "470-512-0173",
  email: "misha.gupta@emory.edu",
};
