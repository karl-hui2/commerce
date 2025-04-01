import Image from 'next/image'

import PageHeroGrid from '@/components/pages/PageHeroGrid'
import { FeatureSection } from '@/components/pages/FeatureSection'

// Assets
import IMAGE_1 from '@/images/industrial/warehouse-racks/upright.jpg'
import IMAGE_2 from '@/images/industrial/warehouse-racks/step.jpg'
import IMAGE_3 from '@/images/industrial/warehouse-racks/mesh.jpg'
import IMAGE_4 from '@/images/industrial/warehouse-racks/pallet_support.jpg'
import IMAGE_5 from '@/images/industrial/warehouse-racks/upright_protector.jpg'
import IMAGE_6 from '@/images/industrial/warehouse-racks/barrier.jpg'
import IMAGE_7 from '@/images/industrial/warehouse-racks/spacer.jpg'

import HERO_1 from '@/images/industrial/warehouse-racks/1.jpg'
import HERO_2 from '@/images/industrial/warehouse-racks/2.jpg'
import HERO_3 from '@/images/industrial/warehouse-racks/3.jpg'
import HERO_4 from '@/images/industrial/warehouse-racks/4.jpg'
import HERO_MAIN from '@/images/industrial/warehouse-racks/hero.jpg'

export default function WarehouseRacks() {
  return (
    <>
      <PageHeroGrid
        title="Warehouse Racks"
        description={
          <>
            <p>
              An integral part of a logistics strategy, warehouse racks are the
              backbone of efficient storage and organization in any warehouse.
              Our racks optimize space, simplify inventory management, and
              enhance productivity for cost-effective warehouse operations.
            </p>
          </>
        }
        imageSrcs={[HERO_2, HERO_1, HERO_4, HERO_3]}
        type="4-image"
      />

      <div className="feature-section relative md:flex md:flex-wrap gap-8 mx-auto max-w-7xl sm:px-6 px-4 lg:px-8 pt-6 pb-6 z-10">
        <div className="isolate overflow-hidden shadow-2xl rounded-2xl flex flex-col w-full py-12">
          <Image
            src={HERO_MAIN}
            alt=""
            width={1200}
            height={412.5}
            className="mx-auto"
          />
        </div>
      </div>

      <FeatureSection
        features={[
          {
            title: 'Upright Frames',
            description: (
              <>
                <p>
                  When choosing frames for warehouse racks, assess available
                  vertical space, considering restrictions like ceiling height.
                  Consider the weight and dimensions of stored items and choose
                  frames that match anticipated load capacities.
                </p>

                <p className="mt-2">
                  Check specifications below to align with storage needs and
                  leave enough space between the ceiling and the highest pallet
                  to conform to fire codes.
                </p>
              </>
            ),
            imageSrc: IMAGE_1,
            imageStyle: {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            learnMoreLink:
              '/collections/industrial/warehouse-racks/upright-frames',
          },
          {
            title: 'Step Beams',
            description: (
              <>
                <p>
                  To choose the right step beam size for warehouse racks,
                  evaluate the weight and dimensions of stored items. Ensure
                  step beams offer ample support and spacing for pallets or
                  containers.
                </p>

                <p className="mt-2">
                  Consider spacing between beams for stability and organization.
                  Check the specifications below.
                </p>
              </>
            ),
            imageSrc: IMAGE_2,
            imageStyle: {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            learnMoreLink: '/collections/industrial/warehouse-racks/step-beams',
          },
          {
            title: 'Mesh Decking',
            description: (
              <>
                <p>
                  Linconson's mesh decking reinforces warehouse racks for robust
                  support and its open mesh pattern promotes air circulation to
                  prevent dust buildup, maintaining a cleaner storage space.
                </p>

                <p className="mt-4">
                  It prioritizes safety with a stable surface, minimizing
                  accidents and preventing small items from falling through.
                </p>
              </>
            ),
            imageSrc: IMAGE_3,
            learnMoreLink:
              '/collections/industrial/warehouse-racks/mesh-decking',
          },
          {
            title: 'Pallet Supports',
            description: (
              <>
                <p>
                  Linconson's pallet supports play a crucial role in industrial
                  storage solutions, reinforcing racks to ensure stability in
                  high-density storage.
                </p>

                <p className="mt-4">
                  For short or extended periods, these support bars guarantee a
                  secure and organized space, making them essential for
                  industrial companies prioritizing safety and maximizing
                  storage capacity.
                </p>
              </>
            ),
            imageSrc: IMAGE_4,
            learnMoreLink:
              '/collections/industrial/warehouse-racks/pallet-supports',
          },
          {
            title: 'Barrier',
            description: (
              <>
                <p>
                  Linconson's warehouse rack barriers absorb impact energy,
                  shielding entire racks from damage.
                </p>

                <p className="mt-4">
                  These versatile barriers address various protection needs,
                  including preventing collisions, guiding traffic, and securing
                  storage zones, contributing to overall warehouse safety and
                  organization.
                </p>
              </>
            ),
            imageSrc: IMAGE_6,
            learnMoreLink: '/collections/industrial/warehouse-racks/barrier',
          },
          {
            title: 'Upright Protectors',
            description: (
              <>
                <p>
                  Upright protectors are crucial for safeguarding warehouse
                  racks by forming a protective barrier around rack uprights.
                </p>

                <p className="mt-4">
                  Their primary focus is on safeguarding the structural
                  integrity of the vertical supports of racks and to prevent
                  potential damage from forklifts or equipment impacts.
                  Investing in these protectors minimizes the risk of costly
                  repairs.
                </p>
              </>
            ),
            imageSrc: IMAGE_5,
            learnMoreLink:
              '/collections/industrial/warehouse-racks/upright-protectors',
          },
          {
            title: 'Spacers',
            description: (
              <>
                <p>
                  Our rack spacers ensure the stability and safety of your
                  pallet racking system by maintaining proper spacing between
                  frames.
                </p>

                <p className="mt-4">
                  By evenly distributing weight and preventing misalignment,
                  these spacers enhance the structural integrity of your racks,
                  minimizing accident risks and ensuring smooth operations.
                </p>
              </>
            ),
            imageSrc: IMAGE_7,
            learnMoreLink: '/collections/industrial/warehouse-racks/spacers',
          },
        ]}
      />
    </>
  )
}
