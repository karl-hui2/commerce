import ComparisonTable, { StarRating } from '@/components/pages/ComparisonTable'
import PageHeroGrid from '@/components/pages/PageHeroGrid'
import { FeatureSection } from '@/components/pages/FeatureSection'
import BulkBuy from '@/components/pages/BulkBuy'

// Assets
import HERO_1 from '@/images/gloves/hero/hero_2.jpeg'
import HERO_2 from '@/images/gloves/hero/hero_3.jpeg'
import HERO_3 from '@/images/gloves/hero/hero_1.jpeg'
import HERO_4 from '@/images/gloves/hero/hero_4.jpeg'

// Product data
import { GLOVES_DATA } from 'data/Gloves'

export default function Gloves() {
  return (
    <>
      <PageHeroGrid
        title="SAFETY PERFORMANCE SERIES"
        description="Premium heavy duty work gloves that provide outstanding protection for enhanced work safety, especially against sharp objects."
        imageSrcs={[HERO_2, HERO_1, HERO_4, HERO_3]}
        type="4-image"
      />

      <FeatureSection
        features={[
          {
            id: 'latex-foam',
            title: 'Latex Foam',
            description:
              'WG110X series work gloves are made up of high-quality Nylon polyester and are coated with latex foam, making them suitable for a variety of medium to heavy-duty tasks. Such tasks include construction, warehousing, landscaping, gardening, painting and DIY.',
            imageSrc: GLOVES_DATA.LATEX_FOAM.contentImage,
            buyNowLink: '/product/latex-foam-palm-coated-work-gloves-wg110x',
          },
          {
            id: 'wrinkled-foam',
            title: 'Wrinkled Foam',
            description:
              "LINCONSON's WG120X gloves are made up of high-quality Nylon polyester and feature a wrinkled latex palm coating for added durability and protection. Whether you are in construction, landscaping, painting, a DIYer or in warehousing, Linconson’s gloves will keep your hands safe and comfortable.",
            imageSrc: GLOVES_DATA.WRINKLED_FOAM.contentImage,
            buyNowLink: '/product/wrinkle-latex-palm-coated-work-gloves-wg120x',
          },
          {
            id: 'pu-coated',
            title: 'PU Coated',
            description:
              'WG210X series work gloves are made up of 13-gauge polyester and are coated with polyurethane material, making them suitable for a variety of tasks including construction, warehousing, gardening, landscaping, painting and DIY.',
            imageSrc: GLOVES_DATA.PU_COATED.contentImage,
            buyNowLink:
              '/product/lightweight-polyurethane-pu-coated-thin-work-gloves-wg210x',
          },
          {
            id: 'pu-cut-resistant',
            title: 'PU Cut-resistant',
            description:
              'WG310X series Level 5 cut resistant work gloves are made up of 13 gauge HPPE strings and are coated with polyurethane material, making them suitable for a variety of very heavy-duty tasks. Tasks such as construction, warehousing, manufacturing, landscaping and other tasks that required handling sharp objects.',
            imageSrc: GLOVES_DATA.PU_CUT_RESISTANT.contentImage,
            buyNowLink:
              '/product/level-5-cut-resistant-construction-polyurethane-pu-work-gloves-wg310x',
          },
          {
            id: 'nitrile-cut-resistant',
            title: 'Nitrile Cut-resistant',
            description:
              'WG320X series Level 5 cut resistant work gloves are made up of 13 gauge HPPE string and are coated with sandy nitrile material, making them suitable for a variety of extra heavy-duty tasks. These tasks include warehousing, manufacturing, construction, landscaping and other tasks that may require handling of sharp objects.',
            imageSrc: GLOVES_DATA.NITRILE_CUT_RESISTANT.contentImage,
            buyNowLink:
              '/product/level-5-cut-resistant-construction-sandy-nitrile-coated-work-gloves-black-red-wg320x',
          },
          {
            id: 'latex-cut-resistant',
            title: 'Latex Cut-resistant',
            description:
              'WG410X series Level 5 cut resistant work gloves are made up of 13 gauge HPPE string and are coated with latex material, making them suitable for a variety of extra heavy-duty tasks. These tasks include construction, warehousing, manufacturing, landscaping and other tasks that require the handling of sharp objects.',
            imageSrc: GLOVES_DATA.LATEX_CUT_RESISTANT.contentImage,
            buyNowLink:
              '/product/level-5-cut-resistant-construction-latex-work-gloves-wg410x',
          },
          {
            id: 'nitrile-coated',
            title: 'Nitrile Coated',
            description:
              'WG510X series work gloves are made up of high quality nylon polyester and are coated with nitrile material, making them suitable for a variety of medium to heavy-duty tasks. Such tasks include construction, warehousing, manufacturing, landscaping, gardening, painting and DIY.',
            imageSrc: GLOVES_DATA.NITRILE_COATED.contentImage,
            buyNowLink:
              '/product/extreme-grip-lightweight-nitrile-coated-construction-mechanics-work-gloves-wg510x',
          },
          {
            id: 'spandex',
            title: 'Micro-foam Nitrile (Spandex)',
            description:
              'WG610X series work gloves are made up of high-quality 15 gauge nylon spandex and are coated with nitrile microfoam material, making them suitable for a variety of medium to heavy-duty tasks. These tasks include construction, warehousing, manufacturing, landscaping and HVAC.',
            imageSrc: GLOVES_DATA.SPANDEX.contentImage,
            buyNowLink:
              '/product/flexible-spandex-knit-with-nitrile-micro-foam-palm-work-gloves-wg610x',
          },
          {
            id: 'cotton-latex',
            title: 'Cotton Latex',
            description:
              'WG710X series work gloves are made up of high-quality 10 gauge cotton and feature a wrinkled latex palm coating for added durability and protection. Whether you are in construction, a DIYer, in landscaping, painting or in warehousing, these gloves will help keep your hands safe and comfortable.',
            imageSrc: GLOVES_DATA.COTTON_LATEX.contentImage,
            buyNowLink:
              '/product/cotton-wrinkle-latex-palm-coated-construction-work-gloves-wg710x',
          },
          {
            id: 'leather',
            title: 'Leather',
            description:
              'LWG110X series work gloves are made up of high quality cow split leather complete with a full backcloth design, making them suitable for a variety of heavy-duty tasks. Includes tasks such as manufacturing, construction, warehousing, landscaping, gardening, steel work, mining, yard cleaning and DIY.',
            imageSrc: GLOVES_DATA.LEATHER.contentImage,
            buyNowLink:
              '/product/heavy-duty-cow-split-leather-work-gloves-lwg110x',
          },
          {
            id: 'winter',
            title: 'Winter',
            description:
              'WG910X series work gloves are made up of high-quality 15 gauge polyester with acrylic warm liners and are coated with sandy nitrile material. This makes them suitable for a variety of heavy-duty tasks, especially in cold conditions. Such tasks include warehousing, construction, cold storage or freezer room use and landscaping.',
            imageSrc: GLOVES_DATA.WINTER.contentImage,
            buyNowLink:
              '/product/flexible-winter-work-gloves-for-construction-warehousing-wg910x',
          },
        ]}
      />

      <ComparisonTable
        sections={[
          {
            name: 'Features',
            features: [
              {
                name: 'Cut Reistance',
                tiers: {
                  WG110X: <StarRating rating={3} />,
                  WG120X: <StarRating rating={3} />,
                  WG210X: <StarRating rating={1} />,
                  WG310X: <StarRating rating={5} />,
                  WG320X: <StarRating rating={5} />,
                },
              },
              {
                name: 'Slip Resistance',
                tiers: {
                  WG110X: <StarRating rating={4} />,
                  WG120X: <StarRating rating={5} />,
                  WG210X: <StarRating rating={2} />,
                  WG310X: <StarRating rating={4} />,
                  WG320X: <StarRating rating={5} />,
                },
              },
              {
                name: 'Durability',
                tiers: {
                  WG110X: <StarRating rating={4} />,
                  WG120X: <StarRating rating={4} />,
                  WG210X: <StarRating rating={3} />,
                  WG310X: <StarRating rating={5} />,
                  WG320X: <StarRating rating={5} />,
                },
              },
              {
                name: 'Applications',
                tiers: {
                  WG110X: 'Construction, General & DIY',
                  WG120X: 'Construction, General & DIY',
                  WG210X: 'Construction, General & DIY',
                  WG310X: 'Construction, HVAC, Masonary ',
                  WG320X: 'Construction, HVAC, Masonary',
                },
              },
              {
                name: 'Colors Available',
                tiers: {
                  WG110X: 'Black, Grey, Red, Orange, Green, White, Blue',
                  WG120X: 'Black, Grey, Red, Orange, Green, White, Blue',
                  WG210X: 'Black, Grey, White',
                  WG310X: 'Black, Grey, Blue Green, Blue ',
                  WG320X: 'Black, Grey ',
                },
              },
              {
                name: 'Palm Coating Color',
                tiers: {
                  WG110X: 'Black & Grey',
                  WG120X: 'Black & Grey',
                  WG210X: 'Black, Grey, & White',
                  WG310X: 'Black & Grey',
                  WG320X: 'Red',
                },
              },
              {
                name: 'Fabric',
                tiers: {
                  WG110X: 'Nylon Polyester Seamless-knit',
                  WG120X: 'Nylon Polyester Seamless-knit',
                  WG210X: 'Nylon Polyester Seamless-knit',
                  WG310X: '13G Seamless-knit',
                  WG320X: '13G String Seamless-knit',
                },
              },
              {
                name: 'Fitment',
                tiers: {
                  WG110X: 'Classic',
                  WG120X: 'Classic',
                  WG210X: 'Snug',
                  WG310X: 'Snug',
                  WG320X: 'Classic',
                },
              },
              {
                name: 'Washable',
                tiers: {
                  WG110X: true,
                  WG120X: true,
                  WG210X: true,
                  WG310X: true,
                  WG320X: true,
                },
              },
              {
                name: 'Model Number',
                tiers: {
                  WG110X: 'WG110X',
                  WG120X: 'WG120X',
                  WG210X: 'WG210X',
                  WG310X: 'WG310X',
                  WG320X: 'WG320X',
                },
              },
            ],
          },
        ]}
        tiers={[
          {
            name: 'WG110X',
            image: GLOVES_DATA.LATEX_FOAM.navbarImage,
            href: '/product/latex-foam-palm-coated-work-gloves-wg110x',
            price: 29.99,
          },
          {
            name: 'WG120X',
            image: GLOVES_DATA.WRINKLED_FOAM.navbarImage,
            href: '/product/wrinkle-latex-palm-coated-work-gloves-wg120x',
            price: 29.99,
          },
          {
            name: 'WG210X',
            image: GLOVES_DATA.PU_COATED.navbarImage,
            href: '/product/lightweight-polyurethane-pu-coated-thin-work-gloves-wg210x',
            price: 21.99,
          },
          {
            name: 'WG310X',
            image: GLOVES_DATA.PU_CUT_RESISTANT.navbarImage,
            href: '/product/level-5-cut-resistant-construction-polyurethane-pu-work-gloves-wg310x',
            price: 19.99,
          },
          {
            name: 'WG320X',
            image: GLOVES_DATA.NITRILE_CUT_RESISTANT.navbarImage,
            href: '/product/level-5-cut-resistant-construction-sandy-nitrile-coated-work-gloves-black-red-wg320x',
            price: 19.99,
          },
        ]}
      />

      <ComparisonTable
        sections={[
          {
            name: 'Features',
            features: [
              {
                name: 'Cut Reistance',
                tiers: {
                  WG410X: <StarRating rating={5} />,
                  WG510X: <StarRating rating={4} />,
                  WG610X: <StarRating rating={4} />,
                  WG710X: <StarRating rating={3} />,
                  WG910X: <StarRating rating={4} />,
                },
              },
              {
                name: 'Slip Resistance',
                tiers: {
                  WG410X: <StarRating rating={5} />,
                  WG510X: <StarRating rating={5} />,
                  WG610X: <StarRating rating={3} />,
                  WG710X: <StarRating rating={4} />,
                  WG910X: <StarRating rating={5} />,
                },
              },
              {
                name: 'Durability',
                tiers: {
                  WG410X: <StarRating rating={5} />,
                  WG510X: <StarRating rating={4} />,
                  WG610X: <StarRating rating={4} />,
                  WG710X: <StarRating rating={4} />,
                  WG910X: <StarRating rating={4} />,
                },
              },
              {
                name: 'Applications',
                tiers: {
                  WG410X: 'Construction, General & DIY',
                  WG510X: 'Construction, General & DIY',
                  WG610X: 'Construction, General & DIY',
                  WG710X: 'Construction, General & DIY',
                  WG910X: 'Outdoors & Freezer, & Construction',
                },
              },
              {
                name: 'Colors Available',
                tiers: {
                  WG410X: 'Grey',
                  WG510X: 'Black, Grey, Red, Orange, Green, White, Blue',
                  WG610X: 'Black, Grey, Blue, Orange',
                  WG710X: 'Grey',
                  WG910X: 'Black, Grey ',
                },
              },
              {
                name: 'Palm Coating Color',
                tiers: {
                  WG410X: 'Black & Grey',
                  WG510X: 'Black & Grey',
                  WG610X: 'Black',
                  WG710X: 'Black & Grey',
                  WG910X: 'Black',
                },
              },
              {
                name: 'Fabric',
                tiers: {
                  WG410X: '13G seamless-knit',
                  WG510X: 'Nylon Polyester Seamless-knit',
                  WG610X: '15G Spandex-knit',
                  WG710X: '10G Cotton Seamless-Knit',
                  WG910X: 'Double Brush Acrylic Warm Liner',
                },
              },
              {
                name: 'Fitment',
                tiers: {
                  WG410X: 'Snug',
                  WG510X: 'Classic',
                  WG610X: 'Classic',
                  WG710X: 'Classic',
                  WG910X: 'Snug',
                },
              },
              {
                name: 'Washable',
                tiers: {
                  WG410X: true,
                  WG510X: true,
                  WG610X: true,
                  WG710X: true,
                  WG910X: true,
                },
              },
              {
                name: 'Model Number',
                tiers: {
                  WG410X: 'WG410X',
                  WG510X: 'WG510X',
                  WG610X: 'WG610X',
                  WG710X: 'WG710X',
                  WG910X: 'WG910X',
                },
              },
            ],
          },
        ]}
        tiers={[
          {
            name: 'WG410X',
            image: GLOVES_DATA.LATEX_CUT_RESISTANT.navbarImage,
            href: '/product/level-5-cut-resistant-construction-latex-work-gloves-wg410x',
            price: 29.99,
          },
          {
            name: 'WG510X',
            image: GLOVES_DATA.NITRILE_COATED.navbarImage,
            href: '/product/extreme-grip-lightweight-nitrile-coated-construction-mechanics-work-gloves-wg510x',
            price: 29.99,
          },
          {
            name: 'WG610X',
            image: GLOVES_DATA.SPANDEX.navbarImage,
            href: '/product/flexible-spandex-knit-with-nitrile-micro-foam-palm-work-gloves-wg610x',
            price: 24.99,
          },
          {
            name: 'WG710X',
            image: GLOVES_DATA.COTTON_LATEX.navbarImage,
            href: '/product/cotton-wrinkle-latex-palm-coated-construction-work-gloves-wg710x',
            price: 26.99,
          },
          {
            name: 'WG910X',
            image: GLOVES_DATA.WINTER.navbarImage,
            href: '/product/flexible-winter-work-gloves-for-construction-warehousing-wg910x',
            price: 29.99,
          },
        ]}
      />

      <BulkBuy />
    </>
  )
}
