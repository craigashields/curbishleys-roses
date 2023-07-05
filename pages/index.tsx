import Image from 'next/image'
import { useState } from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import images from '@/data/images'

import Logo from '@/components/Icons/Logo'
import SocialIcon from '@/components/social-icons'

export async function getStaticProps() {

  return {
    props: {
      images: images.sort((a, b) => a.priority - b.priority)
    },
  }
}


function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id: number
  imageSrc: string
}

export default function Gallery({ images }: { images: Image[] }) {

  return (
    <>
    <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
    <main className="mx-auto max-w-[1960px] p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="after:content relative col-span-1 row-span-3 flex flex-col items-center justify-end gap-2 overflow-hidden rounded-lg bg-rose-400 px-6 pb-32 pt-32 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:pt-8 lg:pb-16">
          <Logo />
          <h1 className="mt-4 mb-4 text-base font-bold tracking-widest">
              {siteMetadata.description}
          </h1>
          <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
          <span className="font-bold">TEL:</span> <a href="tel:01565733286">01565 733 286</a>
          </p>
          <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
          Budworth Road, Aston-by-Budworth, CW9 6LT
          </p>
          <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch] font-bold">
          Opening Hours
          </p>
          <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
          Monday - Saturday 9am - 5pm <br></br>
          Sunday & Bank Holidays 10am - 4pm
          </p>
          <div className="mb-3 flex space-x-4 pt-6">
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6}/>
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6}/>
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="googlemap" href={siteMetadata.googlemap} size={6}/>
          </div>
          <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
          Open to public, garden trade & wholesale
          </p>
        </div>
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </main>

    </>
  )
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true)
  return (
      <Image
          alt=""
          src={image.imageSrc}
          objectFit="cover"
          style={{ transform: 'translate3d(0, 0, 0)' }}
          width={720}
          height={480}
          sizes="(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 33vw,
          25vw"
          className={cn(
            'transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
  )
}
