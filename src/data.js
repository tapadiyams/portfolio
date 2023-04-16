// src/data.js

export const experiences = [
  {
    title: "Software Development Engineer",
    subtitle: "Amazon Web Services (AWS)",
    description:"As part of the FSx team, I successfully delivered an OpenZFS SAZ File Server in a cloud environment. I played a key role in developing a highly available file system offering, including configuring data replication between EC2 instances, designing a robust API, and conducting performance testing. I improved operational security through access controls, scoping SLR policies, and conducting security tests. I also optimized SQL queries, performed deep packet inspection, mentored interns, and implemented GitLab for version control. I utilized various AWS services to support the development and deployment of the file server.",
    image: "",
    link: "",
  },
  {
    title: "Philanthropic Software Engineer",
    subtitle: "AJ Investment",
    description:"I played a key role in expanding an investment central control and configuration system, which allowed for efficient collation of investors and company information to better utilize capital and improve overall profitability. Additionally, I containerized the application using Kubernetes, resulting in improved scalability and fault tolerance, and contributing to cost reductions. I also participated in a team project focused on analyzing current market investments using pre-existing software.",
    image: "",
    link: "",
  },
];

export const projects = [
    {
      title: "Road Symbol Recognition: A High-Precision Python Application for Identifying Road Symbols Using Image Processing Techniques with OpenCV",
      subtitle: "OpenCV Library, Python",
      description:"I developed a Python application that uses image processing techniques to identify road symbols with a high precision rate of 85%. I utilized OpenCV for image transformations, including masking techniques using bitwise operations to focus on the important parts of the image. The processed image was then compared with a set of road symbol images to accurately classify the label of the road symbol. This application has the potential to contribute to maintaining safe driving conditions by identifying road symbols effectively and efficiently.",
      image: "./Images/Projects/road_symbol_detection.jpg",
      link: "",
    },
    {
      title: "LinkedIn Clone: A ReactJS and Firebase Powered Professional Networking Application",
      subtitle: "Reactjs, Firebase",
      description:"A LinkedIn clone was built using ReactJS and Firebase, replicating the functionality of the professional networking platform. ReactJS was used for the front-end, creating a responsive user interface, while Firebase served as the back-end for real-time data storage. Features included user authentication, profile creation/editing, post creation/commenting, and real-time updates. The project combined modern web development technologies to create a functional replica of LinkedIn.",
      image: "./Images/Projects/linkedin_clone.jpg",
      link: "https://github.com/TapadiyaMS/linkedin-clone",
    },
    {
      title: "Showcase Me: A Portfolio Website Built with ReactJS and Tailwind CSS",
      subtitle: "Reactjs, CSS, Netlify",
      description:"Created a portfolio website to showcase my skills and work, utilizing ReactJS and Tailwind CSS for building the user interface. The use of reusable components in React allows for easy composition of landing page sections and potential future feature additions, such as a blog. Tailwind CSS is used for styling, allowing for professional and customizable appearance with combined classnames on React elements. The website is hosted on Netlify, a free service that serves the project on a custom domain with the help of a content delivery network (CDN), ensuring fast and efficient loading for users.",
      image: "./Images/Projects/portfolio.jpg",
      link: "https://github.com/TapadiyaMS/portfolio",
    },
    {
      title: "Analyzing Guest Reviews: A Comparative Study of MLP, SVM, and KNN with GridSearchCV and Sentiment Analysis using VaderSentiment Library",
      subtitle: "Python-Google Colaboratory, NoSQL",
      description:"An application was constructed to perform Multi-layer Perceptron, Support Vector Machine, and K-Nearest Neighbor analysis on guest reviews stored in a NoSQL database. GridSearchCV was implemented to identify the optimal parameters for the MLP algorithm, resulting in an accuracy rate of 92%. Additionally, the VaderSentiment Library was utilized to perform sentiment analysis on the guest reviews, providing valuable insights into the sentiment expressed in the reviews.",
      image: "./Images/Projects/sentimental_analysis.jpg",
      link: "https://github.com/TapadiyaMS/Hotel_Accreditation_Text_Mining",
    },
  ];
