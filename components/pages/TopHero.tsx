import { PlayCircleIcon } from '@heroicons/react/20/solid'
import { StaticImageData } from 'next/image'

export function TopHero({
  image,
  imageStyle,
  title,
  description,
  cta,
}: {
  image: StaticImageData
  imageStyle?: React.CSSProperties
  title: React.ReactNode
  description: React.ReactNode
  cta: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-7xl pt-12 px-4 sm:px-6 lg:px-8">
      <div
        className="relative isolate overflow-hidden px-6 shadow-2xl rounded-2xl sm:px-16 md:pt-24 py-16"
        style={{
          background: `url(${(image as StaticImageData).src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          ...imageStyle,
        }}
      >
        <div
          className="absolute z-10 top-0 left-0 w-full h-full bg-black bg-opacity-60"
          style={{
            // background:
            //   '-moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
            // background:
            //   '-webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)',
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
            filter:
              "progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000',endColorstr='#000000',GradientType=0)",
          }}
        ></div>

        <div className="mx-auto max-w-lg text-center pt-48 relative z-10">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>

          {description}

          <div className="mt-10">{cta}</div>
        </div>
      </div>
    </div>
  )
}
