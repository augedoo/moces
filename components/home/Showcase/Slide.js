import { MdOutlineArrowRightAlt } from 'react-icons/md';

import Button from '@/components/ui/Button';
import ContainerLayout from '@/components/layout/ContainerLayout';
import showcase_img from '@/assets/images/temp/showcase-img.jpg';
import showcase_image_lg from '@/assets/images/temp/showcase_image_lg.jpg';

const Slide = ({ slideData: { headline, supportingInfo } }) => {
	return (
		<div className='relative flex flex-col justify-center w-screen h-full gap-4 mx-auto text-center text-gray-100 swiper-slide'>
			<div className='absolute inset-0 z-10 showcase__bg__image'>
				{/* Small Screens */}
				<img
					src={showcase_img}
					alt='School boy'
					className='object-cover w-full h-full lg:hidden'
				/>
				{/* Large Screens */}
				<img
					src={showcase_image_lg}
					alt='School boy'
					className='hidden object-cover w-full h-full lg:block'
				/>
			</div>

			{/* Showcase Content */}
			<div className='relative z-20 flex items-center w-full h-full amt-content-padded-right showcase__content bg-gradient-to-t from-secondary-700/70 to-transparent'>
				<div className='flex flex-col items-center justify-center mx-auto text-center lg:mx-0 lg:items-start lg:text-left'>
					<h1 className='px-4 mx-auto mb-2 text-4xl font-bold tracking-wider lg:px-0 lg:text-5xl lg:mx-0 sm:max-w-xl'>
						{headline}
					</h1>

					<p className='max-w-sm px-2 mx-auto text-lg font-light lg:leading-loose lg:px-0 lg:font-normal sm:max-w-md lg:mx-0 lg:pt-4'>
						{supportingInfo}
					</p>

					{/* CTA */}
					<Button
						url='#/donate'
						type='nextLink'
						textContent='Start creating impact here'
						bgClassName='bg-primary-500'
						className='mt-8 text-gray-100 sm:block w-5/6 max-w-xs !flex lg:mt-12'
					>
						<MdOutlineArrowRightAlt className='w-7 h-7' />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Slide;
