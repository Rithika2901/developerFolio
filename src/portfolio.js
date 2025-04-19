/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rithika Kothapalli",
  title: "Hi, I'm Rithika 👋",
  subTitle: emoji(
    "I'm a passionate Machine Learning Engineer with a love for building smart systems that solve real-world problems. With hands-on experience in NLP, Deep Learning, and Data Visualization, I turn raw data into actionable insights. Let’s turn ideas into intelligent solutions 🚀"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1qFuEL-wvGVzvphm3jB5mVcWkazXjIEgNFD5bZDRFHxM/edit?tab=t.0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rithika2901",
  linkedin: "https://www.linkedin.com/in/rithika-kothapalli-491a42263/",
  gmail: "rithikak@bu.edu"
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENTIST WHO LOVES TURNING DATA INTO MEANINGFUL INSIGHTS & SMART MODELS",
  skills: [
    emoji(
      "🔍 Analyze large datasets to uncover patterns, trends, and actionable insights using Python, SQL, and Pandas"
    ),
    emoji("🤖 Build, train, and evaluate ML/DL models for prediction, classification, and NLP tasks using Scikit-learn, PyTorch, and TensorFlow"),
    emoji(
      "📊 Create dynamic visualizations and dashboards using Power BI, Tableau, and Streamlit to make data accessible for everyone"
    ),
    emoji("🚀 Deploy models with FastAPI, Docker, and CI/CD pipelines on AWS, GCP, and Databricks"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SAS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "R programming",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Deep Learning",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Big Data Analytics",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "EDA",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Visualization",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "LLM's",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Boston University",
      subHeader: "Master of Science in Applied Data Analytics",
      duration: "September 2023 - January 2025",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    { 
      schoolName: "VNE Vignana Jyothi Institute of Engineering and Technology",
      subHeader: "Bachelor of Technology in Electronics and Instrumentation Engineering",
      duration: "August 2019 - May 2023",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis & EDA", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "60%"
    },
    {
      stack: "Python & Libraries (NumPy, Pandas, Scikit-learn)",
      progressPercentage: "90%"
    },
    {
      stack: "SQL Databases",
      progressPercentage: "90%"
    },
    { 
      stack: "Data Visualization (Power BI / Tableau / Streamlit)",
      progressPercentage: "80%"
    },
    { 
      stack: "Model Deployment (FastAPI, Docker, CI/CD)",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Scientist",
      company: "Cron Infotech LLC",
      date: "Sep 2023 – Present",
      desc: "Built scalable ML pipelines and deployed fraud detection and forecasting models with Gen AI and Deep Learning.",
      descBullets: [
        "Designed pipelines using AWS Glue, Lambda, FastAPI, Docker, and Spark",
        "Deployed models via SageMaker with CloudWatch for automation and ETL tracking",
        "Implemented SARIMA, LSTM, and GPT-based models for business forecasting"
      ]
    },
    {
      role: "Data Scientist",
      company: "CSI Interfusion",
      date: "May 2022 – Nov 2022",
      desc: "Worked on customer segmentation, time series modeling, and dashboarding for marketing insights.",
      descBullets: [
        "Applied clustering and forecasting models on large-scale marketing datasets",
        "Built dashboards using SQL, Python, Power BI, and Tableau",
        "Supported data pipeline development using Databricks and Kubernetes"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
  image: require("./assets/images/loanIcon.png"), // Save any icon/image you like for this project here
  projectName: "Loan Approval Predictor",
  projectDesc:
    "A Streamlit app that predicts loan approvals based on user inputs using a trained ML classification model.",
  footerLink: [
   {
      name: "View Live App",
      url: "https://loan-approval-predictor-okheouk2g7grvcgtqegtck.streamlit.app/"
    },
    {
      name: "GitHub Repo",
      url: "https://github.com/Rithika2901/loan-approval-predictor" // Replace with your actual repo link
    }
  ]
},
  {
  image: require("./assets/images/customerSegmentation.png"), // Add a screenshot or icon to assets/images
  projectName: "Mall Customer Segmentation Dashboard",
  projectDesc:
    "An interactive Tableau dashboard that visualizes customer clusters based on income, spending score, and demographic distribution using K-means clustering.",
  footerLink: [
    {
      name: "View Dashboard",
      url: "https://public.tableau.com/app/profile/rithika.kothapalli2780/viz/MallCustomerSegmentationInteractiveDashboard/Dashboard1?publish=yes"
    }
  ]
},
    {
  image: require("./assets/images/sentimentIcon.png"), // Replace with actual file if you have one
  projectName: "Product Review Sentiment Analyzer (VADER)",
  projectDesc:
    "An NLP-based Streamlit app using the VADER model to analyze product review sentiment in real time.",
  footerLink: [
    {
      name: "View Live App",
      url: "https://your-streamlit-link.com" // Replace with the actual Streamlit link
    },
    {
      name: "GitHub Repo",
      url: "https://github.com/Rithika2901/sentiment-analyzer-vader" // Replace with your repo link
    }
  ]
}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 8574981711",
  email_address: "rithikak@bu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
