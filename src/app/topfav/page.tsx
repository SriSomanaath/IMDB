"use client";

import {getFanFavorites} from '@/services/data'
import { useQuery } from '@tanstack/react-query';

const Page = () => {

  var { isLoading, data, refetch } = useQuery({
    queryKey: ['dictionary'],
    queryFn: getFanFavorites,
    refetchOnWindowFocus: false,
    enabled: false 
  }
  );

  return (
    <main>
      <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
        <div className="flex-1 pt-36 padding-x">
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
      <div>
        cards
      </div>
    </main>
  );
};

export default Page;
