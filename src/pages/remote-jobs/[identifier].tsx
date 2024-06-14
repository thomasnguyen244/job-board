import { readItem, readItems } from '@directus/sdk';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import directus from '@/lib/directus';
import { Box } from '@chakra-ui/react';
import { JobContent } from '@/components/job-content';
import { Job } from '@/lib/directus';

type JobDetailsProps = {
  job: Job;
};

export default function JobDetails(props: JobDetailsProps) {
  const { job } = props;
  return (
    <>
    <Head>
        <title>{job.title + ' | WorkWithThomas.com'}</title>
        <meta
          name='description'
          content='For over a decade WorkWithThomas.com has been the number one destination to find and list incredible remote jobs. Were home to the largest remote work community in the world with 4.5M visitors.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
    </Head>
    <main>
        <Box p={{ base: '12', lg: '24' }}>
        <JobContent data={job} />
        </Box>
    </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const jobs = await directus.request(
      readItems('jobs', {
        limit: -1,
        fields: ['identifier'],
      })
    );
    const paths = jobs.map((job) => {
      // Access the data property to get the array of jobs
      return {
        params: { identifier: job.identifier.toString()},
      };
    });
    return {
      paths: paths || [],
      fallback: false,
    };
  } catch (error) {
    console.error('Error fetching paths:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const identifier = context.params?.identifier as string;
    const jobs = await directus.request(
      readItems('jobs', {
          filter : { identifier : { "_eq" : identifier}},
          fields: ['*']
      })
    );
    let job = jobs ? jobs[0] : false;
    if (job) {
      job.logo = `${process.env.DIRECTUS_URL}assets/${job.logo}`;
    }

    return {
      props: {
        job,
      },
    };
  } catch (error) {
    console.error('Error fetching job:', error);
    return {
      notFound: true,
    };
  }
};