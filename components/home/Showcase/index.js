import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import { useEffect, useRef } from 'react';

import showcase_swiper_nav_btn from '@/assets/images/showcase-swiper-pagination-btn.png';
import showcase_swiper_nav_btn_hovered from '@/assets/images/showcase-swiper-pagination-btn-hovered.png';
import Slide from './Slide';
import QuickDonation from '@/components/donation/QuickDonation';

Swiper.use([Autoplay, Navigation, Pagination]);

const slides = [
	{
		headline: 'Humanitarian Support Like Never Before.',
		supportingInfo:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.',
	},
	{
		headline: '2nd Humanitarian Support Like Never Before.',
		supportingInfo:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.',
	},
	{
		headline: '3rd Humanitarian Support Like Never Before.',
		supportingInfo:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.',
	},
];

const Showcase = () => {
	const swiperRef = useRef(null);

	useEffect(() => {
		if (!swiperRef.current) {
			swiperRef.current = new Swiper('.showcase-swiper', {
				speed: 1500,
				slidesPerView: 1,
				grabCursor: true,
				loop: true,
				spaceBetween: 10,
				autoplay: {
					delay: 2000,
				},
				navigation: {
					nextEl: '.showcase-swiper__button-next',
					prevEl: '.showcase-swiper__button-prev',
				},
				pagination: {
					el: '.showcase-swiper__pagination',
					type: 'bullets',
					clickable: true,
				},
			});
		}
	}, []);

	const renderSlides = (slides) =>
		slides.map((slideData, index) => {
			return <Slide key={index} slideData={slideData} />;
		});

	return (
		<div className='showcase min-h-[500px] bg-red-50 relative amt-content-aligned-left'>
			{/* Quick Donation */}
			<div className='absolute z-20 right-0 -bottom-[15%] lg:block hidden'>
				<QuickDonation />
			</div>

			{/* Swiper */}
			<div className='showcase-swiper swiper relative h-[550px] lg:h-[600px]'>
				<div className='swiper-wrapper'>{renderSlides(slides)}</div>
			</div>

			{/* Swiper Navigation */}
			<div className='showcase-swiper__button-prev swiper-button-prev'>
				{/* <img src={showcase_swiper_nav_btn_hovered} />
				<img src={showcase_swiper_nav_btn} /> */}
			</div>
			<div className='showcase-swiper__button-next swiper-button-next'>
				{/* <img src={showcase_swiper_nav_btn_hovered} className='-scale-x-[1]' />
				<img src={showcase_swiper_nav_btn} className='-scale-x-[1]' /> */}
			</div>

			{/* Swiper Pagination */}
			<div className='showcase-swiper__pagination swiper-pagination swiper-pagination-dots'></div>
		</div>
	);
};

export default Showcase;
