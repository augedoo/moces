import React, { useState } from 'react';
import { CgArrowLongRight } from 'react-icons/cg';

import OutlineOffset from '@/components/ui/OutlineOffset';
import Button from '@/components/ui/Button';

const QuickDonation = () => {
	const [activeAmount, setActiveAmount] = useState(null);

	const amountOptions = [5, 10, 20];
	const currency = 'GH₵';

	return (
		<div className='w-[90%] lg:w-full mx-auto sm:max-w-[450px] xl:max-w-[480px] xl:px-6 border relative shadow p-4 py-6 pb-10 bg-gray-100'>
			{/* Line Shadow */}
			<OutlineOffset />

			{/* Form */}
			<form className='flex flex-col sm:items-center lg:items-start w-full h-full'>
				<h2 className='font-black text-gray-700 text-2xl'>
					Pledge your support today.
				</h2>

				<p className='font-medium py-1 text-gray-800 text-lg'>
					Help us do more.
				</p>

				{/* Options */}
				<div className='flex items-center gap-1 gap-y-2 mt-6 flex-wrap'>
					{amountOptions.map((amount, index) => (
						<button
							onClick={() => setActiveAmount(amount)}
							index={index}
							type='button'
							className={`min-w-[70px] flex-1 gap-0.5 flex items-center justify-center h-12 border font-semibold border-secondary-700 focus:border-primary-500  ${
								activeAmount === amount
									? 'bg-primary-500 !border-primary-500  text-white'
									: 'bg-transparent text-secondary-700'
							}`}
						>
							<span className='text-xs font-light'>{currency}</span> {amount}
						</button>
					))}

					{/* Amount Input */}
					<div className='flex items-center group flex-1 min-w-[120px] group h-12 relative'>
						<span className='text-xs font-light absolute w-[40px] h-full bg-secondary-700 group-focus-within:bg-primary-500 flex items-center justify-center text-white'>
							{currency}
						</span>
						<input
							onClick={() => setActiveAmount(null)}
							type='number'
							step={1}
							placeholder='Amt'
							className='h-full w-full bg-transparent font-semibold outline-none pl-[45px] border-secondary-700 focus:border-primary-500 border'
						/>
					</div>
				</div>

				{/* Submit */}
				<Button
					type='submit'
					textContent='Select Payment Method'
					bgClassName='bg-secondary-700 hover:bg-secondary-500'
					className='mt-5 text-secondary-50'
				>
					<CgArrowLongRight className='w-7 h-7' />
				</Button>
			</form>
		</div>
	);
};

export default QuickDonation;
