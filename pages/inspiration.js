import { Fragment } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import { Element } from 'react-scroll';
import Impact from '@/components/inspiration/Impact';
import Gallery from '@/components/inspiration/Gallery';
import Testimonials from '@/components/inspiration/Testimonials';

const InspirationPage = () => {
	return (
		<Fragment>
			<Head>
				<title>
					Inspiration | MOCES - Humanitarian Support for the Elderly and the
					Sick
				</title>
			</Head>

			<div className='inspiration'>
				<section>
					<Header
						title='Inspiration'
						imageSmall='https://unsplash.it/504'
						imageLarge='https://unsplash.it/703'
						nav={[
							{
								text: 'Events Gallery',
								sectionName: 'gallery',
							},
							{
								text: 'Our Impact',
								sectionName: 'impact',
							},
							{
								text: 'Testimonials',
								sectionName: 'testimonials',
							},
						]}
					/>
				</section>

				<Element as='section' name='impact' className='pt-16'>
					<Gallery />
				</Element>

				<Element as='section' name='impact' className='py-16'>
					<Impact />
				</Element>

				<Element as='section' name='testimonials' className='pb-16'>
					<Testimonials />
				</Element>
			</div>
		</Fragment>
	);
};

export default InspirationPage;
