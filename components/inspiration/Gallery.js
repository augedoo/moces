import { useEffect, useState, useRef } from 'react';
import Swiper, { Autoplay, Navigation, EffectFade } from 'swiper';
import { SRLWrapper } from 'simple-react-lightbox';

import ContainerLayout from '../layout/ContainerLayout';
import long_prev_button from '@/assets/images/long_prev_button.png';
import long_next_button from '@/assets/images/long_next_button.png';
import events from '@/assets/data/events';

Swiper.use([Navigation, Autoplay, EffectFade]);

const Gallery = () => {
	const swiperRef = useRef(null);
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	useEffect(() => {
		let swiper = swiperRef.current;

		if (!swiper) {
			swiper = new Swiper('.gallery-swiper', {
				autoplay: {
					delay: 2000,
				},
				effect: 'fade',
				grabCursor: true,
				speed: 300,
				slidesPerView: 1,
				navigation: {
					nextEl: '.gallery-next-btn',
					prevEl: '.gallery-prev-btn',
				},
			});

			swiper.on('slideChange', (swiper) => {
				setActiveSlideIndex(swiper.activeIndex);
			});
		}
	}, []);

	const renderEventImages = (events) =>
		events.map((event, index) => {
			const { title, location, images } = event;

			return (
				<div
					key={index}
					className={`event-images gap-4 overflow-hidden lg:gap-6 event-images-${images.length} swiper-slide grid`}
				>
					{images.map((img, index) => (
						<img
							key={index}
							src={img.url}
							className='h-full w-full object-cover'
						/>
					))}
				</div>
			);
		});

	return (
		<ContainerLayout className='gallery mx-auto !w-full lg:!w-[90%]'>
			<h1 className='section-header mb-6 lg:mb-10'>Events Gallery</h1>

			<div>
				<div className='mb-6 flex flex-col items-center justify-between lg:flex-row'>
					<div>
						<h2 className='heading-1 !normal-case'>
							{events[activeSlideIndex]?.title}
						</h2>
						<p className='text-center font-zilla text-sm font-semibold text-primary-500 lg:text-left'>
							{events[activeSlideIndex]?.location}
						</p>
					</div>

					{/* // * Large Screens: Swiper Navigation */}
					<div className='relative my-6 hidden h-[40px] w-[200px] items-center justify-between gap-[10px] lg:my-0 lg:flex'>
						<img
							src={long_prev_button}
							className='swiper-button-prev gallery-prev-btn !static !m-0 w-[95px] !translate-y-0 duration-300 hover:scale-[1.15]'
						/>

						<img
							src={long_next_button}
							className='swiper-button-next gallery-next-btn !static !m-0 w-[95px] !translate-y-0 duration-300 hover:scale-[1.15]'
						/>
					</div>
				</div>

				{/* // * Swiper */}
				<SRLWrapper>
					<div className='relative z-10 h-fit w-full px-10 sm:h-[600px] sm:px-20 lg:h-[700px] lg:px-0 2xl:h-[750px]'>
						<div className='swiper gallery-swiper h-full w-full'>
							<div className='swiper-wrapper mx-auto h-full w-full'>
								{renderEventImages(events)}
							</div>
						</div>
					</div>
				</SRLWrapper>

				{/* // * Small Screens: Swiper Navigation */}
				<div className='relative my-6 mx-auto flex h-[40px] w-[200px] items-center justify-between gap-[10px] lg:my-0 lg:hidden'>
					<img
						src={long_prev_button}
						className='swiper-button-prev gallery-prev-btn !static !m-0 w-[95px] !translate-y-0 duration-300 hover:scale-[1.15]'
					/>

					<img
						src={long_next_button}
						className='swiper-button-next gallery-next-btn !static !m-0 w-[95px] !translate-y-0 duration-300 hover:scale-[1.15]'
					/>
				</div>
			</div>

			<div></div>
		</ContainerLayout>
	);
};

export default Gallery;
