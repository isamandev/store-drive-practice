'use client';
import { navItems } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
	fullName: string;
	avatar: string;
	email: string;
}
const Sidebar = ({ fullName, email, avatar }: Props) => {
	const pathname = usePathname();
	return (
		<aside className='sidebar'>
			<Link href='/'>
				<Image
					src='/assets/icons/logo-full-brand.svg'
					alt='logo'
					width={160}
					height={60}
					className='hidden h-auto lg:block'
				/>
				<Image
					src='/assets/icons/logo-brand.svg'
					alt='logo'
					width={52}
					height={52}
					className='lg:hidden'
				/>
			</Link>
			<nav className='sidebar-nav'>
				<ul className='flex flex-1 flex-col gap-4'>
					{navItems.map(({ url, name, icon }) => {
						return (
							<Link key={name} href={url} className='lg:w-full'>
								<li className={cn('sidebar-nav-item', pathname === url && 'shad-active')}>
									<Image
										src={icon}
										width={24}
										height={24}
										alt='icon'
										className={cn('nav-icon', pathname === url && 'nav-icon-active')}
									/>
									<p className='hidden lg:block'>{name}</p>
								</li>
							</Link>
						);
					})}
				</ul>
			</nav>
			<Image
				src='/assets/images/files.png'
				alt='logo'
				width={150}
				height={0}
				className='m-auto mb-2'
			/>
			<div className='sidebar-user-info'>
				<Image
					src={avatar}
					alt='avatar'
					width={44}
					height={44}
					className='sidebar-user-avatar'
				/>
				<div className='hidden lg:block'>
					<p className='subtitle-2 capitalize'>{fullName}</p>
					<p className='caption'>{email}</p>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
