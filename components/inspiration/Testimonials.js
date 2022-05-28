import { useRef } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ContainerLayout from '../layout/ContainerLayout';
import testimonials from '@/assets/data/testimonials';
import showcase_swiper_nav_btn from '@/assets/images/showcase-swiper-pagination-btn.png';

SwiperCore.use([Autoplay, Navigation]);

const Testimonials = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const renderTestimonials = (testimonials) =>
		testimonials.map((testimony, index) => {
			const { bearer, company, image, message, greeting } = testimony;

			return (
				<SwiperSlide key={index} tag='li'>
					<div className='p-4 px-6 border-2 border-primary-500 bg-primary-50'>
						<div className='flex flex-col items-center gap-2 sm:flex-row sm:items-start'>
							<img
								src={image}
								alt={bearer}
								className='h-12 min-h-[48px] w-12 min-w-[48px] rounded-full'
							/>
							<div className='pb-2 text-center text-secondary-700 sm:text-left'>
								<h2 className={`heading-3 !text-center sm:!text-left`}>
									{bearer}
								</h2>
								<p className='text-sm'>{company}</p>
							</div>
						</div>

						{message && (
							<p className='my-2 leading-relaxed text-center sm:text-left'>
								{message}
							</p>
						)}

						{greeting && (
							<div className='heading-1 !font-zilla opacity-40 sm:!text-left'>
								{greeting}
							</div>
						)}
					</div>
				</SwiperSlide>
			);
		});

	return (
		<ContainerLayout className='mx-auto'>
			<h1 className='section-header mb-10 !text-center'>Testimonials</h1>

			<div>
				<Swiper
					swiper
					className='testimonials-swiper h-fit'
					spaceBetween={25}
					slidesPerView={1}
					tag='ul'
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
					}}
					grabCursor={true}
					speed={1500}
					autoplay={{
						delay: 3000,
					}}
					onInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
				>
					{renderTestimonials(testimonials)}

					{/* Swiper Navigation */}
					<div ref={prevRef} className='swiper-button-prev'>
						<img
							src={showcase_swiper_nav_btn}
							className='!h-[34px] scale-x-[1.35]'
						/>
					</div>

					<div ref={nextRef} className='swiper-button-next'>
						<img
							src={showcase_swiper_nav_btn}
							className='!h-[34px] -scale-x-[1.35]'
						/>
					</div>
				</Swiper>
			</div>
		</ContainerLayout>
	);
};

export default Testimonials;
