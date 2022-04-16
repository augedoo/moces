import QuickDonation from '@/components/donation/QuickDonation';

const Header = () => {
	return (
		<div className='donation__showcase min-h-[380px] bg-red-50 relative amt-content-aligned-left'>
			{/* Quick Donation */}
			<div className='absolute z-30 right-0 -bottom-[15%] lg:block hidden'>
				<QuickDonation onlyInputAmount />
			</div>

			<div className='absolute flex flex-col justify-center w-full h-full gap-4 mx-auto overflow-hidden text-center text-gray-100'>
				<div className='absolute inset-0 z-10 showcase__bg__image'>
					{/* Small Screens */}
					<img
						src='https://unsplash.it/500'
						alt='School boy'
						className='object-cover w-full h-full lg:hidden'
					/>
					{/* Large Screens */}
					<img
						src='https://unsplash.it/700'
						alt='School boy'
						className='hidden object-cover w-full h-full lg:block'
					/>
				</div>
			</div>

			{/* Showcase Content */}
			<div className='absolute z-20 flex items-center w-full h-full amt-content-padded-right showcase__content bg-gradient-to-t from-secondary-700/70 to-transparent'>
				<div className='flex flex-col items-center justify-center mx-auto text-center text-white lg:mx-0 lg:items-start lg:text-left'>
					<h1 className='px-4 mx-auto mb-2 text-4xl font-bold tracking-wider lg:px-0 lg:text-5xl lg:mx-0 sm:max-w-xl'>
						General Donations
					</h1>

					<p className='max-w-sm px-2 mx-auto text-lg font-light lg:leading-relaxed lg:px-0 lg:font-normal sm:max-w-md lg:mx-0 lg:pt-4 lg:max-w-sm xl:max-w-md'>
						General donations are used for organizational upkeep. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Aperiam animi qui
						laudantium fugiat at rem facere maiores atque{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
