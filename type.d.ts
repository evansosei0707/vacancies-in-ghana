type serviceListType = {
    href: string,
    title: string,
    desc: string,
}

type jobSeekersType = {
    href: string,
    title: string,
}

type jobListType = {
    id: number,
    title: string,
    company_name:  string,
    company_location:  string,
    work_location: string,
    skills: string[],
    time_posted: string,
    jobFunction: string,
    experience_level: string,
    job_type:  string,
    salary_range:  string,
    experience:  string,
    logo_url: string,
    featured: boolean,
    applicants: number,
    [key: string]: string | string[] | number | boolean;
  }

  type jobFiltersType = {
    id: number,
    label: string,
    name: string,
    filters: string[],
  }

  type jobCategoryType = {
      category: string,
      lowestLevel: string,
      highestLevel: string,
      numberOfJobs: string,
  }

  type cvOverviewType = {
    imageUrl: any,
    mediumText: string,
    bigTextEdit: string,
    smallText: string,
    bigText: string,
  }

  type jobsGalleryType = {
    smallText: string,
    bigText: string,
    images:  any[],
  }

  type chooseUsType = {
    bigText: string,
    smallText: string,
  }

  type homeContentType = {
    mainImage: any,
    bigTitle: string,
    mainPara: string,
    youtubeVideo: string,
    cvOverview: cvOverviewType,
    jobsGallery: jobsGalleryType,
    chooseUs: chooseUsType,
  }

  type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  };
  
  export interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    featured: boolean;
    slug: Slug;
    title: string;
    publishedAt: string;
    description: string;
  }
  
  interface Author extends Base {
    description: string;
    image: Image;
    name: string;
    slug: Slug;
  }
  
  interface Image {
    _type: "image";
    asset: Reference;
  }
  
  interface Reference {
    _type: "slug";
    current: string;
  }
  
  interface Slug {
    _type: "slug";
    current: string;
  }
  
  interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "bloackquote";
  }
  
  interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
  }
  
  interface Category extends Base {
    title: string;
    slug: Slug
  }

  type BlogCategoriesType = {
    _id: string,
    title: string,
    slug: string,
  }

  type bigTitleType = {
    bigText: string,
    mediumText: string,
    bigTextEdit: string,
  }

  type aboutUsType = {
    image: any,
    aboutUsPara: string,
  }

  type jobStatsType = {
    applicantsPerPost: string,
    jobsPosted: number,
    members: number,
    jobMatches: number,
  }


  type leadershipAndTeamType = {
    role:string,
    name: string,
    workerImage: any,
  }


  type ourVisionType = {
    primaryImage: any,
    secondaryImage: any,
    ourVisionPara: string,
  }


  type ourMissionType = {
    primaryImage: any,
    secondaryImage: any,
    ourMissionPara: string,
  }

  type aboutPageDataType = {
    bigTitle: bigTitleType,
    aboutUs: aboutUsType,
    jobStats: jobStatsType,
    leadershipAndTeam: leadershipAndTeamType[]
    ourVision: ourVisionType,
    ourMission: ourMissionType,
    challengeText: string,
  }

  type listingType = {
    title: string,
    description: string,
    listLogo: any,
  }

  type  chooseOutsourcType = {
    chooseQuestion: string,
    listing: listingType[] 
    }

    type servicesListingType = {
      title: string,
      description: string,   
    }

    type outsourceServicesType = {
      servicesHeaderText: string,
      servicesListing: servicesListingType[]
    }

    type outSourceBigTitle = {
      mediumText: string,
      smallText: string,
      image1: any,
      image2: any,
      bigText: string,
    }

    type partnerWithUsType = {
      partnerTitle: string,
      partnerPara1: string,
      partnerPara2: string,
      primaryImage: any,
      secondaryImage: any,
    }

    type beneathOutsourceType = {
      BOPara: string,
      primaryImage: any,
      secondaryImage: any,
    }
  type outSourceDataType = {
    chooseOutsource : chooseOutsourcType,
    outsourceServices: outsourceServicesType,
    bigTitle: outSourceBigTitle,
    partnerWithUs: partnerWithUsType,
    beneathOutsource: beneathOutsourceType,
  }

  type heroSectionType = {
    bigText: string,
    mediumText: string,
    image1 : any,
    image2 : any,
  }

  type choosePlanType = {
    _key : string,
    packageName : string,
    packagePrice : number,
    benefits: string[],
  }

  type questionsAnswersType = {
    question: string,
    answer : string,
    _key : string,
  }

  type uploadCVType = {
    biggerText: string,
    smallerText: string,
    image : string,
  }

  type fagsType = {
    faqsDescription: string,
    questionsAnswers: questionsAnswersType[]
  }

  type cvReviewDataType = {
    heroSection: heroSectionType,
    choosePlan: choosePlanType[],
    fags: fagsType,
    uploadCV: uploadCVType,
  }

  type faqsHeroSection = {
    bigText: string,
    mediumText: string,
    image : any,
  }

  type gettingStartedFaqsType = {
    _key: string
    question: string,
    answer: string,
  }

  type postingJobsFaqsType = {
    _key: string
    question: string,
    answer: string,
  }

  type realFaqsType = {
    gettingStartedFaqs: gettingStartedFaqsType[],
    postingJobsFaqs:postingJobsFaqsType[],
  }

  type fagsDataType = {
    heroSection: faqsHeroSection
    fags: realFaqsType
  }
  
 