'use client'

import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

export function FeatureSection({
  features,
}: {
  features: {
    id?: string
    title: React.ReactNode
    description: React.ReactNode
    imageSrc: string | StaticImageData
    imageHeight?: string
    imageStyle?: React.CSSProperties
    buyNowLink?: string
    buyNowText?: string
    learnMoreLink?: string
    learnMoreText?: string
    learnMoreIcon?: React.ReactNode
    isDark?: boolean
  }[]
}) {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: '5%' }, // Matches original distance="5%"
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Matches original duration={1000}
        delay: i % 2 !== 0 ? 0.4 : 0, // Matches original delay={i % 2 !== 0 ? 400 : 0}
        ease: 'easeOut',
      },
    }),
  }

  // Animation variants for the title (Fade bottom)
  const titleVariants = {
    hidden: { opacity: 0, y: '12%' }, // Matches original distance="12%"
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, // Matches original duration={1500}
        delay: 0.1, // Matches original delay={100}
        ease: 'easeOut',
      },
    },
  }

  // Animation variants for the description (Fade top)
  const descriptionVariants = {
    hidden: { opacity: 0, y: '-12%' }, // Matches original distance="12%" but negative for top
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, // Matches original duration={1500}
        delay: 0.1, // Matches original delay={100}
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="feature-section relative md:flex md:flex-wrap gap-8 mx-auto max-w-7xl sm:px-6 px-4 lg:px-8 pt-6 pb-6 z-10">
      {features.map((feature, i) => {
        let _isDark = feature.isDark

        if (_isDark !== false && _isDark !== true) {
          _isDark = i % 4 === 1 || i % 4 === 2
        }

        const _isFullWidth = i === features.length - 1 && i % 2 === 0

        return (
          <motion.div
            key={`item-${i + 1}`}
            id={feature.id}
            style={{
              width: _isFullWidth ? '100%' : 'calc(50% - 1rem)',
            }}
            custom={i} // Pass index to use in delay calculation
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className={`relative isolate overflow-hidden shadow-2xl rounded-2xl flex ${
                _isDark ? 'bg-black flex-col-reverse' : 'flex-col'
              }`}
              style={{ width: _isFullWidth ? '100%' : undefined }}
            >
              <div
                className={`px-6 sm:px-16 ${
                  _isDark ? 'md:pt-8' : 'md:pt-14'
                } py-16 pb-12`}
              >
                <div className="mx-auto max-w-lg text-center relative z-10">
                  <motion.h2
                    className={`text-5xl font-bold tracking-tight sm:text-5xl ${
                      _isDark ? 'text-white' : ''
                    }`}
                    variants={titleVariants}
                  >
                    {feature.title}
                  </motion.h2>

                  <motion.div
                    className={`mt-6 text-lg leading-8 ${
                      _isDark ? 'text-gray-300' : 'text-gray-500'
                    }`}
                    variants={descriptionVariants}
                  >
                    {feature.description}
                  </motion.div>

                  {feature.buyNowLink && !feature.learnMoreLink && (
                    <div className="mt-10">
                      <Link
                        href={feature.buyNowLink || ''}
                        className={`inline-flex items-center gap-x-1.5 rounded-[24px] px-6 py-3 text-md font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                          _isDark
                            ? 'bg-white text-black shadow-sm hover:bg-gray-200'
                            : 'bg-black text-white shadow-sm hover:bg-gray-800'
                        }`}
                      >
                        {feature.buyNowText || 'Buy Now'}
                        <ArrowRightIcon
                          className="-mr-0.5 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  )}

                  {feature.learnMoreLink && !feature.buyNowLink && (
                    <div className="mt-10">
                      <Link
                        href={feature.learnMoreLink || ''}
                        className={`inline-flex items-center gap-x-1.5 rounded-[24px] px-6 py-3 text-md font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                          _isDark
                            ? 'bg-white text-black shadow-sm hover:bg-gray-200'
                            : 'bg-black text-white shadow-sm hover:bg-gray-800'
                        }`}
                      >
                        {feature.learnMoreText || 'Learn more'}
                        {feature.learnMoreIcon || (
                          <ArrowRightIcon
                            className="-mr-0.5 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </div>
                  )}

                  {feature.buyNowLink && feature.learnMoreLink && (
                    <div
                      className="mt-10 flex items-center gap-x-6"
                      style={{ justifyContent: 'center' }}
                    >
                      {feature.buyNowLink && (
                        <Link
                          href={feature.buyNowLink || ''}
                          className={`inline-flex items-center gap-x-1.5 rounded-[24px] px-6 py-3 text-md font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                            _isDark
                              ? 'bg-white text-black shadow-sm hover:bg-gray-200'
                              : 'bg-black text-white shadow-sm hover:bg-gray-800'
                          }`}
                        >
                          {feature.buyNowText || 'Buy Now'}
                          <ArrowRightIcon
                            className="-mr-0.5 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Link>
                      )}

                      {feature.learnMoreLink && (
                        <Link
                          href={feature.learnMoreLink}
                          className={`font-semibold leading-7 ${
                            _isDark
                              ? 'text-white text-opacity-70 hover:text-opacity-100'
                              : 'text-black text-opacity-70 hover:text-opacity-100'
                          }`}
                        >
                          <span>{feature.learnMoreText || 'Learn more'}</span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div
                className="w-full relative"
                style={{
                  background: `url(${
                    (feature.imageSrc as StaticImageData).src
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height:
                    feature.imageHeight || (_isDark ? '21.5rem' : '20rem'),
                  ...feature.imageStyle,
                }}
              >
                <div
                  className="absolute z-10 top-0 left-0 w-full bg-black bg-opacity-60"
                  style={{
                    background: _isDark
                      ? 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 0) 100%)'
                      : 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 0) 100%)',
                    height:
                      feature.imageHeight || (_isDark ? '21.5rem' : '20rem'),
                  }}
                ></div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
