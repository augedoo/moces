import Head from 'next/head';
import React, { Fragment } from 'react';
import { Element } from 'react-scroll';
import Header from '@/components/layout/Header';
import Location from '@/components/contact/Location';
import FormInfo from '@/components/contact/FormInfo';
import SocialMedia from '@/components/contact/SocialMedia';

const ContactPage = () => {
	return (
		<Fragment>
			<Head>
				<title>
					Contact Us | MOCES - Humanitarian Support for the Elderly and the Sick
				</title>
			</Head>

			<div className='inspiration'>
				<section>
					<Header
						title='Contact Us'
						imageSmall='https://unsplash.it/604'
						imageLarge='https://unsplash.it/703'
						nav={[
							{
								text: 'Contact Form',
								sectionName: 'form-info',
							},
							{
								text: 'Social Media',
								sectionName: 'social-media',
							},
							{
								text: 'Our Location',
								sectionName: 'our-location',
							},
						]}
					/>
				</section>

				<Element as='section' name='form-info' className='pt-16'>
					<FormInfo />
				</Element>

				<Element as='section' name='social-media' className='py-24'>
					<SocialMedia />
				</Element>

				<Element as='section' name='our-location' className='pb-16'>
					<Location />
				</Element>
			</div>
		</Fragment>
	);
};

export default ContactPage;
