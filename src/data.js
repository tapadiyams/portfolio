// src/data.js

export const experiences = [
  {
    title: "Software Development Engineer",
    subtitle: "Amazon Web Services (AWS)",
    description:[
      "Delivered OpenZFS SAZ File Server to customers in a cloud environment on the FSx team",
      "Worked on the development of the highly available file system offering",
      "Improved operational posture by developing tools and procedures for operators",
      "Implemented security tests across FSx engines to ensure customer authentication in the FSx API",
      "Designed and implemented customer console experience for OpenZFS SAZ filesystem and developed internal operational website for tracking progress of Volumes and Snapshots which increased the efficiency for operators and customer by 90%",
      "Developed SQL queries to improve the database efficiency, reduce data load time and enhance performance",
      "Performed deep packet inspection using Wireshark to assist in testing and troubleshooting of EC2 instance server",
      "Mentored two interns to deliver CPU/Memory Utilization metrics in AWS CloudWatch and Scale Storage from Backups",
      "Operated on highly visible customer-facing issues such as kernel deadlock due to stuck Transaction Groups (TXGs) in quiesce state and handle file system creates due to Amazon Elastic Block Store (EBS) insufficient capacity",
      "Ensured development quality is being tracked and improved using testing frameworks like EasyMock and JMockit",
      "Utilized other AWS Services: EC2, EBS, CloudWatch, CloudFormation, CodeDeploy, SWF, S3, Secrets Manager, Lambda and VPC"
    ],
    image: "",
    link: "",
  },
  {
    title: "Software Engineer (Non-Profit Volunteer)",
    subtitle: "AJ Investment",
    description:[
      "Expanded an investment central control and configuration system that collated investors and company’s information for utilizing capitals which contributed to overall profitability",
      "Deployed and optimized the application to run on Kubernetes which resulted in observable cost reduction",
      "Involved in team project for the development of pre-existing software to analyze current market investments",
      "Integrated and managed infrastructure and systems engineering and technologies using Kafka"
    ],
    image: "",
    link: "",
  },
];

export const projects = [
    {
      title: "Road Symbols Detection",
      subtitle: "OpenCV Library, Python",
      description:[
        "Programmed an application in Python to identify road symbols for maintaining safe driving conditions with the precision at 85%",
        "Applied OpenCV for image transformations with masking technique (bitwise operations) to focus on the important part of the image",
        "Compared the processed image with set of road symbol images to correctly classify the label of it"
      ],
      image: "",
      link: "",
    },
    {
      title: "Hotel Accreditation and Sentimental Analysis with Machine Learning",
      subtitle: "Python-Google Colaboratory, NoSQL",
      description:[
        "Constructed an application which performed Multi-layer Perceptron, Support Vector Machine and K-Nearest Neighbor that gave the dominant aspects / labels of the reviews by the guests stored in database using NoSQL",
        "Implemented GridSearchCV, which perceived the best possible parameters for MLP Algorithm and that resulted in 92% of accuracy",
        "Applied VaderSentiment Library, to perform sentiment analysis on the reviews of the guests"
      ],
      image: "",
      link: "",
    },
  ];