import React, { useRef, useState } from 'react';
import SwiperCore, {
	Autoplay,
	Navigation,
	Pagination,
	Controller,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import showcase_swiper_nav_btn from '@/assets/images/showcase-swiper-pagination-btn.png';
import showcase_swiper_nav_btn_hovered from '@/assets/images/showcase-swiper-pagination-btn-hovered.png';
import number_1 from '@/assets/images/numbers/1.png';
import number_2 from '@/assets/images/numbers/2.png';
import number_3 from '@/assets/images/numbers/3.png';
import number_4 from '@/assets/images/numbers/4.png';
import number_5 from '@/assets/images/numbers/5.png';

import ContainerLayout from '../layout/ContainerLayout';

SwiperCore.use([Navigation, Autoplay, Controller]);

const visionList = [
	{
		title: 'Title 1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in illo aliquam officia dolor quia non ut facere minus eaque ipsum dolor sit amet consectetur adipisicing elit!',
		image: 'https://unsplash.it/400',
	},
	{
		title: 'Title 2',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in illo aliquam officia dolor quia non ut facere minus eaque ipsum dolor sit amet consectetur adipisicing elit!',
		image: 'https://unsplash.it/401',
	},
	{
		title: 'Title 3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in illo aliquam officia dolor quia non ut facere minus eaque ipsum dolor sit amet consectetur adipisicing elit!',
		image: 'https://unsplash.it/402',
	},
	{
		title: 'Title 4',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in illo aliquam officia dolor quia non ut facere minus eaque ipsum dolor sit amet consectetur adipisicing elit!',
		image: 'https://unsplash.it/403',
	},
];

const numbers = [number_1, number_2, number_3, number_4, number_5];

const Vision = () => {
	const [firstSwiper, setFirstSwiper] = useState(null);
	const [secondSwiper, setSecondSwiper] = useState(null);

	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const renderImageSlides = (visionList) =>
		visionList?.map((vision, index) => (
			<SwiperSlide key={index}>
				<div className='w-full h-full mx-auto border border-secondary-500 lg:flex lg:items-center lg:gap-10 lg:border-none'>
					<div className='relative h-[260px] w-full lg:h-[450px] lg:w-[450px] xl:h-[550px] xl:w-[550px]'>
						<div className='absolute inset-0 z-10 w-full h-full bg-gray-100 lg:translate-x-0 lg:translate-y-0'>
							<img
								src={vision.image}
								alt={vision.title}
								className='object-cover w-full h-full'
							/>
						</div>
					</div>
				</div>
			</SwiperSlide>
		));

	const renderDescriptionSlides = (visionList) =>
		visionList.map((vision, index) => (
			<SwiperSlide key={index}>
				<div className='h-full w-full overflow-hidden px-4 py-5 text-left lg:h-[450px] lg:w-[450px] lg:flex-1 lg:text-right xl:h-[550px] xl:w-[550px]'>
					<div className='ml-auto hidden h-[60px] w-[60px] items-center justify-center lg:mt-20 lg:mb-4 lg:flex'>
						<img src={numbers[index]} alt={'number ' + index} />
					</div>

					<h2 className='pb-1 text-[20px] font-semibold leading-tight text-secondary-600 line-clamp-1 lg:mb-4 lg:text-[28px]'>
						{vision.title}
					</h2>

					<p className='text-base line-clamp-4 lg:mb-2 lg:text-lg lg:font-medium lg:opacity-80'>
						{vision.description}
					</p>

					{/* <Link href={`#/heloo`}>
					<a className='text-secondary-500'>Learn More</a>
					</Link> */}
				</div>
			</SwiperSlide>
		));

	return (
		<ContainerLayout className='relative mx-auto overflow-hidden about-vision'>
			<div className=''>
				<h2 className='section-header lg:!text-center'>
					What we seek to achieve
				</h2>
			</div>

			{/* Swiper */}
			<div className='mt-8 grid w-full sm:h-[400px] lg:mt-12 lg:mb-40 lg:h-[450px] lg:grid-cols-2 xl:h-[550px]'>
				<Swiper
					spaceBetween={25}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 1, dir: 'rtl' },
					}}
					grabCursor={true}
					speed={1500}
					// loop
					autoplay={{
						delay: 2000,
					}}
					className='h-[250px] w-[90vw] lg:h-[450px] lg:w-full xl:h-[550px]'
					onInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
					onSwiper={setFirstSwiper}
					controller={{ control: secondSwiper }}
				>
					{renderImageSlides(visionList)}

					{/* Swiper Navigation */}
					<div
						ref={prevRef}
						className='showcase-swiper__button-prev swiper-button-prev amt-content-positioned-left'
					>
						<img src={showcase_swiper_nav_btn} />
						<img src={showcase_swiper_nav_btn_hovered} />
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
					</div>
				</Swiper>

				<Swiper
					spaceBetween={25}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 1, direction: 'vertical' },
					}}
					grabCursor={true}
					pagination={{
						el: '.swiper-pagination',
						type: 'custom',
						renderCustom: function (swiper, current, total) {
							return current + ' of ' + total;
						},
						// renderBullet: function (index, className) {
						// 	return `<span class="${className + 'inline-block w-4 h-4'}">${
						// 		index + 1
						// 	}</span>`;
						// },
					}}
					className='h-[200px] w-[90vw] lg:h-full'
					speed={1500}
					onSwiper={setSecondSwiper}
					controller={{ control: firstSwiper }}
				>
					{renderDescriptionSlides(visionList)}
				</Swiper>
			</div>
		</ContainerLayout>
	);
};

export default Vision;
