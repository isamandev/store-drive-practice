import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import React from 'react';

const vazirmatn = Vazirmatn({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-vazirmatn',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'StoreDrive - The only storage solution you need.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fa' dir='rtl'>
			<body className={`${vazirmatn.variable} font-vazirmatn antialiased`}>
				{children}
			</body>
		</html>
	);
}
