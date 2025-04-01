import Layout from '@/app/layout'
import { FeatureSection } from '@/components/pages/FeatureSection'
import PageHeroGrid from '@/components/pages/PageHeroGrid'
import BulkBuy from '@/components/pages/BulkBuy'
// Assets
// import HERO_1 from '@/images/industrial/__landing/1.jpg'
// import HERO_2 from '@/images/industrial/__landing/2.jpg'
// import HERO_3 from '@/images/industrial/__landing/3.jpg'
// import HERO_4 from '@/images/industrial/__landing/4.jpg'

import FLAP from '@/images/Abrasive/FLAP.jpg'
import SANDING_DISC from '@/images/Abrasive/SandingDisc.jpeg'
import METAL_GRIND from '@/images/Abrasive/linconson_abrasive_grinding.jpg'

import HERO from '@/images/Abrasive/hero/CuttingRebar.jpg'
import HERO_1 from '@/images/Abrasive/top/1.jpg'
import HERO_2 from '@/images/Abrasive/top/2.jpg'
import HERO_3 from '@/images/Abrasive/top/3.jpg'
import HERO_4 from '@/images/Abrasive/top/4.jpg'

export default function Industrial() {
  return (
    <>
      <PageHeroGrid
        title="Abrasive"
        description={
          <>
            <p>
              Our abrasives are made from the finest quality materials, using
              the most advanced manufacturing processes in the industry, they
              offer a comprehensive range of cutting, grinding, blending,
              sanding and cleaning abrasives.
            </p>

            <p className="mt-3">
              They are suitable for use with a variety of tools such as
              grinders, circular saws and chop saws, ensuring that you have the
              right abrasive for any project.
            </p>
          </>
        }
        imageSrcs={[HERO_1, HERO_2, HERO_3, HERO_4]}
        type="4-image"
      />

      <FeatureSection
        features={[
          {
            title: 'Cutoff Wheels',
            description:
              'Our metal cutoff wheels feature a thin, sturdy design made of industrial-grade aluminum oxide with 2 layers of mesh for fast, precise & vibration-free cutting, while minimizing material loss for cleaner, more precise cuts.',
            imageSrc: HERO,
            learnMoreLink: '/collections/abrasives/cut-off-discs',
          },
          {
            title: 'Flap Discs',
            description:
              "Linconson's flap wheels are a versatile choice for achieving a smooth and consistent finish on various surfaces, while also removing burrs.",
            imageSrc: FLAP,
            learnMoreLink: '/collections/abrasives/flap-discs',
          },
          {
            title: 'Sanding Discs',
            description:
              '5 inch hook & loop orbital sanding discs are especially designed for woodworking and metalworking applications, featuring the best-in-class dust extraction.',
            learnMoreLink: '/collections/abrasives/sanding-discs',
            imageSrc: SANDING_DISC,
          },
          {
            title: 'Metal Grinding Wheel',
            description:
              'Professionals in the metal fabrication and finishing industry trust us for their grinding needs. Our durable grinding wheel can handle a variety of tasks, from quickly removing welds to smoothing metal surfaces.',
            learnMoreLink: '/collections/abrasives/metal-grinding-wheel',
            imageSrc: METAL_GRIND,
          },
        ]}
      />

      <BulkBuy />
    </>
  )
}
