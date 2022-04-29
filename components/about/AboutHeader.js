import React from 'react';

const AboutHeader = () => {
	return (
		<div className='about__header min-h-[380px] bg-red-50 relative amt-content-aligned-left'>
			<div className='absolute flex flex-col justify-center w-full h-full gap-4 mx-auto overflow-hidden text-center text-gray-100'>
				<div className='absolute inset-0 z-10 header__bg__image'>
					{/* Small Screens */}
					<img
						src='https://unsplash.it/501'
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
			<div className='absolute z-20 flex items-center w-full h-full amt-content-padded-right header__content bg-gradient-to-t from-secondary-700/70 to-transparent'>
				<div className='flex flex-col items-center justify-center mx-auto text-center text-white lg:mx-0 lg:items-start lg:text-left'>
					<h1 className='px-4 mx-auto mb-2 text-4xl font-bold tracking-wider lg:px-0 lg:text-5xl lg:mx-0 sm:max-w-xl'>
						About Us
					</h1>

					<ul className='flex flex-col items-center gap-3 lg:items-start'>
						<li className='flex items-center before:w-5 group before:h-[1px] after:w-5 before:bg-primary-500 gap-3 hover:before:bg-white before:duration-300 after:h-[1px] after:bg-primary-500 hover:after:bg-white after:duration-300 lg:after:hidden'>
							<a
								href='#about-us'
								className='text-white duration-300 group-hover:text-primary-500'
							>
								Who we are
							</a>
						</li>
						<li className='flex items-center before:w-5 group before:h-[1px] after:w-5 before:bg-primary-500 gap-3 hover:before:bg-white before:duration-300 after:h-[1px] after:bg-primary-500 hover:after:bg-white after:duration-300 lg:after:hidden'>
							<a
								href='#about-values'
								className='text-white duration-300 group-hover:text-primary-500'
							>
								What we represent
							</a>
						</li>
						<li className='flex items-center before:w-5 group before:h-[1px] after:w-5 before:bg-primary-500 gap-3 hover:before:bg-white before:duration-300 after:h-[1px] after:bg-primary-500 hover:after:bg-white after:duration-300 lg:after:hidden'>
							<a
								href='#about-vision'
								className='text-white duration-300 group-hover:text-primary-500'
							>
								What we seek to achieve
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutHeader;
