import { ReactElement } from 'react';
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'


export default function FourZeroFour(): ReactElement {
  return (
    <>
     <PageSEO title={`Page Not Found - ${siteMetadata.title}`} description={`Page Not Found - ${siteMetadata.title}`} />
     <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-white text-6xl font-bold mb-4">404</h1>
      <p className="text-white text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <p className="text-white text-lg mb-8">Don't be stressed, this is just a thorny situation!</p>
      <a href="/" className="transition hover:text-gray-800 px-6 py-3 bg-gray-500 rounded text-white text-base hover:bg-rose-100">
        Back to Homepage
      </a>
    </div>
    </>
  );
}