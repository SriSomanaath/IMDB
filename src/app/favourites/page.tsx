"use client";

import { getFanFavorites } from '@/services/data';
import { useQuery } from '@tanstack/react-query';

const Page = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['getFanFavorites'],
    queryFn: getFanFavorites,
  });

  console.log('Data:', typeof(data));

  return (
    <main>
      <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
        <div className="flex-1 padding-x">
          <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
            Find what are people's favourite
          </h1>
          <p className="text-[27px] text-black-100 font-light mt-5">
            Explore IMDb Favorites - your curated collection of fan-favorite movies, TV series, and stars. Discover the best of entertainment, rated and recommended by the IMDb community. Your go-to guide for what's trending and beloved in the world of film and television.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          </div>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center flex-wrap">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 lg:mt-10 lg:mb-10">
        {data && JSON.parse(data).data ? (
          <>
            {JSON.parse(data).data.list.map((item:any) => (
              <div key={item.id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30  rounded-2xl">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={item.primaryImage.imageUrl}
                    alt="movie"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white mb-20">{item.title}</h1>
                  <p className="mb-3 text-xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Stars/Movie:</p>
                  <p className="text-white">{item.originalTitleText.text}</p>
                  <button className="rounded-full bg-[#00df9a] py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60">See More</button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>Loading.........please wait</p>
        )}
      </div>
    </div>
    </main>
  );
};

export default Page;