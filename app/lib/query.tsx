import { groq } from "next-sanity"


export const homeDataQuery = `*[_type == 'homePage'][0] {
    mainImage {
      asset -> {
        url
      }
    },
    bigTitle,
    mainPara,
    youtubeVideo,
    cvOverview {
      "imageUrl": image {
        asset -> {
          url
        }
      },
      mediumText,
      smallText,
      bigTextEdit,
      bigText,   
    },
    jobsGallery {
        smallText,
          bigText,
          images[] {
            asset -> {
              url
            }
          }
    },
    chooseUs {
        smallText,
          bigText,
      },
  }`

  export const BlogCategories =`*[_type == 'category'] {
    _id,
    title,
    "slug": slug.current
  }`

  export const allBlogPosts = `*[_type == 'post'] {
   ...,
   categories[] ->,
   mainImage {
    asset -> {
      url
    }
 },
 } | order(_createdAt asc)`

 export const singleBlogQuery = ( slug: string) => {
    const query =  `*[_type == 'post' && slug.current == '${slug}'][0] {
      ...,
      categories[] ->,
      mainImage {
       asset -> {
         url
       }
    },

    }`

    return query;

 }

export const aboutPageQuery = `*[_type == 'aboutPage'][0] {
  bigTitle {
    bigText,
    mediumText,
    bigTextEdit,
  },
  aboutUs {
      image {
        asset -> {
          url
        }
      },
      aboutUsPara,
  },
  jobStats {
      applicantsPerPost,
      jobsPosted,
      members,
      jobMatches,
  },
  leadershipAndTeam[] {
    role,
    name,
    workerImage {
      asset -> {
        url
      }
    },
    
  },
  ourVision {
    primaryImage {
      asset -> {
        url
      }
    },
    secondaryImage {
      asset -> {
        url
      }
    },
    ourVisionPara,
  },
  ourMission {
      primaryImage {
      asset -> {
        url
      }
    },
    secondaryImage {
      asset -> {
        url
      }
    },
    ourMissionPara,
  },
  challengeText,
}`

export const outsourcingPageQuery = `*[_type == 'outsourcingPage'][0] {
  chooseOutsource {
    chooseQuestion,
    listing[] {
      title,
      description,
      listLogo {
        asset -> {
          url
        }
      },
    }
  },
  outsourceServices {
    servicesHeaderText,
    servicesListing[] {
      title,
      description,   
    },
  },
  bigTitle {
    mediumText,
    smallText,
    image1 {
      asset -> {
        url
      }
    },
    image2 {
      asset -> {
        url
      }
    },
    bigText,
  },
  partnerWithUs {
     partnerPara1,
     partnerPara2,
     primaryImage {
       asset -> {
         url
       }
     },
    secondaryImage {
      asset -> {
        url
      }
    },
    partnerTitle,
  },
  beneathOutsource {
      BOPara,
       primaryImage {
       asset -> {
         url
       }
     },
    secondaryImage {
      asset -> {
        url
      }
    },
  }
}`

export const cvReviewQuery = `*[_type == 'cvReview'][0] {
  heroSection {
    bigText,
    mediumText,
      image1 {
        asset -> {
          url
        }
      },
      image2 {
        asset -> {
          url
        }
      }
  },
  choosePlan[] {
    _key,
    packageName,
    packagePrice,
    benefits[],
  },
  fags {
    faqsDescription,
    questionsAnswers[] {
      question,
      answer,
      _key,
    }
  },
  uploadCV {
    biggerText,
    smallerText,
    image {
      asset -> {
        url
      }
    }
  }
}`

export const fagsDataQuery = `*[_type == 'faqs'][0] {
  bigText,
  mediumText,
  heroImage {
    asset -> {
      url
    }
  },
  fags {
      gettingStartedFaqs[] {
        _key,
        question,
        answer,
      },
      postingJobsFaqs[] {
        _key,
        question,
        answer,
      }
  }
}`