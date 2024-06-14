import { JobList } from '@/components/job-list';
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';
import { readItems } from '@directus/sdk';
import Head from 'next/head';
import directus, { Job } from '@/lib/directus';

export default function Home(props: { jobs: Job[] }) {
  const { jobs } = props;
  const router = useRouter();

  const searchQuery = router.query.search?.toString();
  const searchResult = searchQuery
    ? jobs.filter((job) => {
        return job.title.toLowerCase().includes(searchQuery.toLowerCase());
      })
    : jobs;

  return (
    <>
      <Head>
        <title>Job Board | WorkWithThomas.com</title>
        <meta
          name='description'
          content='For over a decade WorkWithThomas.com has been the number one destination to find and list incredible remote jobs. Were home to the largest remote work community in the world with 4.5M visitors.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Box p={{ base: '12', lg: '24' }}>
          <Stack mb='8' maxW='sm'>
            <Heading>Find Remote Jobs - Latest post about 3 hours ago</Heading>
            <InputGroup w='auto'>
              <InputLeftElement color='gray.400'>
                <FaSearch />
              </InputLeftElement>
              <Input
                placeholder='Search jobs...'
                onChange={(event) => {
                  const value = event.target.value;

                  router.replace({
                    query: { search: value },
                  });
                }}
              />
            </InputGroup>
          </Stack>
          <JobList data={searchResult} />
        </Box>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const jobs = await directus.request(
      readItems('jobs', {
        limit: -1,
        fields: ['*'],
      })
    );

    if (!jobs) {
      return {
        notFound: true,
      };
    }

    // Format the image field to have the full URL
    jobs.forEach((job) => {
      job.logo = `${process.env.DIRECTUS_URL}assets/${job.logo}`;
    });

    return {
      props: {
        jobs,
      },
    };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return {
      notFound: true,
    };
  }
}