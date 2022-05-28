import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlinePlus } from 'react-icons/hi';
import { SRLWrapper } from 'simple-react-lightbox';

import ContainerLayout from '../layout/ContainerLayout';
import Button from '../ui/Button';

SwiperCore.use([Autoplay]);

const inspirationImages = [
	{ url: 'https://unsplash.it/500' },
	{ url: 'https://unsplash.it/501' },
	{ url: 'https://unsplash.it/502' },
	{ url: 'https://unsplash.it/503' },
	{ url: 'https://unsplash.it/504' },
	{ url: 'https://unsplash.it/505' },
];

const Inspiration = () => {
	const renderInspirationImages = (articleList) =>
		articleList.map((img, index) => {
			return (
				<SwiperSlide key={index}>
					<div className='w-full h-full'>
						<img
							src={img.url}
							alt='This is the time.'
							className='object-cover w-full h-full'
						/>
					</div>
				</SwiperSlide>
			);
		});

	return (
		<div className='inspiration'>
			<ContainerLayout className='px-2 mx-auto'>
				<h1 className='section-header lg:!text-center'>Our Inspiration</h1>

				<p className='max-w-xs pt-8 mx-auto text-center sm:max-w-md '>
					Lives we’ve touched over the year. This is all because people like you
					cared about humanity.
				</p>

				{/* Swiper */}
				<div className='w-full mt-8 inspiration'>
					<SRLWrapper
						options={{
							thumbnails: { showThumbnails: false },
							caption: { showCaption: false },
						}}
					>
						<Swiper
							spaceBetween={15}
							slidesPerView={1}
							breakpoints={{
								640: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 4,
									spaceBetween: 20,
								},
								1536: {
									slidesPerView: 5,
								},
							}}
							grabCursor={true}
							loop
							speed={1500}
							autoplay={{
								delay: 1000,
							}}
						>
							{renderInspirationImages(inspirationImages)}
						</Swiper>
					</SRLWrapper>
				</div>

				<div className='flex justify-center mt-10'>
					<Button
						url='/inspiration'
						type='nextLink'
						textContent='Get More Inspired'
						bgClassName='bg-transparent'
						className='border-2 border-primary-500 !py-4 !px-10 text-center text-sm text-primary-500 transition duration-300 hover:!border-secondary-500 hover:text-secondary-500'
					/>
				</div>
			</ContainerLayout>
		</div>
	);
};

export default Inspiration;
