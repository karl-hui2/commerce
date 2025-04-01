import PageHeroGrid from '@/components/pages/PageHeroGrid'
import { FeatureSection } from '@/components/pages/FeatureSection'

// Assets
import IMAGE_1 from '@/images/industrial/warehouse-accessories/extensions.png'
import IMAGE_2 from '@/images/industrial/warehouse-accessories/dock_plates.jpg'

import HERO_1 from '@/images/industrial/warehouse-accessories/1.jpg'
import HERO_2 from '@/images/industrial/warehouse-accessories/2.jpg'
import HERO_3 from '@/images/industrial/warehouse-accessories/3.jpg'
import HERO_4 from '@/images/industrial/warehouse-accessories/4.jpg'

const INDUSTRIAL_PLACE_ORDER_URL = '/collections/industrial/place-order'

export default function WarehouseAccessories() {
  return (
    <>
      <PageHeroGrid
        title="Warehouse Accessories"
        description={
          <>
            <p>
              Warehouse accessories such as frames, beams, upright protectors,
              pallet supports, barriers and mesh decking, allow you to safeguard
              valuable assets and maintain a hazard-free environment.
            </p>

            <p className="mt-4">
              Browse our selection and invest in the right tools for a more
              streamlined warehouse experience.
            </p>
          </>
        }
        imageSrcs={[HERO_3, HERO_4, HERO_1, HERO_2]}
        imageStyles={[{ objectPosition: 'left' }, { objectPosition: 'left' }]}
        type="4-image"
      />

      <FeatureSection
        features={[
          {
            title: 'Forklift Extensions',
            description: (
              <>
                <p>
                  Dock plates play a vital role in warehouse operations by
                  bridging the gap between loading docks and trucks, ensuring a
                  safe and efficient flow of goods. Our high-quality steel
                  plates offer stability, support for heavy loads, and accident
                  prevention, making them invaluable to any warehouse.
                </p>

                <p className="mt-4">
                  Enhance operations and profitability with our cost-effective
                  range at Linconson. Take your warehouse to the next level with
                  our comprehensive solutions.
                </p>
              </>
            ),
            imageSrc: IMAGE_1,
            imageStyle: {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            buyNowLink: INDUSTRIAL_PLACE_ORDER_URL,
            buyNowText: 'Place Order',
          },
          {
            title: 'Dock Plates',
            description: (
              <>
                <p>
                  Dock plates play a vital role in warehouse operations by
                  bridging the gap between loading docks and trucks, ensuring a
                  safe and efficient flow of goods.
                </p>

                <p className="mt-4">
                  Our high-quality steel plates offer stability, support for
                  heavy loads, and accident prevention, making them invaluable
                  to any warehouse.
                </p>
              </>
            ),
            imageSrc: IMAGE_2,
            imageStyle: {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            buyNowLink: INDUSTRIAL_PLACE_ORDER_URL,
            buyNowText: 'Place Order',
          },
        ]}
      />
    </>
  )
}
