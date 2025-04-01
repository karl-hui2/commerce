import PageHeroGrid from '@/components/pages/PageHeroGrid'
import { FeatureSection } from '@/components/pages/FeatureSection'

// Assets
import IMAGE_1 from '@/images/industrial/fences/fence.jpg'
import IMAGE_2 from '@/images/industrial/fences/gate.jpg'

import HERO_1 from '@/images/industrial/fences/1.jpeg'
import HERO_2 from '@/images/industrial/fences/2.jpg'
import HERO_3 from '@/images/industrial/fences/3.jpeg'
import HERO_4 from '@/images/industrial/fences/4.jpg'

export default function Fences() {
  return (
    <>
      <PageHeroGrid
        title="Fences & Gates"
        description={
          <>
            <p>
              We understand the importance of steel fence and gate equipment for
              businesses and event security. Our robust solutions offer control
              and durability for safeguarding construction sites, managing
              events, or for sheltering business premises.
            </p>

            <p className="mt-4">
              Withstand the elements and fortify your security with our sturdy
              industrial-grade fence equipment.
            </p>
          </>
        }
        imageSrcs={[HERO_3, HERO_4, HERO_1, HERO_2]}
        imageStyles={[{ objectPosition: 'left' }]}
        type="4-image"
      />

      <FeatureSection
        features={[
          {
            title: 'Fences',
            description: (
              <>
                <p>
                  Linconson’s fences provide a physical barrier and enhance
                  security by preventing unauthorized access to selected areas.
                </p>
              </>
            ),
            imageSrc: IMAGE_1,
            imageStyle: {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            buyNowLink: '/collections/industrial/place-order',
            buyNowText: 'Place Order',
          },
          {
            title: 'Gates',
            description: (
              <>
                <p>
                  Temporary fences with gates control access, allowing
                  authorized personnel or vehicles to enter while restricting
                  entry to others, improving overall control of the premises.
                </p>
              </>
            ),
            imageSrc: IMAGE_2,
            imageStyle: {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            buyNowLink: '/collections/industrial/place-order',
            buyNowText: 'Place Order',
          },
        ]}
      />
    </>
  )
}
