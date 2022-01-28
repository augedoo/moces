import { Fragment } from 'react';
import Head from 'next/head';

import MainNavigation from '../components/layout/MainNavigation/index';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>MOCES | Humanitarian Support for the Elderly and the Sick</title>
			</Head>

			<div className='w-screen h-[70vh] bg-red-400'></div>
		</Fragment>
	);
}
