import React from 'react';
import Button from '../ui/Button';

const Info = () => {
	return (
		<div className='bg-secondary-700/10 px-8 py-10 lg:mt-11 lg:mb-20'>
			<h2 className='heading-2 mb-6'>You can call or write to us.</h2>

			<div className='flex flex-col items-center gap-4 lg:flex-row lg:gap-0'>
				<div className='flex-1'>
					<h3 className='heading-3 !text-primary-500'>Ghana</h3>

					<ul className='relative mx-auto flex max-w-xs flex-col gap-2 py-2 pb-4 text-center leading-relaxed after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:w-full after:bg-gradient-to-l after:from-transparent after:via-primary-500 after:to-transparent sm:max-w-md lg:pb-8 lg:text-left'>
						<li>
							<a href='tel:+233 11 11 11 11'>(233) 11 11 11 11</a>
						</li>
						<li>
							<address>
								P. O. Box DK 195 Darkuma <br />
								Greater Accra <br />
								Ghana <br />
							</address>
						</li>
					</ul>
				</div>

				<div className='mx-8 hidden h-40 w-[1px] bg-gradient-to-b from-transparent via-primary-500 to-transparent lg:block'></div>

				<div className='flex-1'>
					<h3 className='heading-3 !text-primary-500'>Cameroon</h3>

					<ul className='mx-auto flex max-w-xs flex-col gap-2 py-2 pb-4 text-center leading-relaxed sm:max-w-md lg:text-left'>
						<li>
							<a href='tel:+237 22 22 22 22'>(237) 22 22 22 22</a>
						</li>
						<li>
							<address>
								P. O. Box 56 Muyuka <br />
								South West Region <br />
								Republic of Cameroon <br />
							</address>
						</li>
					</ul>
				</div>
			</div>

			{/* Email */}
			<div className='flex flex-col items-center pt-8 text-left lg:items-start'>
				<h3 className='heading-2'>Send us a mail</h3>

				<a href='mailto:info@moces.com' className='my-3 mb-5 block text-lg'>
					info@moces.com
				</a>

				<Button
					url='mailto:info@moces.com'
					type='link'
					textContent='Write Mail'
					bgClassName='!bg-primary-500 !hover:bg-secondary-700'
					className='w-fit !text-sm text-gray-100'
				/>
			</div>
		</div>
	);
};

export default Info;
