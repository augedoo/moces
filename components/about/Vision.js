import React, { useRef } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import showcase_swiper_nav_btn from '@/assets/images/showcase-swiper-pagination-btn.png';
import showcase_swiper_nav_btn_hovered from '@/assets/images/showcase-swiper-pagination-btn-hovered.png';
import farming_woman_1 from '@/assets/images/temp/farming_woman_1.jpg';

import ContainerLayout from '../layout/ContainerLayout';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const Vision = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const renderProjectSlides = (visionList) =>
		visionList.map((vision, index) => {
			return (
				<SwiperSlide key={index}>
					<div className='w-full h-full'>
						<div className='w-full h-full mx-auto border lg:border-none border-secondary-500 lg:flex lg:gap-10 lg:items-center'>
							{/* Top: Image with mobile progress */}
							<div className='w-full h-[260px] lg:h-[450px] lg:w-[450px] xl:h-[550px] xl:w-[550px] relative'>
								<div className='absolute inset-0 z-10 w-full h-full bg-gray-100 lg:translate-x-0 lg:translate-y-0'>
									{/* Image */}
									<img
										src={farming_woman_1}
										// alt={title}
										className='object-cover w-full h-full'
									/>
								</div>
							</div>

							{/* Bottom */}
							<div className='px-4 py-5 lg:flex-1'>
								<h2 className='pb-1 text-[20px] font-semibold leading-tight lg:text-[28px] lg:mb-4 text-secondary-600 line-clamp-1'>
									Lorem ipsum dolor sit.
								</h2>

								<p className='text-base line-clamp-4 lg:text-lg lg:opacity-80 lg:font-medium lg:mb-2'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Libero praesentium necessitatibus quod corrupti fugiat error?
								</p>
								{/* <Link href={`#/heloo`}> */}
								<a className='text-secondary-500'>Learn More</a>
								{/* </Link> */}
							</div>
						</div>
					</div>
				</SwiperSlide>
			);
		});

	return (
		<ContainerLayout className='relative mx-auto about-vision'>
			<div className=''>
				<h2 className='section-header lg:!text-center'>
					What we seek to achieve
				</h2>
			</div>

			{/* Swiper */}
			<div className='lg:h-[400px] h-[500px] w-full mt-8'>
				<Swiper
					spaceBetween={25}
					slidesPerView={1}
					grabCursor={true}
					breakpoints={{
						560: { slidesPerView: 2 },
						1024: { slidesPerView: 1 },
					}}
					loop
					speed={1500}
					autoplay={{
						delay: 2000,
					}}
					onInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
				>
					{renderProjectSlides([...Array(3).keys()])}

					{/* Swiper Navigation */}
					<div
						ref={prevRef}
						className='showcase-swiper__button-prev swiper-button-prev amt-content-positioned-left'
					>
						<img src={showcase_swiper_nav_btn} />
						<img src={showcase_swiper_nav_btn_hovered} />
						<IoChevronBackOutline />
					</div>

					<div
						ref={nextRef}
						className='showcase-swiper__button-next swiper-button-next amt-content-positioned-right'
					>
						<img src={showcase_swiper_nav_btn} className='-scale-x-[1]' />
						<img
							src={showcase_swiper_nav_btn_hovered}
							className='-scale-x-[1]'
						/>
						<IoChevronForwardOutline />
					</div>
				</Swiper>
			</div>
		</ContainerLayout>
	);
};

export default Vision;
