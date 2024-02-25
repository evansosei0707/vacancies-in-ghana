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
    type_of_employment:  string,
    salary_range:  string,
    experience:  string,
    logo_url: string,
    applicants: number,
  }

  type jobFiltersType = {
    id: number,
    label: string,
    name: string,
    filters: string[],
  }