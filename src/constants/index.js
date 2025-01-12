import aichef from "../assets/projects/aichef.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Hi! I'm Misha, a motivated university student passionate about math, computer science, and data science. Throughout my time in university, I have developed skills in full stack engineering, machine learning, and artificial intelligence through various work experiences and personal projects. My main career interests are in software development/engineering, data science/engineering, and quantitative finance.`;

export const ABOUT_TEXT = `I am a current student at Emory University studying math and computer science. Since beginning my studies in computer science, I have worked with a variety of languages, including Python, Java, C, SQL, HTML, CSS, and JavaScript. I have also used various libraries, frameworks, and technologies, such as Flask, React.js, and Node.js. Currently, I'm diving into learning more about backend development with Spring Boot and PostgreSQL. My work in software development is motivated by impact-driven projects. I love to use software as a tool to improve the lives of others and make real impact that I can see in the world. Outside of academics, I enjoy playing in my university orchestra, watching sports, leading outdoor trips, and going to the gym.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "Software Development Engineer",
    company: "Emory University School of Medicine",
    description: `Collaborating with 10 engineers to create a Gamified Longitudinal Assessment Platform, an innovative educational platform aimed at transforming competency-based learning and assessment in medical education
`,
    technologies: ["Figma", "React.js", "Python", "Machine Learning"],
  },
  {
    year: "Sep 2024 - Dec 2024",
    role: "Undergraduate Research Assistant",
    company: "Emory University Computer Science Department",
    description: `Collaborated with 4 PhD students to create a collaborative filtering algorithm using Scikit-learn, NumPy, and Pandas to predict human movement in three metropolitan areas for HuMob Challenge 2024, achieved top 10 submission and team paper publication in ACM`,
    technologies: ["Python", "Scikit-Learn", "Data Mining", "Machine Learning"],
  },
  {
    year: "Jun 2024 - Present",
    role: "SAT & Computer Science tutor",
    company: "The Princeton Review",
    description: `Delivered personalized SAT and AP Computer Science A tutoring sessions to classes of 20 underprivileged students, improving SAT scores by an average of 150 points and helping students achieve passing scores on AP exams`,
    technologies: ["Java", "Data Structures", "Algorithms", "Recursion"],
  },
];

export const PROJECTS = [
  {
    title: "AI Chef",
    image: aichef,
    description: "Developed a React-based web application that integrates the Hugging Face API, enabling users to input a list of ingredients and receive AI-generated recipe ideas, enhancing user convenience and creativity in meal preparation",
    technologies: ["React.js", "JavaScript", "HTML/CSS", "Hugging Face API"],
  },
  {
    title: "Movie Recommendation Engine",
    image: project2,
    description: "Designed a personalized movie recommendation engine using Python, Scikit-learn, and Pandas, enabling users to receive tailored movie suggestions based on cosine similarity scores calculated using movies from the IMDb 5000 movie database",
    technologies: ["Python", "Scikit-Learn", "Pandas"],
  },
  {
    title: "APIDA Networking Platform (Currently in progress)",
    image: project3,
    description: "A full stack platform with functionality similar to Linkedin where students identifying as Asian, Pacific Islander, and/or Desi American can connect with similarly-identifying Emory graduates to learn about various careers in Law, Government, Finance, Nonprofits, and more.",
    technologies: ["React.js", "Spring Boot", "PostgreSQL"],
  },
];

export const CONTACT = {
  address: "Atlanta, GA, USA",
  phoneNo: "470-512-0173",
  email: "misha.gupta@emory.edu",
};
