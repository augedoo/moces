import { Fragment } from 'react';
import Head from 'next/head';

import Showcase from '@/components/home/Showcase';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>MOCES | Humanitarian Support for the Elderly and the Sick</title>
			</Head>

			<main>
				<section>
					<Showcase />
				</section>
			</main>
		</Fragment>
	);
}
