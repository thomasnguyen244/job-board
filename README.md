This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![Jobs List](https://github.com/thomasnguyen244/job-board/blob/main/.idea/job-list.png?raw=true)

## Setting up the Jobs Collection in Directus 

Before we can start fetching and displaying job listings, we need to define the data model that will store our job data in Directus.

Log in to your Directus app and navigate to Settings > Data Model. Click the + icon to create a new collection called “jobs”.

Add the following fields and save:

    title (Type: String, Interface: Input)
    identifier (Type: String, Interface: Input)
    company (Type: String, Interface: Input)
    website (Type: String, Interface: Input)
    location (Type: String, Interface: Input)
    logo (Type: UUID, Interface: Image)
    tags (Type: JSON, Interface: Tags)
    remote (Type: Boolean, Interface: Toggle)
    datePosted (Type: DateTime, Interface: DateTime)
    salaryRange (Type: String, Interface: Input)
    content (Type: Text, Interface: WYSIWYG)
    note (Type: String, Interface: Input)

## Adding Content to the Jobs Collection

With the data model in place, we're now ready to populate our collection with some real job listings.

From the Directus sidebar, navigate to "Content Module" and select the "Jobs" collection we created earlier.

Go ahead and add a few sample jobs to have content to work with as we build out the frontend interface. You can always come back later to enter more postings as needed.

## Building the Frontend Application - Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
