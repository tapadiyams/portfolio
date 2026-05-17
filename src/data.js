// src/data.js

export const experiences = [
  {
    title: "Senior Software Engineer",
    subtitle: "E2Open | Austin, USA",
    period: "Sept 2025 - Present",
    description: "Built AI-powered MCP server in Python bridging natural language AI assistants to supply chain platform. Architected high-throughput production system adopted by 30+ enterprise customers, handling 1.5M+ daily requests, reducing over-provisioning costs by 40%. Designed real-time transaction event pipeline ingesting 100% of events into Superset and Snowflake, reducing MTTR by 70%.",
    tags: ["Python", "Java", "Spring Boot", "Kubernetes", "REST APIs", "gRPC", "AI/LLM"]
  },
  {
    title: "Software Engineer",
    subtitle: "E2Open | Austin, USA",
    period: "July 2023 - Aug 2025",
    description: "Migrated monolithic system to microservices achieving zero downtime and 65% scalability improvement. Implemented GitOps with Flux enhancing efficiency by 55%. Optimized transaction flows by 40% through network analysis. Led Spring/gRPC project enhancing resilience by 80%. Established observability pipeline using Prometheus, Elasticsearch, Grafana improving troubleshooting by 75%.",
    tags: ["Java", "Spring Boot", "Kubernetes", "Docker", "Jenkins", "Elasticsearch", "Prometheus"]
  },
  {
    title: "Software Development Engineer",
    subtitle: "Amazon Web Services (AWS) | Boston, USA",
    period: "Aug 2021 - June 2023",
    description: "Delivered OpenZFS SAZ File Server in AWS cloud improving FSx data access speeds by 45%. Architected scalable RESTful API using Java/Spring Boot increasing throughput by 55%. Scoped Service Linked Role policies decreasing security vulnerabilities by 75%. Developed customer UI and internal tracking dashboard boosting operational efficiency by 90%.",
    tags: ["Java", "AWS", "Spring Boot", "RESTful APIs", "OpenZFS", "EC2"]
  },
  {
    title: "Philanthropic Software Engineer",
    subtitle: "AJ Investment | Mumbai, India",
    period: "Jan 2018 - June 2019",
    description: "Built Python investment system with Oracle database boosting profitability by 75%. Containerized applications with Kubernetes improving scalability by 80% and reducing costs by 35%. Integrated Spring Boot and JPA for PostgreSQL market analysis improving query speed by 60%.",
    tags: ["Python", "Spring Boot", "Kubernetes", "Oracle DB", "PostgreSQL"]
  },
];

export const projects = [
    {
      title: "Road Symbol Recognition: Efficient Python App for Identifying Road Symbols with OpenCV",
      subtitle: "OpenCV Library, Python",
      description: "I developed a Python application that uses image processing techniques to identify road symbols with a high precision rate of 85%. I utilized OpenCV for image transformations, including masking techniques using bitwise operations to focus on the important parts of the image. The processed image was then compared with a set of road symbol images to accurately classify the label of the road symbol. This application has the potential to contribute to maintaining safe driving conditions by identifying road symbols effectively and efficiently.",
       image: "./assets/images/projects/road_symbol_detection.jpg",
       link: "",
     },
     {
       title: "LinkedIn Clone: A ReactJS and Firebase Powered Professional Networking Application",
       subtitle: "Reactjs, Firebase",
       description: "A LinkedIn clone was built using ReactJS and Firebase, replicating the functionality of the professional networking platform. ReactJS was used for the front-end, creating a responsive user interface, while Firebase served as the back-end for real-time data storage. Features included user authentication, profile creation/editing, post creation/commenting, and real-time updates. The project combined modern web development technologies to create a functional replica of LinkedIn.",
       image: "./assets/images/projects/linkedin_clone.jpg",
       link: "https://github.com/TapadiyaMS/linkedin-clone",
     },
     {
       title: "Showcase Me: A Portfolio Website Built with ReactJS and Tailwind CSS",
       subtitle: "Reactjs, CSS, Netlify",
       description: "Created a portfolio website to showcase my skills and work, utilizing ReactJS and Tailwind CSS for building the user interface. The use of reusable components in React allows for easy composition of landing page sections and potential future feature additions, such as a blog. Tailwind CSS is used for styling, allowing for professional and customizable appearance with combined classnames on React elements. The website is hosted on Netlify, a free service that serves the project on a custom domain with the help of a content delivery network (CDN), ensuring fast and efficient loading for users.",
       image: "./assets/images/projects/portfolio.jpg",
       link: "https://github.com/TapadiyaMS/portfolio",
     },
     {
       title: "Analyzing Guest Reviews: A Comparative Study of MLP, SVM, and KNN with GridSearchCV and Sentiment Analysis using VaderSentiment Library",
       subtitle: "Python-Google Colaboratory, NoSQL",
       description: "An application was constructed to perform Multi-layer Perceptron, Support Vector Machine, and K-Nearest Neighbor analysis on guest reviews stored in a NoSQL database. GridSearchCV was implemented to identify the optimal parameters for the MLP algorithm, resulting in an accuracy rate of 92%. Additionally, the VaderSentiment Library was utilized to perform sentiment analysis on the guest reviews, providing valuable insights into the sentiment expressed in the reviews.",
       image: "./assets/images/projects/sentimental_analysis.jpg",
      link: "https://github.com/TapadiyaMS/Hotel_Accreditation_Text_Mining",
    },
  ];
