export type Job = {
    id: number;
    title: string;
    company: string;
    content: string;
    location: string;
    datePosted: string;
    logo: string;
    tags: string[];
    remote: boolean;
    salaryRange: string;
    note: string;
  };
  
  type Schema = {
    jobs: Job[];
  };