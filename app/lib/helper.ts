import doctorImage from "@/public/doctor.jpg"
import engineersImage from "@/public/engineers.jpeg"
import hairDressersImage from "@/public/hair salon.webp"
import tailorImage from "@/public/sewing.jpg"
import officeWorkerImage from "@/public/office-work.jpg"

import blogImage1 from "@/public/Rectangle 132.png"
import blogImage2 from "@/public/Rectangle 133.png"
import blogImage3 from "@/public/Rectangle 134.png"
import { jobCategoryType, jobSeekersType, serviceListType } from "@/type"

export const serviceLinks: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/services/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/services/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/services/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/services/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/services/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/services/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]

  export const serviceList: serviceListType[] = [
    {
        href: '/services/cv-review',
        title: 'CV Review',
        desc: 'Unlock Your Potential! Upload your CV now for a comprehensive review by our expert team. Elevate your career prospects with personalized feedback and valuable insights. Take the first step towards a stronger, standout resume today!',
    },
    {
        href: '/services/recruitment',
        title: 'Recruitment',
        desc: 'Revolutionize Your Hiring Process with Our Recruitment Services!',
    },
    {
        href: '/services/outsourcing',
        title: 'Outsourcing',
        desc: 'At Vacancies in Ghana, we understand the importance of efficient outsourcing to streamline operations and boost productivity. Our tailored outsourcing solutions cater to diverse business needs, offering cost-effective and high-quality services',
    },
    {
        href: '/services/training',
        title: 'Training',
        desc: "Welcome to The Vacancies In Ghana Training Center! We believe in empowering individuals with the skills and knowledge needed to excel in today's competitive job market.",
    },
  ]

  export const jobSeekersList: jobSeekersType[] = [
    {
        href: '/jobs',
        title: 'Job Vacancies',
    },
    {
        href: '/account/cv-review-services',
        title: 'CV Reviews Services ',
    },
    {
        href: '/discover/job-Hunt-Guidance',
        title: 'Job Hunt Guidance',
    }
   ];

   export const employersList:jobSeekersType[] = [
    {
        href: '/employer/top-match',
        title: 'Top Match',
    },
    {
        href: '/employer/skills-assessments',
        title: 'Skills Assessments',
    },
    {
        href: '/employer/business-training-and-development',
        title: 'Business Training and Development',
    },
    {
        href: '/employer/employers-hub',
        title: 'Employers Hub',
    },
   ]

   export const helperCenterList: jobSeekersType[] = [
    {
        href: '/about#faqs',
        title: 'FAQs',
    },
    {
        href: '/about#contact-us',
        title: 'Contact Us',
    },
   ]

   export const regionInGhana = [
    "Ashanti",
    "Brong Ahafo",
    "Central",
    "Eastern",
    "Greater Accra",
    "Northern",
    "Upper East",
    "Upper West",
    "Volta",
    "Western ",
    "Savannah",
    "Bono East",
    "Oti",
    "Ahafo",
    "Western North",
    "North East",
   ];

   export const jobQualifications = [
    "Bachelors Degree",
    "Masters Degree",
    "HND",
    "Diploma",
    "Professional Certfication",
    "ICA",
    "PhD",
    "ACCA",
    "Mphil",
    "JHS Graduate",

   ]

   export const yearsOfExperience = [
    "No working years of experience",
    "1 - 2 years",
    "2 - 3 years",
    "3 - 4 years",
    "4 - 5 years",
    "5+ years",
    "6 - 7 years",
    "7 -8 years",
    "9 - 10 years",
    "10+ years",
    "15+ years",
    "20+ years",
    "30+ years",
   ]

   export const currentJobFunction = [
    "Accounting,Auditing, Finance",
    "Adming & Office",
    "Building & Architechture",
    "Community & Social Services",
    "Consulting & Strategy",
    "Creative & Design",
    "Customer Service & Support",
    "Driver & Transport Services",
   ]

   export const desiredJobFunction = [
    {
      value: "Accounting,Auditing, Finance",
      label: "Accounting,Auditing, Finance",
    },
    {
      value:"Adming & Office",
      label: "Adming & Office",
    },
    {
      value: "Building & Architechture",
      label: "Building & Architechture",
    },
    {
      value: "Community & Social Services",
      label: "Community & Social Services",
    },
    {
      value: "Consulting & Strategy",
      label: "Consulting & Strategy",
    },
    {
      value: "Creative & Design",
      label: "Creative & Design",
    },
   ]

   export const availability = [
    "immediately",
    "1 week",
    "2 weeks",
    "3 weeks",
    "1 month",
    "2 months",
    "More than three months",
   ];

   export const forJobSeekers = [
    {
      label: 'Available Vacancies',
      link: '/available-Vacancies',
    },
    {
      label: 'How to find work',
      link: '/how-to-find-work',
    },
    {
      label: 'CV Review',
      link: '/cv-review',
    },
    {
      label: 'Career consultancy',
      link: '/career-consultancy',
    },
    {
      label: 'Skill Assessments',
      link: '/skill-assessments',
    },
   ]

   export const forCompanies = [
    {
      label: 'How to hire top talents',
      link: '/how-to-hire-top-talents',
    },
    {
      label: 'Get best match',
      link: '/get-best-match',
    },
    {
      label: 'Hire an Agency',
      link: '/hire-an-agency',
    },
    {
      label: 'Business training',
      link: '/business-training',
    },
    {
      label: 'Skill Assessments',
      link: '/skill-assessments',
    },
   ]


   export const resources = [
    {
      label: 'Help Center',
      link: '/help-center',
    },
    {
      label: 'Reviews',
      link: '/reviews',
    },
    {
      label: 'Success Testimonies',
      link: '/Success-testimonies',
    },
    {
      label: 'Blog',
      link: '/blog',
    },
   ]


   export const vacancies = [
    {
      label: 'About Us',
      link: '/about-us',
    },
    {
      label: 'Careers',
      link: '/careers',
    },
    {
      label: 'Contact Us',
      link: '/contact-us',
    },
    {
      label: 'Leadership & Team',
      link: '/leadership-&-teams',
    },
   ]


 export  const jobCategory: jobCategoryType[] = [
    {
      category: 'Business Development',
      lowestLevel: 'Mid level',
      highestLevel: 'Executive level',
      numberOfJobs: '120',
    },
    {
      category: 'Business Development',
      lowestLevel: 'Mid level',
      highestLevel: 'Executive level',
      numberOfJobs: '120',
    },
    {
      category: 'Business Development',
      lowestLevel: 'Mid level',
      highestLevel: 'Executive level',
      numberOfJobs: '120',
    },
    {
      category: 'Business Development',
      lowestLevel: 'Mid level',
      highestLevel: 'Executive level',
      numberOfJobs: '120',
    },
    {
      category: 'Business Development',
      lowestLevel: 'Mid level',
      highestLevel: 'Executive level',
      numberOfJobs: '120',
    },
    {
      category: 'Business Development',
      lowestLevel: 'Mid level',
      highestLevel: 'Executive level',
      numberOfJobs: '120',
    },
    {
      category: 'Business Development',
      lowestLevel: 'Mid level',
      highestLevel: 'Executive level',
      numberOfJobs: '120',
    },
    {
      category: 'Business Development',
      lowestLevel: 'Mid level',
      highestLevel: 'Executive level',
      numberOfJobs: '120',
    },
   ]

   export const faqsData = [
    {
      id: 0,
      question: 'How will my document be sent to me?',
      answers: 'We will manage and deliver your documents through the best Mail delivery service we find suit. Note! this comes with an additional cost',
    },
    {
      id: 1,
      question: 'How will my document be sent to me?',
      answers: 'We will manage and deliver your documents through the best Mail delivery service we find suit. Note! this comes with an additional cost',
    },
    {
      id: 2,
      question: 'How will my document be sent to me?',
      answers: 'We will manage and deliver your documents through the best Mail delivery service we find suit. Note! this comes with an additional cost',
    },
    {
      id: 3,
      question: 'How will my document be sent to me?',
      answers: 'We will manage and deliver your documents through the best Mail delivery service we find suit. Note! this comes with an additional cost',
    },
    {
      id: 4,
      question: 'How will my document be sent to me?',
      answers: 'We will manage and deliver your documents through the best Mail delivery service we find suit. Note! this comes with an additional cost',
    },
   ]

   export const blogContents = [
    {
      id: 0,
      image: blogImage1,
      title: 'Drafting a perfect CV',
      des: 'Hiring efficiency has been a buzzword in the recruitment industry for quite some time now. And rightly so; its importance cannot be underestimated. Hiring efficiently is not merely an advantage; it’s the cornerstone of success. ',
      category: 'Job hunting'
    },
    {
      id: 1,
      image: blogImage2,
      title: 'Drafting a perfect CV',
      des: 'Hiring efficiency has been a buzzword in the recruitment industry for quite some time now. And rightly so; its importance cannot be underestimated. Hiring efficiently is not merely an advantage; it’s the cornerstone of success. ',
      category: 'Job hunting'
    },
    {
      id: 2,
      image: blogImage3,
      title: 'Drafting a perfect CV',
      des: 'Hiring efficiency has been a buzzword in the recruitment industry for quite some time now. And rightly so; its importance cannot be underestimated. Hiring efficiently is not merely an advantage; it’s the cornerstone of success. ',
      category: 'Job hunting'
    },
   ]