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
    experience_level: string,
    job_type:  string,
    salary_range:  string,
    experience:  string,
    logo_url: string,
    applicants: number,
    [key: string]: string | string[] | number;
  }

  type jobFiltersType = {
    id: number,
    label: string,
    name: string,
    filters: string[],
  }