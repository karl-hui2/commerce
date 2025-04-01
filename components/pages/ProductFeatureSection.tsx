import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { ArrowRightIcon } from '@heroicons/react/20/solid'

export function ProductFeatureSection({
  products,
}: {
  products: {
    title: React.ReactNode
    description: React.ReactNode
    image: string | StaticImageData
    buyNowLink?: string
  }[]
}) {
  const oddNumberOfItems = products.length % 2 !== 0

  return (
    <div className="relative w-full mx-auto max-w-7xl sm:px-6 px-4 lg:px-8 pb-6 z-10">
      <div className="relative isolate overflow-hidden shadow-2xl rounded-2xl bg-white">
        <div className="px-6 sm:px-16 py-12">
          <div className="flex flex-wrap -mx-6 -my-12">
            {products.map((product, i) => (
              <div
                className={`flex flex-col text-center w-full md:w-1/2 ${
                  oddNumberOfItems ? 'lg:w-1/3' : 'lg:w-1/4'
                } px-6 p-12 flex-grow`}
                key={`pfs-${product.buyNowLink}`}
              >
                <Image
                  src={product.image}
                  alt=""
                  width={300}
                  height={300}
                  className="mx-auto h-96 md:h-64 w-auto"
                />

                <h2 className="text-2xl font-bold tracking-tight mt-6">
                  {product.title}
                </h2>

                <p className="flex-grow mt-3 text-md leading-8 text-gray-500">
                  {product.description}
                </p>

                {product.buyNowLink && (
                  <Link
                    className="inline-flex items-center gap-x-1.5 rounded-[24px] px-6 py-3 mt-6 text-md font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white bg-black text-white shadow-sm hover:bg-gray-800 mx-auto"
                    href={product.buyNowLink}
                  >
                    Buy Now
                    <ArrowRightIcon
                      className="-mr-0.5 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
