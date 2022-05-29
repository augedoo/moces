import React from 'react';

import ContainerLayout from '../layout/ContainerLayout';
import facebook from '@/assets/images/facebook-logo.png';
import linkedin from '@/assets/images/linkedin.png';
import twitter from '@/assets/images/twitter.png';
import youtube from '@/assets/images/youtube.png';

const SocialMedia = () => {
	return (
		<ContainerLayout>
			<h1 className='section-header !text-primary-500'>Social Media</h1>
			<div className='mb-6 text-center text-lg font-medium text-secondary-800 lg:mb-10 lg:text-left'>
				Stay Connected
			</div>

			<div className='flex flex-wrap items-center'>
				<a
					href='#/facebook'
					target='_blank'
					className='flex h-48 w-1/2 flex-col items-center justify-center bg-secondary-500 capitalize text-white sm:h-40 sm:flex-1 xl:h-44'
				>
					<img
						src={facebook}
						alt='facebook icon'
						className='mb-2 h-12 w-12 sm:h-10 sm:w-10 lg:h-14 lg:w-14'
					/>
					Facebook
				</a>
				<a
					href='#/twitter'
					target='_blank'
					className='flex h-48 w-1/2 flex-col items-center justify-center bg-secondary-600 capitalize text-white sm:h-40 sm:flex-1 xl:h-44'
				>
					<img
						src={twitter}
						alt='twitter icon'
						className='mb-2 h-12 w-12 sm:h-10 sm:w-10 lg:h-14 lg:w-14'
					/>
					Twitter
				</a>
				<a
					href='#/youtube'
					target='_blank'
					className='flex h-48 w-1/2 flex-col items-center justify-center bg-secondary-700 capitalize text-white sm:h-40 sm:flex-1 xl:h-44'
				>
					<img
						src={youtube}
						alt='youtube icon'
						className='mb-2 h-12 w-12 sm:h-10 sm:w-10 lg:h-14 lg:w-14'
					/>
					Youtube
				</a>
				<a
					href='#/linkedin'
					target='_blank'
					className='flex h-48 w-1/2 flex-col items-center justify-center bg-secondary-800 capitalize text-white sm:h-40 sm:flex-1 xl:h-44'
				>
					<img
						src={linkedin}
						alt='linkedin icon'
						className='mb-2 h-12 w-12 sm:h-10 sm:w-10 lg:h-14 lg:w-14'
					/>
					LinkedIn
				</a>
			</div>
		</ContainerLayout>
	);
};

export default SocialMedia;
