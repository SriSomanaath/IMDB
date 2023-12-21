"use client";

import { getFanFavorites } from '@/services/data';
import { useQuery } from '@tanstack/react-query';

// import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';


const Page = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['getFanFavorites'],
    queryFn: getFanFavorites,
  });

  console.log('Data:', typeof(data));

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
        {data && JSON.parse(data).data ? (
          <div>
            {JSON.parse(data).data.list.map((item) => (
              <div key={item.id}>
                <p>{item.originalTitleText.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No Movies available.</p>
        )}
      </div>
      {/* <Swiper
          slidesPerView={4}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide1</SwiperSlide>
          <SwiperSlide>Slide2</SwiperSlide>
          <SwiperSlide>Slide3</SwiperSlide>
          <SwiperSlide>Slide4</SwiperSlide>
          <SwiperSlide>Slide5</SwiperSlide>
          <SwiperSlide>Slide6</SwiperSlide>
          <SwiperSlide>Slide7</SwiperSlide>
          <SwiperSlide>Slide8</SwiperSlide>
      </Swiper> */}
    </main>
  );
};

export default Page;