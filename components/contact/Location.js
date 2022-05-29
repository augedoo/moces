import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import ContainerLayout from '../layout/ContainerLayout';
import OutlineOffset from '../ui/OutlineOffset';
import Map from './Map';

const Location = () => {
	return (
		<ContainerLayout>
			<h1 className='section-header mb-6'>Our Locations</h1>

			{/* Locations */}
			<div className='flex flex-col items-center justify-center sm:flex-row lg:justify-start'>
				<div className='relative pb-4 after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:w-full after:bg-gradient-to-l after:from-transparent after:via-primary-500 after:to-transparent sm:after:hidden lg:flex lg:gap-4'>
					<div className='relative mx-auto flex h-[60px] w-[60px] min-w-[40px] items-center justify-center border bg-primary-50 text-3xl text-primary-500 sm:mx-0 lg:h-[60px] lg:w-[60px] lg:min-w-[60px] lg:text-4xl '>
						<HiOutlineLocationMarker />

						<OutlineOffset
							outlineColor={'border-white/50'}
							className='-right-[4px] -bottom-[4px] lg:-right-[5px] lg:-bottom-[5px]'
						/>
					</div>

					<ul className='mx-auto my-2 flex max-w-xs flex-col gap-2 pb-4 text-center leading-relaxed sm:max-w-md sm:text-left lg:text-left'>
						<h3 className='text-2xl font-semibold text-secondary-700'>Ghana</h3>
						<li>
							<address>
								FD116 Powen St <br />
								GW-0816-1909 (GPS Address) <br />
								Accra, Ghana <br />
							</address>
						</li>
					</ul>
				</div>

				{/* Separator */}
				<div className='mx-20 hidden h-40 w-[1px] bg-gradient-to-b from-transparent via-primary-500 to-transparent sm:block lg:mx-32 xl:mx-40 2xl:mx-48'></div>

				<div className='pt-10 sm:pt-0 lg:flex lg:gap-4'>
					<div className='relative mx-auto flex h-[60px] w-[60px] min-w-[40px] items-center justify-center border bg-primary-50 text-3xl text-primary-500 sm:mr-0 sm:ml-auto lg:mx-0 lg:h-[60px] lg:w-[60px] lg:min-w-[60px] lg:text-4xl '>
						<HiOutlineLocationMarker />

						<OutlineOffset
							outlineColor={'border-white/50'}
							className='-right-[4px] -bottom-[4px] lg:-right-[5px] lg:-bottom-[5px]'
						/>
					</div>

					<ul className='mx-auto my-2 flex max-w-xs flex-col gap-2 pb-4 text-center leading-relaxed sm:max-w-md sm:text-right lg:text-left'>
						<h3 className='text-2xl font-semibold text-secondary-700'>
							Cameroon
						</h3>
						<li>
							<address>
								Ancien palais presidential <br />
								BP 12 798 <br />
								Yaoundé, Cameroon <br />
							</address>
						</li>
					</ul>
				</div>
			</div>

			{/* Map */}
			<div className='h-[400px] shadow-xl shadow-secondary-700/10 xl:h-[500px]'>
				<Map />
			</div>
		</ContainerLayout>
	);
};

export default Location;
