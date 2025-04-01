'use client'

import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { ProductFeatureSection } from '@/components/pages/ProductFeatureSection'
import { TopHero } from '@/components/pages/TopHero'
import BulkBuy from '@/components/pages/BulkBuy'
import HalfBox from '@/components/pages/HalfBox'
// Icons
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/solid'

// Images
import HERO from '@/images/Adhesives/main_page/hero.jpeg'
import BLACK_SHEETS from '@/images/Adhesives/main_page/black_sheets.jpg'
import PEEVA_SHEETS from '@/images/Adhesives/main_page/peva_sheets.jpeg'
import CARPET_TREAD from '@/images/Adhesives/main_page/carpet_tread.jpg'

import B_Y from '@/images/Adhesives/main_page/rolls/B&Y.jpeg'
import PEVA from '@/images/Adhesives/main_page/rolls/PEVARoll.jpeg'
import PVC_BLACK from '@/images/Adhesives/main_page/rolls/PVCRollBlack.jpeg'
import REFLECTIVE from '@/images/Adhesives/main_page/rolls/Reflective.jpeg'

export default function AbrasiveCollectionPage() {
  // Animation variants for Fade bottom
  const fadeBottomVariants = {
    hidden: { opacity: 0, y: '5%' }, // Matches distance="5%"
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Matches duration={1000}
        ease: 'easeOut',
      },
    },
  }

  return (
    <>
      <motion.div
        variants={fadeBottomVariants}
        initial="hidden"
        animate="visible" // TopHero is always visible on load, so use animate instead of whileInView
      >
        <TopHero
          image={HERO}
          title={
            <>
              Keep your
              <br />
              loved ones safe.
            </>
          }
          description={
            <>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Step with confidence
              </p>
              <p className="text-lg leading-8 text-gray-300">
                Choose our anti-slip tapes for reliable traction.
              </p>
            </>
          }
          cta={
            <a
              href="#"
              className="inline-flex items-center gap-x-1.5 rounded-[24px] bg-white px-6 py-3 text-md font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Watch Video{' '}
              <PlayCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </a>
          }
        />
      </motion.div>

      <div className="relative md:flex gap-6 mx-auto max-w-7xl sm:px-6 px-4 lg:px-8 pt-6 pb-6 z-10">
        <HalfBox
          image={PEEVA_SHEETS}
          title="Clear PEVA"
          description="Eco-friendly PEVA tread tapes provide slip-resistant protection for indoor areas such as showers and bathtubs while being transparent and gentle on bare feet."
          learnMoreLink="/collections/adhesives/tread-tape"
          delay={0}
        />

        <HalfBox
          image={BLACK_SHEETS}
          title="Black PVC"
          description="These anti-slip tapes are made up of commercial grade 80 Grit PVC material and provide superior traction. Most ideal for outdoor environments with foot traffic."
          learnMoreLink="/collections/adhesives/tread-tape"
          delay={400}
        />
      </div>

      <motion.div
        variants={fadeBottomVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <BottomHero />
      </motion.div>

      <ProductFeatureSection
        products={[
          {
            title: 'PEVA',
            description:
              'Made with eco-conscious materials and gentle on barefoot',
            image: PEVA,
            buyNowLink:
              '/product/clear-peva-slip-resistant-grip-tape-anti-slip-strips-2-4-6-inch',
          },
          {
            title: 'PVC',
            description: 'Strong grip and durable even in toughest conditions',
            image: PVC_BLACK,
            buyNowLink: '/product/slip-resistant-pvc-stairs-tread-grip-tape',
          },
          {
            title: 'Black & Yellow',
            description:
              'Elevate work place safety with a bold black and yellow grip',
            image: B_Y,
            buyNowLink: '/product/black-yellow-anti-slip-grip-tape',
          },
          {
            title: 'Reflective',
            description:
              'Glow & Grip. The Ultimate Reflective Anti-Slip Solution',
            image: REFLECTIVE,
            buyNowLink:
              '/product/reflective-anti-slip-grip-adhesive-tape-black-high-traction',
          },
        ]}
      />

      <BulkBuy />
    </>
  )
}

function BottomHero() {
  // Animation variants for BottomHero (already defined in parent, but included here for clarity if separated)
  const fadeBottomVariants = {
    hidden: { opacity: 0, y: '5%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
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
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 pt-1 sm:pt-1 pb-8">
        <div className="relative isolate overflow-hidden shadow-2xl rounded-2xl py-16 lg:py-0 pb-0 sm:pb-16 md:flex gap-2 lg:gap-6">
          <div className="mx-auto text-center lg:mx-0 lg:flex-1 lg:py-32 w-1/2 pl-0 md:pl-8 lg:pl-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Experience ultimate
              <br />
              comfort and protection
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-md mx-auto">
              Linconson carpet tread tapes are warm, comfortable, Glue-Free &
              machine-washable
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/product/anti-slip-carpet-stair-tread-8-x-30-washable-adhesive-free"
                className="inline-flex items-center gap-x-1.5 rounded-[24px] bg-gray-900 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Buy Now
              </Link>

              <Link
                href="/collections/adhesives/carpet-tread"
                className="text-sm font-semibold leading-6"
              >
                Learn more{' '}
                <span
                  aria-hidden="true"
                  className="align-middle ml-1"
                  style={{ marginBottom: '-0.1rem' }}
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          <div
            className="relative lg:flex-1 w-full mr-0 lg:mr-16 h-96 md:h-auto md:w-1/2"
            style={{
              background: `url(${(CARPET_TREAD as StaticImageData).src})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>
      </div>
    </motion.div>
  )
}
