import Image from 'next/image'

export default function Home() {
  return (
    <>
    <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="relative">
                    <Image className="object-cover object-center mx-auto rounded-lg shadow-2xl" width={1000} height={200} alt="hero" src="/HomeWallpaper.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">Review & Rating</span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">One place for your favourites.</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">Unlock the vast universe of entertainment with IMDb, where every movie, TV show, and star tells a unique story waiting to be discovered..</p>
              <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                <dl className="grid grid-cols-1 gap-12 md:grid-cols-2">
                  <div>
                    <dt className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-blue-600 rounded-full bg-blue-50">
                    </dt>
                    <dd className="flex-grow">
                      <h2 className="mb-3 text-lg font-medium tracking-tighter text-neutral-600">Top Movie Reviews</h2>
                      <p className="text-base leading-relaxed text-gray-400">Immerse yourself in the magic of cinema, share your thoughts through ratings.</p>
                      <a href="#" className="inline-flex items-center mt-6 font-semibold text-blue-500 md:mb-2 lg:mb-0 hover:text-neutral-600" title="read more">
                        Learn More
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-blue-600 rounded-full bg-blue-50">
                    </dt>
                    <dd className="flex-grow">
                      <h2 className="mb-3 text-lg font-medium tracking-tighter text-neutral-600">Short title</h2>
                      <p className="text-base leading-relaxed text-gray-400">let IMDb be your trusted companion in the fascinating journey.</p>
                      <a href="#" className="inline-flex items-center mt-6 font-semibold text-blue-500 md:mb-2 lg:mb-0 hover:text-neutral-600" title="read more">
                        Learn More
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
