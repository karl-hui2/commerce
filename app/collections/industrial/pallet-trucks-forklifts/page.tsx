import Image from 'next/image'

import PageHeroGrid from '@/components/pages/PageHeroGrid'
import { FeatureSection } from '@/components/pages/FeatureSection'

// Assets
import IMAGE_1 from '@/images/industrial/pallet-trucks-forklifts/jack.jpg'
import IMAGE_2 from '@/images/industrial/pallet-trucks-forklifts/pallet_truck.jpg'
import IMAGE_4 from '@/images/industrial/pallet-trucks-forklifts/stacker.jpg'

import HERO_1 from '@/images/industrial/pallet-trucks-forklifts/1.jpg'
import HERO_2 from '@/images/industrial/pallet-trucks-forklifts/2.jpg'
import HERO_3 from '@/images/industrial/pallet-trucks-forklifts/3.jpg'
import HERO_4 from '@/images/industrial/pallet-trucks-forklifts/4.jpg'

export default function PalletTrucksAndForklifts() {
  return (
    <>
      <PageHeroGrid
        title="Pallet Trucks & Forklifts"
        description={
          <>
            <p>
              Pallet trucks are indispensable tools that empower workers to move
              and transport heavy pallets for efficient warehouse operations.
            </p>

            <p className="mt-4">
              They streamline tasks such as loading/unloading trucks, organizing
              materials and rearranging inventory.Essential equipment for
              optimizing warehouse logistics and ensuring a smooth productive
              workflow.
            </p>
          </>
        }
        imageSrcs={[HERO_2, HERO_1, HERO_4, HERO_3]}
        type="4-image"
      />

      <FeatureSection
        features={[
          {
            title: 'Manual Pallet Trucks',
            description: (
              <>
                <p>
                  Pallet jacks are easy to operate, requiring minimal training
                  for warehouse staff. This simplicity ensures quick integration
                  into daily warehouse operations.
                </p>

                <p className="mt-4">
                  Pallet Trucks are generally more cost-effective compared to
                  powered alternatives, making them a practical choice for
                  warehouses with budget constraints.
                </p>
              </>
            ),
            imageSrc: IMAGE_1,
            imageStyle: {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            buyNowLink:
              '/collections/industrial/pallet-trucks-forklifts/manual-pallet-trucks',
            buyNowText: 'Learn More',
          },
          {
            title: 'Electric Pallet Trucks',
            description: (
              <>
                <p>
                  Essential for modern warehouses, offering effortless pallet
                  movement, reducing manual labor, optimizing long-distance
                  transport, handling heavy loads, and enhancing precision
                  controls.
                </p>

                <p className="mt-4">
                  They boost productivity and promote sustainability, making it
                  a valuable investment for warehouses aiming to optimize
                  operations and lower costs.
                </p>
              </>
            ),
            imageSrc: IMAGE_2,
            imageStyle: {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            buyNowLink:
              '/collections/industrial/pallet-trucks-forklifts/electric-pallet-trucks',
            buyNowText: 'Learn More',
          },
          {
            title: 'Forklifts',
            description: (
              <>
                <p>
                  In the fast-paced world of warehouse logistics, forklifts are
                  the ultimate solution.
                </p>

                <p className="mt-4">
                  Whether you need to transport heavy pallets, stack inventory
                  vertically, or load/unload goods, with Linconson’s forklifts,
                  businesses can ensure timely deliveries, reduce labor costs,
                  and minimize workplace injuries from manual lifting.
                </p>
              </>
            ),
            imageSrc: HERO_3,
            buyNowLink:
              '/collections/industrial/pallet-trucks-forklifts/forklifts',
            buyNowText: 'Learn More',
          },
          {
            title: 'Electric Pallet Stackers',
            description: (
              <>
                <p>
                  Electric pallet stackers are versatile tools for warehouse
                  management. These machines have the ability to lift loads to
                  different heights, making them ideal for stacking pallets in
                  storage racks or transporting them within a warehouse.
                </p>

                <p className="mt-4">
                  With their compact design, they can navigate tight spaces
                  efficiently, making them essential for maximizing warehouse
                  storage.
                </p>
              </>
            ),
            imageSrc: IMAGE_4,
            buyNowLink:
              '/collections/industrial/pallet-trucks-forklifts/electric-pallet-stackers',
            buyNowText: 'Learn More',
          },
        ]}
      />
    </>
  )
}
