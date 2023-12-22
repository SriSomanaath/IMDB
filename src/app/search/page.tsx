"use client";

import { useRef, useEffect,useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {searchIMDB} from '@/services/data'

const page = () => {
  

  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [parsedData, setParsedData] = useState([]);

  const handleInputChange = (event:any) => {
    setSearchTerm(event.target.value);
  };

  var { isLoading, data, refetch } = useQuery({
    queryKey: ['movieDetails'],
    queryFn: () => searchIMDB(searchTerm),
    refetchOnWindowFocus: false,
    enabled: false
  }
  );

  const handleClick = () => {
    refetch();
  };


  return (
    <>
    <main  className="flex flex-col items-center justify-between">
    <div className="mb-3">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search for Meaning"
          aria-label="Search"
          aria-describedby="button-addon1"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg bg-blue-400"
          type="button"
          id="button-addon1"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
    <h1 className="text-5xl">Your favourites</h1>
    <div className="flex min-h-screen items-center justify-center flex-wrap">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 mt-10 mb-10">
        {data && JSON.parse(data).data ? (
          <>
            {JSON.parse(data).data.map((item:any) => (
              <div key={item.id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30  rounded-2xl">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={item.image}
                    alt="movie"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white mb-20">{item.title}</h1>
                  <p className="mb-3 text-xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Stars/Movie:</p>
                  <p className="text-white">{item.stars}</p>
                  <button className="rounded-full bg-[#00df9a] py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60">See More</button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>Search for entertainment</p>
        )}
      </div>
    </div>

  </main>
  </>
  )
}

export default page