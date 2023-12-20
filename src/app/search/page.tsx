"use client";

import { useRef, useEffect,useState } from 'react';
import { motion } from "framer-motion";
import { useQuery } from '@tanstack/react-query';
import {searchIMDB} from '@/services/data'
import { Image } from 'next/image';

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
    <div>
        <div>
          <h1 className="text-5xl">Your favourites</h1>
          {data && JSON.parse(data).data ? (
              <div>
                {JSON.parse(data).data.map((item) => (
                  <div key={item.id}>
                    <motion.div className="cursor-grab overflow-hidden">
                      <motion.div className="flex bg-blue-300">
                        <motion.div className="min-h-40 w-1/3 p-40">
                        {/* <Image src="/image1.jpg" width={500} height={100} alt="Picture of the author" /> */}
                    <p>{item.title}</p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No Movies available.</p>
            )}
        </div>
    </div>
  </main>
  </>
  )
}

export default page