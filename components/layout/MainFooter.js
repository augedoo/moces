import PropTypes from 'prop-types';
import { CgArrowLongRight } from 'react-icons/cg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import Link from 'next/link';

import facebook from '@/assets/images/facebook-logo.png';
import linkedin from '@/assets/images/linkedin.png';
import twitter from '@/assets/images/twitter.png';
import youtube from '@/assets/images/youtube.png';
import footer_bg from '@/assets/images/footer_bg.jpg';
import crowd from '@/assets/images/crowd.jpg';

import ContainerLayout from '@/components/layout/ContainerLayout';
import Button from '@/components/ui/Button';
import OutlineOffset from '../ui/OutlineOffset';

const MainFooter = ({ navLinks, showTop }) => {
	return (
		<div className='footer mt-16'>
			{/* Top Footer */}
			<div
				className={`footer__top relative h-full w-full pt-20 pb-16 ${
					showTop ? 'block' : 'hidden'
				}`}
			>
				{/* BG Image */}
				<img
					src={footer_bg}
					alt='footer background'
					className='footer__top__bg-img absolute inset-0 z-10 h-full w-full object-cover'
				/>

				{/* Overlay Bg */}
				<div className='footer__top__overlay absolute inset-0 z-20 h-full w-full bg-secondary-700/90'></div>

				{/* Top Content */}
				<ContainerLayout className='footer__top__content relative z-30 mx-auto flex flex-col items-center justify-center gap-10 divide-y divide-gray-100/20 md:flex-row md:flex-wrap md:divide-none lg:gap-0 lg:py-8'>
					{/* Logo */}
					<div className='header__logo flex items-center space-x-4 md:w-full md:justify-center lg:hidden'>
						<div className='h-12 w-12 bg-secondary-100'></div>
						<h1 className='text-3xl font-bold uppercase tracking-wider text-white'>
							Moces
						</h1>
					</div>

					{/* About */}
					<div className='pt-8 md:w-full lg:order-1 lg:-mt-10 lg:w-1/3 lg:pt-0'>
						{/* Logo */}
						<div className='header__logo hidden items-center space-x-4 md:w-full md:justify-center lg:mb-4 lg:flex lg:justify-start'>
							<div className='h-12 w-12 bg-secondary-100'></div>
							<h1 className='text-3xl font-bold uppercase tracking-wider text-white'>
								Moces
							</h1>
						</div>

						<h3 className='text-center text-2xl font-semibold text-white lg:text-left'>
							About
						</h3>

						<p className='mx-auto max-w-xs py-2 pb-4 text-center leading-relaxed text-white/80 sm:max-w-md lg:text-left '>
							In publishing and graphic design, Lorem ipsum is a placeholder
							text commonly used to demonstrate the visual form of a document he
							visualize.
						</p>

						<Button
							url='#/about'
							type='nextLink'
							textContent='Learn More'
							bgClassName='!bg-transparent'
							className='self-start !p-0 !text-sm text-gray-100 lg:w-fit'
						>
							<CgArrowLongRight className='h-7 w-7' />
						</Button>
					</div>

					{/* Call Or post */}
					<div className='pt-8 text-center md:w-full lg:order-4 lg:w-1/3 lg:pt-0 lg:text-left'>
						<h3 className='text-2xl font-semibold text-white'>
							Call Us / Post
						</h3>

						<ul className='mx-auto flex max-w-xs flex-col gap-2 py-2 pb-4 leading-relaxed text-white/80 sm:max-w-md'>
							<li>
								<a href='tel:+237 11 11 11 11'>(237) 11 11 11 11</a>
							</li>
							<li>
								<a href='tel:+233 22 22 22 22'>(233) 22 22 22 22</a>
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

					{/* Locate Us */}
					<div className='pt-8 md:w-2/5 md:pt-0 lg:order-3 lg:w-1/3 lg:px-0 lg:pt-0'>
						<div className='flex flex-col items-center justify-center gap-2 lg:items-start'>
							{/* Icon */}
							<div className='relative flex h-[60px] w-[60px] min-w-[40px] items-center justify-center border bg-primary-50 text-3xl text-primary-500 lg:h-[60px] lg:w-[60px] lg:min-w-[60px] lg:text-4xl '>
								<HiOutlineLocationMarker />

								<OutlineOffset
									outlineColor={'border-white/50'}
									className='-right-[4px] -bottom-[4px] lg:-right-[5px] lg:-bottom-[5px]'
								/>
							</div>

							<h3 className='text-center text-2xl font-semibold text-white'>
								Locate Us
							</h3>
						</div>

						<ul className='mx-auto flex max-w-xs flex-col gap-2 py-2 pb-4 text-center leading-relaxed text-white/80 sm:max-w-md lg:text-left'>
							<li>
								<address>
									Ancien palais presidentiel <br />
									BP 12 798 <br />
									Yaoundé, Cameroon <br />
								</address>
							</li>
							<li className='mt-4 lg:mt-2'>
								<address>
									FD116 Powen St <br />
									GW-0816-1909 (GPS Address) <br />
									Accra, Ghana <br />
								</address>
							</li>
						</ul>
					</div>

					{/* Stay In Touch */}
					<div className='pt-8 md:w-2/5 lg:order-2 lg:w-1/3 lg:px-10 lg:pt-0'>
						<div className='flex flex-col items-center justify-center gap-2 lg:items-start'>
							{/* Icon */}
							<div className='relative flex h-[60px] w-[60px] min-w-[40px] items-center justify-center border bg-primary-50 text-3xl text-primary-500 lg:h-[60px] lg:w-[60px] lg:min-w-[60px] lg:text-4xl '>
								<MdOutlineConnectWithoutContact className='text-primary-500' />

								<OutlineOffset
									outlineColor={'border-white/50'}
									className='-right-[4px] -bottom-[4px] lg:-right-[5px] lg:-bottom-[5px]'
								/>
							</div>

							<h3 className='text-center text-2xl font-semibold text-white'>
								Stay In Touch
							</h3>
						</div>

						<ul className='mobile-menu__sm mt-10 flex items-center space-x-4 md:mt-5 md:justify-center lg:flex-col lg:items-start lg:gap-2 lg:space-x-0'>
							<li>
								<a
									className='flex items-center justify-center lg:justify-start lg:gap-2'
									href='#http://'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex h-10 w-10 items-center justify-center bg-secondary-800/30 '>
										<img src={facebook} alt='facebook' className='h-5 w-5' />
									</div>
									<span className='hidden text-white hover:text-primary-500 lg:inline-block'>
										Facebook
									</span>
								</a>
							</li>
							<li>
								<a
									className='flex items-center justify-center lg:justify-start lg:gap-2'
									href='#http://'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex h-10 w-10 items-center justify-center bg-secondary-800/30 '>
										<img src={twitter} alt='twitter' className='h-5 w-5' />
									</div>
									<span className='hidden text-white hover:text-primary-500 lg:inline-block'>
										Twitter
									</span>
								</a>
							</li>
							<li>
								<a
									className='flex items-center justify-center lg:justify-start lg:gap-2'
									href='#http://'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex h-10 w-10 items-center justify-center bg-secondary-800/30 '>
										<img src={linkedin} alt='linkedin' className='h-5 w-5' />
									</div>
									<span className='hidden text-white hover:text-primary-500 lg:inline-block'>
										LinkedIn
									</span>
								</a>
							</li>
							<li>
								<a
									className='flex items-center justify-center lg:justify-start lg:gap-2'
									href='#http://'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='flex h-10 w-10 items-center justify-center bg-secondary-800/30 '>
										<img src={youtube} alt='youtube' className='h-5 w-5' />
									</div>
									<span className='hidden text-white hover:text-primary-500 lg:inline-block'>
										Youtube
									</span>
								</a>
							</li>
						</ul>

						{/* Email Us */}
						<div className='hidden pt-8 md:block lg:hidden'>
							<h3 className='text-center text-2xl font-semibold text-white'>
								Email Us
							</h3>

							<a
								href='mailto:info@moces.com'
								className='my-3 mb-5 block text-lg text-white md:text-center'
							>
								info@moces.com
							</a>

							<Button
								url='mailto:info@moces.com'
								type='link'
								textContent='Write Mail'
								bgClassName='!bg-primary-500 !hover:bg-white'
								className='self-start !text-sm text-gray-100 md:mx-auto md:max-w-[150px]'
							/>
						</div>
					</div>

					{/* Email Us */}
					<div className='pt-8 md:hidden lg:order-5 lg:block lg:w-1/3 lg:px-10 lg:pt-0'>
						<h3 className='text-center text-2xl font-semibold text-white lg:text-left'>
							Email Us
						</h3>

						<a
							href='mailto:info@moces.com'
							className='my-3 mb-5 block text-lg text-white'
						>
							info@moces.com
						</a>

						<Button
							url='mailto:info@moces.com'
							type='link'
							textContent='Write Mail'
							bgClassName='!bg-primary-500 !hover:bg-white'
							className='self-start !text-sm text-gray-100 hover:bg-white lg:w-[200px]'
						/>
					</div>

					{/* Newsletter */}
					<div className='item-center mx-auto hidden max-w-md flex-col justify-center pt-8 text-center lg:order-6 lg:flex lg:w-1/3 lg:px-0 lg:text-left'>
						<h3 className='text-2xl font-semibold text-white'>
							Subscribe to our newsletter
						</h3>

						<p className='mx-auto max-w-xs py-3 pb-4 leading-relaxed text-white/70 sm:max-w-md '>
							Stay updated on news about MOCES. Enter your email if you are not
							a member of MOCES.
						</p>

						<input
							type='text'
							name='email'
							id='email'
							placeholder='Enter your email'
							className='block w-full border-2 border-white bg-transparent px-2 py-3 text-center text-base text-white outline-none hover:border-primary-500 lg:text-left'
						/>

						<Button
							type='submit'
							textContent='Subscribe'
							bgClassName='!bg-primary-500 !hover:bg-white'
							className='mx-auto mt-8 self-start !text-sm text-gray-100  hover:bg-white  lg:mx-0'
						/>
					</div>
				</ContainerLayout>
			</div>

			{/* Bottom Footer */}
			<div
				className={`footer__bottom relative h-full w-full`}
				style={{ background: `url(${crowd}) no-repeat center center/cover` }}
			>
				<div
					className={`h-full w-full py-8 pb-16 lg:pb-10 lg:pt-0 ${
						showTop === false
							? 'bg-gradient-to-r from-secondary-900/90 via-secondary-900/80 to-primary-800/80 lg:!pt-10'
							: 'bg-secondary-900'
					}`}
				>
					<ContainerLayout className='mx-auto'>
						{/* Newsletter */}
						<div
							className={`item-center mx-auto flex max-w-md flex-col justify-center pt-8 lg:mx-0 lg:max-w-xl lg:items-start ${
								showTop === false ? 'mb-16 block' : 'lg:hidden'
							}`}
						>
							<h3 className='text-center text-2xl font-semibold text-white'>
								Subscribe to our newsletter
							</h3>

							<p className='mx-auto max-w-xs py-3 pb-4 text-center leading-relaxed text-white/70 sm:max-w-md lg:max-w-full lg:text-left'>
								Stay updated on news about MOCES. Enter your email if you are
								not a member of MOCES.
							</p>

							<input
								type='text'
								name='email'
								id='email'
								placeholder='Enter your email'
								className='block w-full border-2 border-white bg-transparent px-2 py-3 text-center text-base text-white outline-none hover:border-primary-500 lg:text-left'
							/>

							<Button
								type='submit'
								textContent='Subscribe'
								bgClassName='!bg-primary-500 !hover:bg-white'
								className='mx-auto mt-8 self-start !text-sm text-gray-100 hover:bg-white lg:mx-0 lg:!py-4'
							/>
						</div>

						{/* Bottom Navigation */}
						<div
							className={`hidden border-x ${
								showTop === false && 'border-t'
							} border-b border-secondary-600 lg:flex`}
						>
							<ul className='flex h-full w-full items-center divide-x divide-secondary-600 text-center text-sm font-bold uppercase'>
								{navLinks.map((link, index) => (
									<li key={index} className='w-full flex-1'>
										<Link href={link.route}>
											<a className='block w-full py-4 text-secondary-400 hover:bg-secondary-600 hover:!text-white'>
												{link.text}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Copyright */}
						<div className='mt-12 flex flex-col gap-10 text-center text-sm font-light text-white opacity-70 lg:mt-8 lg:flex-row lg:justify-between'>
							<p>© Copyright by MOCES 2021. All rights reserved</p>

							<p className='opacity-70'>
								Designed and built by AmoTech Solutions
							</p>
						</div>
					</ContainerLayout>
				</div>
			</div>
		</div>
	);
};

MainFooter.defaultProps = {
	showTop: true,
};

MainFooter.propTypes = {
	showTop: PropTypes.bool,
};

export default MainFooter;
