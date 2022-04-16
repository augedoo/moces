import React from 'react';

import QuickDonation from '@/components/donation/QuickDonation';
import DonationHeader from '@/components/donation/DonationHeader';
import Causes from '@/components/donation/Causes';
import CurrentProject from '@/components/projects/CurrentProject';
import DonationValues from '@/components/donation/DonationValues';

const Donation = () => {
	return (
		<div className='donation'>
			<section>
				<DonationHeader />
			</section>

			{/* Fast donation for mobile */}
			<section className='mt-10 mb-10 lg:hidden'>
				<QuickDonation onlyInputAmount />
			</section>

			<section className='mt-6 lg:mt-16 xl:mt-24'>
				<Causes />
			</section>

			<section className='mt-16 lg:mt-24'>
				<CurrentProject />
			</section>

			<section className='mt-16 lg:mt-24'>
				<DonationValues />
			</section>
		</div>
	);
};

export default Donation;
