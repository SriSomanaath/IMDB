"use client";

import { useEffect } from 'react';
import IMDBsearchlist from '@/services/data'

const page = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await IMDBsearchlist();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div></div>
  )
}

export default page