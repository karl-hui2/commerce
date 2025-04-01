import { Fragment } from 'react'
import Image, { StaticImageData } from 'next/image'

// Icons
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'
import { StarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export interface ComparisonTableTier {
  name: string
  image?: string | StaticImageData
  imageWidth?: number
  imageHeight?: number
  imageStyle?: React.CSSProperties
  href: string
  price?: number
  description?: string
  comingSoon?: boolean
}

export interface ComparisonTableSection {
  name: string
  features: { name: string; tiers: any }[]
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[0, 1, 2, 3, 4].map((_rating) => (
      <StarIcon
        key={_rating}
        className={classNames(
          rating > _rating ? 'text-black fill-black' : 'text-gray-200',
          'h-5 w-5 flex-shrink-0',
        )}
        aria-hidden="true"
      />
    ))}
  </div>
)

export default function ComparisonTable({
  sections,
  tiers,
  modelIdentifier,
  showPrices,
  showBuyButtons,
}: {
  sections: ComparisonTableSection[]
  tiers: ComparisonTableTier[]
  modelIdentifier?: string
  showPrices?: boolean
  showBuyButtons?: boolean
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
        {/* xs to lg */}
        <div className="mx-auto max-w-2xl space-y-16 lg:hidden">
          {tiers.map((tier: any, tierIdx: any) => (
            <section key={tier.name}>
              <div className="mb-8 px-6 sm:px-4">
                <h2 className="text-lg font-medium leading-6 text-gray-900">
                  {tier.name}
                </h2>

                {showPrices !== false && (
                  <p className="mt-2">
                    {' '}
                    <span className="text-base font-medium text-gray-500">
                      From{' '}
                    </span>
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      ${tier.price}
                    </span>{' '}
                    {/* <span className="text-base font-medium text-gray-500">
                    /mo
                  </span> */}
                  </p>
                )}

                {tier.image && (
                  <Image
                    src={tier.image}
                    alt=""
                    className="mt-4"
                    style={{
                      opacity: tier.comingSoon ? 0.5 : undefined,
                      filter: tier.comingSoon ? 'blur(6px)' : undefined,
                      ...tier.imageStyle,
                    }}
                    width={tier.imageWidth || 600}
                    height={tier.imageHeight || 600}
                  />
                )}

                {showBuyButtons !== false && (
                  <>
                    {tier.comingSoon && (
                      <button
                        disabled={true}
                        className="mt-6 block w-full rounded-md border border-gray-500 bg-gray-500 py-2 text-center text-sm font-semibold text-white cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    )}

                    {tier.comingSoon !== true && (
                      <Link
                        href={tier.href}
                        className="mt-6 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                      >
                        Buy {tier.name}
                      </Link>
                    )}
                  </>
                )}
              </div>

              {sections.map((section: any) => (
                <table key={section.name} className="w-full">
                  <caption className="border-t border-gray-200 bg-gray-50 py-3 px-6 text-left text-sm font-medium text-gray-900 sm:px-4">
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 border-b border-gray-200">
                    {section.features.map((feature: any) => (
                      <tr
                        key={feature.name}
                        className="border-t border-gray-200"
                      >
                        <th
                          className="py-5 px-6 text-left text-sm font-normal text-gray-500 sm:px-4"
                          scope="row"
                        >
                          {feature.name}
                        </th>
                        <td className="py-5 pr-6 sm:pr-4">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                  style={{ color: '#00c000' }}
                                />
                              ) : feature.tiers[tier.name] === false ? (
                                <MinusIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              ) : (
                                <span className="block text-sm text-gray-700">
                                  {feature.tiers[tier.name]}
                                </span>
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true
                                  ? 'Yes'
                                  : 'No'}
                              </span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="h-px w-full table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className="px-6 pb-4 text-left text-sm font-medium text-gray-900"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>{modelIdentifier || 'Model'}</span>
                </th>
                {tiers.map((tier: any) => (
                  <th
                    key={tier.name}
                    className={`w-1/${
                      tiers.length + 1
                    } px-6 pb-4 text-left text-lg font-medium leading-6 text-gray-900`}
                    scope="col"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {showPrices !== false && (
                <tr>
                  <th
                    className="py-8 px-6 text-left align-top text-sm font-medium text-gray-900"
                    scope="row"
                  >
                    Pricing
                  </th>

                  {tiers.map((tier: any) => (
                    <td key={tier.name} className="h-full pt-8 px-6 align-top">
                      <div className="relative flex flex-col-reverse w-full h-full">
                        {tier.image && (
                          <Image
                            src={tier.image}
                            alt=""
                            style={{
                              opacity: tier.comingSoon ? 0.5 : undefined,
                              filter: tier.comingSoon ? 'blur(6px)' : undefined,
                              ...tier.imageStyle,
                            }}
                            width={tier.imageWidth || 600}
                            height={tier.imageHeight || 600}
                          />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              )}

              {showPrices !== false && (
                <tr className="border-none">
                  <th></th>

                  {tiers.map((tier: any) => (
                    <td key={tier.name} className="h-full pb-8 px-6 align-top">
                      <div className="relative table w-full h-full">
                        <p
                          className={`pt-4 ${
                            showBuyButtons !== false ? 'pb-4' : ''
                          }`}
                        >
                          <span className="text-base font-medium text-gray-500">
                            From{' '}
                          </span>
                          <span className="text-xl font-bold text-gray-900 mb-8">
                            ${tier.price}
                          </span>{' '}
                        </p>

                        {showBuyButtons !== false && (
                          <>
                            {tier.comingSoon && (
                              <button
                                disabled={true}
                                className="block w-full rounded-md border border-gray-500 bg-gray-500 py-2 text-center text-sm font-semibold text-white cursor-not-allowed"
                              >
                                Coming Soon
                              </button>
                            )}

                            {tier.comingSoon !== true && (
                              <Link
                                href={tier.href}
                                className="block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                              >
                                Buy {tier.name}
                              </Link>
                            )}
                          </>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              )}

              {sections.map((section: any) => (
                <Fragment key={section.name}>
                  {/* <tr>
                    <th
                      className="bg-gray-50 py-3 pl-6 text-left text-sm font-medium text-gray-900"
                      colSpan={4}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr> */}

                  {section.features.map((feature: any) => (
                    <tr key={feature.name}>
                      <th
                        className="py-5 px-6 text-left text-sm font-normal text-gray-500"
                        scope="row"
                      >
                        {feature.name}
                      </th>

                      {tiers.map((tier: any) => (
                        <td key={tier.name} className="py-5 px-6">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                  style={{ color: '#00c000' }}
                                />
                              ) : feature.tiers[tier.name] === false ? (
                                <MinusIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              ) : (
                                <span className="block text-sm text-gray-700">
                                  {feature.tiers[tier.name]}
                                </span>
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true
                                  ? 'Included'
                                  : 'Not included'}{' '}
                                in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
