import { FeatureSection } from '@/components/pages/FeatureSection'
import PageHeroGrid from '@/components/pages/PageHeroGrid'
import { ProductFeatureSection } from '@/components/pages/ProductFeatureSection'
import BulkBuy from '@/components/pages/BulkBuy'
import HalfBox from '@/components/pages/HalfBox'

import QUICK_RELEASE from '@/images/Oscillating/quick_release.jpg'
import WIDE_USAGE from '@/images/Oscillating/wide_usage.jpg'
import PRECISION from '@/images/Oscillating/precision.jpeg'
import REINFORCED from '@/images/Oscillating/reinforced.jpg'

import HALF_1 from '@/images/Oscillating/BIM.jpeg'
import HALF_2 from '@/images/Oscillating/HCS.jpeg'

import QUARTER_1 from '@/images/Oscillating/round.jpg'
import QUARTER_2 from '@/images/Oscillating/grout.jpeg'
import QUARTER_3 from '@/images/Oscillating/scraper.png'
import QUARTER_4 from '@/images/Oscillating/clips.png'

import HERO_1 from '@/images/Oscillating/top/1.jpeg'
import HERO_2 from '@/images/Oscillating/top/2.jpeg'
import HERO_3 from '@/images/Oscillating/top/3.jpeg'
import HERO_4 from '@/images/Oscillating/top/4.jpeg'

export default function OscillatingAccessories() {
  return (
    <>
      <PageHeroGrid
        title={
          <>
            Oscillating
            <br />
            Tool Blades
          </>
        }
        description={
          <>
            <p>
              Our high-quality blades are designed to fit a wide range of
              oscillating tools, perfect for cutting through wood, metal, and
              other materials with ease.
            </p>

            <p className="mt-4">
              Whether you're a professional contractor or a DIY-enthusiast, our
              oscillating tool blades are the perfect addition to your toolkit.
            </p>
          </>
        }
        imageSrcs={[HERO_1, HERO_2, HERO_3, HERO_4]}
        type="4-image"
        buyNowLink="/product/oscillating-tool-blades-quick-release-compatible"
      />

      <FeatureSection
        features={[
          {
            title: 'Universal Quick Release',
            description:
              'Quickly switch between various blade types for different applications.',
            imageSrc: QUICK_RELEASE,
          },
          {
            title: 'Wide Usage',
            description:
              'Our blades are designed to cut through various materials, including wood, metal, plastic, grout and more.',
            imageSrc: WIDE_USAGE,
          },
          {
            title: 'Precision Cutting Design',
            description:
              'Our oscillating tool blades feature depth markings, ensuring accurate cutting and outstanding results.',
            imageSrc: PRECISION,
            imageStyle: {
              backgroundPosition: 'top',
            },
          },
          {
            title: 'Reinforced Blades',
            description:
              'Linconson oscillating tool blades are double Steel reinforced to ensure a prolonged lifetime.',
            imageSrc: REINFORCED,
          },
        ]}
      />

      <div className="relative md:flex gap-6 mx-auto max-w-7xl sm:px-6 px-4 lg:px-8 pt-2 pb-2 z-10">
        <HalfBox
          image={HALF_1}
          title="High Carbon Steel (HCS)"
          description="Linconson HCS oscillating tool blades, offer exceptional durability and cutting speed, making them the perfect choice for fast and efficient for cutting wood and drywall."
          delay={0}
        />

        <HalfBox
          image={HALF_2}
          title={
            <>
              Reinforced Bi-Metal
              <br />
              (BIM)
            </>
          }
          description="Made of Strong steel, allowing them to cut through tougher materials like nails, screws, and bolts with greater ease and durability."
          delay={400}
        />
      </div>

      <div className="h-6"></div>

      <ProductFeatureSection
        products={[
          {
            title: (
              <>
                Round
                <br />
                HCS
              </>
            ),
            description: 'Wood, drywall and plastic',
            image: QUARTER_1,
          },
          {
            title: (
              <>
                Grout
                <br />
                Remover
              </>
            ),
            description: 'Made of tungsten carbide',
            image: QUARTER_2,
          },
          {
            title: (
              <>
                2-Inch
                <br />
                Rigid Scraper
              </>
            ),
            description: 'Made of Stainless Steel',
            image: QUARTER_3,
          },
          {
            title: (
              <>
                C-Clamp
                <br />
                Adapter
              </>
            ),
            description: 'Adapter for blade change lever',
            image: QUARTER_4,
          },
        ]}
      />

      <BulkBuy />
    </>
  )
}
