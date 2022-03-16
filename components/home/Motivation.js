import crowd from '@/assets/images/crowd.jpg';
import Button from '../ui/Button';

const Motivation = () => {
	return (
		<div className='banner h-[350px] sm:w-[90%] mx-auto lg:mx-0 lg:w-auto mb-10 amt-content-padded-left'>
			<div className='relative h-full amt-content-aligned-left'>
				<div className='relative z-10 w-full h-full overflow-hidden'>
					{/* Overlay */}
					<div className='absolute z-20 w-full h-full opacity-40 bg-gradient-to-r from-primary-500 via-primary-500 to-secondary-700'></div>

					<img
						src={crowd}
						alt='crowd'
						className='absolute inset-0 z-10 object-cover w-full h-full'
					/>
				</div>

				<div className='absolute inset-x-0 inset-y-0 z-20 flex flex-col items-center justify-center h-full gap-4 transform lg:left-auto lg:right-0 lg:items-end lg:translate-x-1/2 text-secondary-700'>
					<h1 className='pb-6 text-4xl font-bold'>Together we can Do more </h1>

					<div className='flex justify-center lg:justify-end'>
						<Button
							url='#/donate'
							type='nextLink'
							textContent='See how you can help'
							bgClassName='bg-secondary-500 hover:bg-primary-500'
							className='text-sm text-center text-gray-100 !py-4 !px-10 w-fit sm:mx-auto lg:ml-0'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Motivation;
