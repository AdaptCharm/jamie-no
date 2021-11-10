import { Layout } from '@components/common'

export default function Home() {
  return (
    <>
      <div className="relative bg-white dark:bg-black pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="mx-auto max-w-5xl p-6 sm:px-6 lg:px-8">
          <div>
            <h1 className="mb-12 text-2xl md:text-2xl font-medium text-black dark:text-white">
              Jamie Isaksen
            </h1>
            <h2 className="text-6xl md:text-8xl tracking-wide font-bold text-black dark:text-white">
              Full stack developer based in Norway.
            </h2>
            <h2 className="my-28 text-6xl md:text-8xl tracking-wide font-bold text-black dark:text-white">
              CEO at the car rental company, Innov.
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

Home.Layout = Layout
