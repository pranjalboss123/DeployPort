'use client';

import Head from 'next/head';

export default function SeoHead() {
  return (
    <Head>
      {/* Google site verification tag */}
      <meta
        name="google-site-verification"
        content="TMbPyw0r8668R8095NTMVCtY0hQDTMkKALC4YPJ4I5o"
      />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Rishikesh Gupta',
            url: 'https://rishikeshgupta.vercel.app/',
            image: 'https://rishikeshgupta.vercel.app/pp.jpg',
            sameAs: [
              'https://www.linkedin.com/in/rishikesh-gupta-b31936228/',
              'https://github.com/pranjalboss123',
            ],
            jobTitle: 'Full Stack Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'AntmoreLabs Pvt. Ltd.',
            },
            description:
              'Professional full stack developer skilled in building modern web apps with React, Next.js, Node.js, and MongoDB.',
          }),
        }}
      />
    </Head>
  );
}
