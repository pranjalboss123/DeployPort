import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
// import Head from 'next/head';
import SeoHead from '@/components/SeoHead'; // 👈 import your SEO component



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rishikesh Gupta | Full Stack Developer Portfolio',
  description:
    'Rishikesh Gupta — A full stack developer skilled in modern web technologies. View projects, experience, and contact information.',
  keywords: [
    'Rishikesh Gupta',
    'Developer Portfolio',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'JavaScript',
    'Next.js',
    'Node.js',
  ],
  authors: [{ name: 'Rishikesh Gupta', url: 'https://rishikeshgupta.vercel.app/' }],
  creator: 'Rishikesh Gupta',
  metadataBase: new URL('https://rishikeshgupta.vercel.app/'),
  openGraph: {
    title: 'Rishikesh Gupta | Full Stack Developer Portfolio',
    description:
      'Rishikesh Gupta -- a full stack developer creating robust web apps using Next.js, React, Node.js and more.',
    url: 'https://rishikeshgupta.vercel.app/',
    siteName: 'Rishikesh Gupta Portfolio',
    images: [
      {
        url: '/pp.jpg',
        width: 1200,
        height: 630,
        alt: 'Rishikesh Gupta Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/pp.jpg',
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
//     <html lang="en" suppressHydrationWarning>
//       <Head>
//       <meta name="google-site-verification" content="TMbPyw0r8668R8095NTMVCtY0hQDTMkKALC4YPJ4I5o" />
//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify({
//         '@context': 'https://schema.org',
//         '@type': 'Person',
//         name: 'Rishikesh Gupta',
//         url: 'https://rishikeshgupta.vercel.app/',
//         image: 'https://rishikeshgupta.vercel.app/pp.jpg',
//         sameAs: [
//           'https://www.linkedin.com/in/rishikesh-gupta-b31936228/', 
//           'https://github.com/pranjalboss123',           
//           // more profiles if you have
//         ],
//         jobTitle: 'Full Stack Developer',
//         worksFor: {
//           '@type': 'Organization',
//           name: 'AntmoreLabs pvt. Ltd.',
//         },
//         description:
//           'Professional full stack developer skilled in building modern web apps with React, Next.js, Node.js, and MongoDB.',
//       }),
//     }}
//   />
// </Head>

//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <div className="flex min-h-screen flex-col">
//             <Navbar />
//             <main className="flex-1">{children}</main>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
<html lang="en" suppressHydrationWarning>
  <body className={inter.className}>
    <SeoHead />
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  </body>
</html>
  );
}
