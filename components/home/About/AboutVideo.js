import { Fragment } from 'react';
import play_button from '@/assets/svgs/play_button.svg';
import moces_ceo from '@/assets/images/moces_ceo.jpg';

import ContainerLayout from '@/components/layout/ContainerLayout';
import Button from '@/components/ui/Button';
import OutlineOffset from '@/components/ui/OutlineOffset';

const AboutVideo = () => {
	return (
		<Fragment>
			<ContainerLayout className='h-[450px] lg:h-[500px] xl:h-[550px] min-w-[95%] lg:!px-0 sm:min-w-0 sm:mx-auto relative bg-gray-400'>
				<OutlineOffset />

				{/* Background Image */}
				<img
					src={moces_ceo}
					alt={'Mr Godlove Egyawan - CEO of MOCES'}
					className='object-cover w-full h-full'
				/>

				{/* Play Button */}
				<Button
					type='button'
					bgClassName='bg-transparent'
					className='absolute z-20 -translate-x-1/2 -translate-y-1/2 opacity-90 top-1/2 left-1/2'
				>
					<img
						src={play_button}
						className='object-cover !p-0 !m-0 w-14 h-14 lg:w-16 lg:h-16 rounded-full border-secondary-800/40 border-2'
					/>
				</Button>

				<div className='absolute inset-0 z-10 flex items-end justify-center w-full h-full bg-gradient-to-t from-secondary-700/50 to-secondary-700/10'>
					<div className='justify-end p-10 text-center text-gray-100'>
						<span className='text-base font-normal uppercase'>
							Listen to the CEO
						</span>

						<h3 className='text-xl font-bold capitalize'>
							Mr. Godlove Egyawan
						</h3>
					</div>
				</div>
			</ContainerLayout>

			{/* // Todo: Modal Video Player implementation */}
			{/* <VideoPlayer /> */}
		</Fragment>
	);
};

export default AboutVideo;
