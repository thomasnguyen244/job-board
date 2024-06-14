import { Job } from '@/lib/directus';
import { LinkBox, Tag, LinkOverlay, Text, Avatar, Box, Button, HStack, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import NextLink from 'next/link';

type JobContentProps = {
  data: Job;
};

export function JobContent(props: JobContentProps) {
  const { data } = props;
  const { content, logo, title, company, note, website, tags } = data;

  return (
    <Box px={{ base: '12', lg: '24' }}>
      <Button as={Link} href='/'>
        Back to jobs
      </Button>
      <Box py='16'>
        <HStack spacing='4'>
            <LinkBox as='article'>
                <LinkOverlay href={`${website}`} target='_BLANK' title={company}>
                    <Avatar size='lg' name={title} src={logo} />
                </LinkOverlay>
            </LinkBox>
          <Heading size='lg'>{company}</Heading>
        </HStack>
        <HStack spacing={2} flex='1' pt='5'>
          {tags.map((tag, index) => (
            <LinkBox as='span'>
              <LinkOverlay as={NextLink} href={`/tags/${tag}`}>
                <Tag key={index} colorScheme='gray'>
                  {tag}
                </Tag>
              </LinkOverlay>
          </LinkBox>
          ))}
        </HStack>
        <HStack spacing='4'>
            <Text maxW='3xl' py='1' pt='10' pb='10'>{note}</Text>
        </HStack>
        <Box maxW='3xl' dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Box>
  );
}