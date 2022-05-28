import Head from 'next/head';
import { Fragment } from 'react';
import { Element } from 'react-scroll';

import Header from '@/components/layout/Header';
import Vision from '@/components/about/Vision';
import WhatWeRepresent from '@/components/about/WhatWeRepresent';
import WhoWeAre from '@/components/about/WhoWeAre';

const About = () => {
	return (
		<Fragment>
			<Head>
				<title>
					About Us | MOCES - Humanitarian Support for the Elderly and the Sick
				</title>
			</Head>

			<div className='about'>
				<section>
					<Header
						title='About Us'
						imageSmall='https://unsplash.it/501'
						imageLarge='https://unsplash.it/700'
						nav={[
							{
								text: 'Who we are',
								sectionName: 'about-us',
							},
							{
								text: 'What we represent',
								sectionName: 'about-values',
							},
							{
								text: 'What we seek to achieve',
								sectionName: 'about-vision',
							},
						]}
					/>
				</section>

				<Element as='section' className='mt-16 lg:mt-24' name='about-us'>
					<WhoWeAre />
				</Element>

				<Element as='section' className='mt-16 lg:mt-24' name='about-values'>
					<WhatWeRepresent />
				</Element>

				<Element as='section' className='my-16 lg:my-28' name='about-vision'>
					<Vision />
				</Element>
			</div>
		</Fragment>
	);
};

export default About;
