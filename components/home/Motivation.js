import crowd from '@/assets/images/crowd.jpg';
import Button from '../ui/Button';

const Motivation = () => {
	return (
		<div className='banner h-[350px] sm:w-[90%] mx-auto lg:mx-0 lg:w-auto mb-10 amt-content-padded-left'>
			<div className='relative h-full '>
				<div className='relative z-10 w-full h-full overflow-hidden'>
					{/* Overlay */}
					<div className='absolute z-20 w-full h-full opacity-40 bg-gradient-to-r from-secondary-700 via-primary-500 to-primary-500'></div>

					<img
						src={crowd}
						alt='crowd'
						className='absolute inset-0 z-10 object-cover w-full h-full'
					/>
				</div>

				<div className='absolute inset-x-0 inset-y-0 z-20 flex flex-col items-center justify-center h-full gap-4 text-white transform lg:left-auto lg:right-0 lg:items-end lg:translate-x-[50px]  xl:translate-x-1/3 lg:text-secondary-600'>
					<h1 className='max-w-xs pb-10 mx-auto text-4xl font-bold text-center lg:max-w-none'>
						Together we can Do more{' '}
					</h1>

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
