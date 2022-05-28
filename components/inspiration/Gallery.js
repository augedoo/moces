import { useRef } from 'react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ContainerLayout from '../layout/ContainerLayout';
import long_prev_button from '@/assets/images/long_prev_button.png';
import long_next_button from '@/assets/images/long_next_button.png';

SwiperCore.use([Autoplay, Navigation]);

const Gallery = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<ContainerLayout className='mx-auto gallery'>
			<h1 className='mb-6 section-header lg:mb-10'>Events Gallery</h1>

			<div>
				<div className='flex flex-col items-center justify-between mb-6 lg:flex-row'>
					<div>
						<h2 className='heading-1 !normal-case'>
							Free health screening for the elderly
						</h2>
						<p className='text-sm font-semibold text-center font-zilla text-primary-500 lg:text-left'>
							Ablekuma - Manhean
						</p>
					</div>

					<div className='flex items-center gap-4 my-6'>
						{/* Swiper Navigation */}
						<button ref={prevRef}>
							<img
								src={long_prev_button}
								className='h-[40px] w-[100px] duration-300 hover:scale-[1.15]'
							/>
						</button>

						<button ref={nextRef}>
							<img
								src={long_next_button}
								className='h-[40px] w-[100px] duration-300 hover:scale-[1.15]'
							/>
						</button>
					</div>
				</div>

				<div className='grid gap-4 event-images'>
					<img src='https://unsplash.it/601' />
					<img src='https://unsplash.it/602' />
					<img src='https://unsplash.it/603' />
				</div>
			</div>

			<div></div>
		</ContainerLayout>
	);
};

export default Gallery;
