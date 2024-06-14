import { createDirectus, rest } from '@directus/sdk';

export interface Job {
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

interface Schema {
  jobs: Job[];
}

const directus = createDirectus<Schema>(process.env.DIRECTUS_URL!).with(rest());

export default directus;