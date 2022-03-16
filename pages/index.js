import { Fragment } from 'react';
import Head from 'next/head';

import Showcase from '@/components/home/Showcase';
import QuickDonation from '@/components/donation/QuickDonation';
import Values from '@/components/home/Values';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import News from '@/components/home/News';
import Causes from '@/components/home/Causes';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>MOCES | Humanitarian Support for the Elderly and the Sick</title>
			</Head>

			<main className='home'>
				{/* Showcase */}
				<section>
					<Showcase />
				</section>

				{/* Fast donation for mobile */}
				<section className='mt-10 mb-10 lg:hidden'>
					<QuickDonation />
				</section>

				{/* Values */}
				<section className='mt-16'>
					<Values />
				</section>

				{/* About */}
				<section className='mt-16'>
					<About />
				</section>

				{/* Projects */}
				<section className='mt-16'>
					<Projects />
				</section>

				{/* News */}
				<section className='mt-16 mb-10'>
					<News />
				</section>

				{/* Causes */}
				<section className='mt-16'>
					<Causes />
				</section>
			</main>
		</Fragment>
	);
}
