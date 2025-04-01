'use client'

import { motion } from 'framer-motion'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

// Icons
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function HalfBox({
  image,
  delay,
  title,
  description,
  buyNowLink,
  learnMoreLink,
}: {
  image: StaticImageData
  delay: number
  title?: React.ReactNode
  description: React.ReactNode
  buyNowLink?: string
  learnMoreLink?: string
}) {
  // Animation variants with delay
  const fadeBottomVariants = {
    hidden: { opacity: 0, y: '5%' }, // Matches distance="5%"
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Matches duration={1000}
        delay: delay / 1000, // Convert ms to seconds (e.g., 400ms -> 0.4s)
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      variants={fadeBottomVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative isolate overflow-hidden shadow-2xl rounded-2xl">
        <div className="px-6 sm:px-16 md:pt-24 py-16 pb-12">
          <div className="mx-auto max-w-lg text-center relative z-10">
            <h2 className="text-5xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-500">
              {description}
            </p>

            {buyNowLink && (
              <div className="mt-10">
                <Link
                  href={buyNowLink}
                  className="inline-flex items-center gap-x-1.5 rounded-[24px] bg-gray-900 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Buy Now
                  <ArrowRightIcon
                    className="-mr-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            )}

            {learnMoreLink && (
              <div className="mt-10">
                <Link
                  href={learnMoreLink}
                  className="inline-flex items-center gap-x-1.5 rounded-[24px] bg-gray-900 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Learn more
                  <ArrowRightIcon
                    className="-mr-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>

        <div
          className="w-full mb-8"
          style={{
            background: `url(${(image as StaticImageData).src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '28rem',
          }}
        ></div>
      </div>
    </motion.div>
  )
}
