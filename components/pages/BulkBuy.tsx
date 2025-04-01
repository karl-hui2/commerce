export default function BulkBuy() {
  return (
    <div className="mx-auto max-w-7xl pt-3 sm:px-6 lg:px-8">
      <div
        className="relative isolate overflow-hidden bg-gradient-to-r to-transparent from-gray-100 px-6 py-24 sm:rounded-3xl sm:px-16"
        // style={{ boxShadow: '0 25px 60px -12px rgb(0 0 0 / 0.1)' }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          BULK Pricing Available
        </h2>

        <div className="mt-10 gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <p className="mt-2 max-w-xl text-lg font-medium leading-8 text-gray-800">
            GET UP TO 30% OFF
          </p>

          <p className="mt-6 max-w-xl text-sm leading-8 text-gray-500">
            *View each product for information on bulk pricing options.
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute top-2 right-20 h-full"
          style={{ opacity: 0.035, transform: 'scale(1.25) rotate(10deg)' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  )
}
