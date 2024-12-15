'use client';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { sendEmailOTP, verifySecret } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const OTPModal = ({ accountId, email }: { accountId: string; email: string }) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(true);
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const sessionId = await verifySecret({ accountId, password });

			if (sessionId) router.push('/');
		} catch (error) {
			console.log('تایید کد OTP ناموفق بود', error);
		}
		setIsLoading(false);
	};

	const handleResendOtp = async () => {
		await sendEmailOTP({ email });
	};

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogContent className='shad-alert-dialog'>
				<AlertDialogHeader className='relative flex justify-center'>
					<AlertDialogTitle className='h2 text-center'>
						کد OTP خود را وارد کنید{' '}
						<Image
							src='/assets/icons/close-dark.svg'
							alt='close'
							width={20}
							height={20}
							onClick={() => setIsOpen(false)}
							className='otp-close-button'
						/>
					</AlertDialogTitle>
					<AlertDialogDescription className='subtitle-2 text-center text-light-100'>
						کدی به <span className='pl-1 text-brand'>{email}</span> ارسال شده است.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<InputOTP maxLength={6} value={password} onChange={setPassword}>
					<InputOTPGroup className='shad-otp'>
						<InputOTPSlot index={0} className='shad-otp-slot' />
						<InputOTPSlot index={1} className='shad-otp-slot' />
						<InputOTPSlot index={2} className='shad-otp-slot' />
						<InputOTPSlot index={3} className='shad-otp-slot' />
						<InputOTPSlot index={4} className='shad-otp-slot' />
						<InputOTPSlot index={5} className='shad-otp-slot' />
					</InputOTPGroup>
				</InputOTP>

				<AlertDialogFooter>
					<div className='flex w-full flex-col gap-4'>
						<AlertDialogAction
							onClick={handleSubmit}
							className='shad-submit-btn h-12'
							type='button'
						>
							ارسال
							{isLoading && (
								<Image
									src='/assets/icons/loader.svg'
									alt='loader'
									width={24}
									height={24}
									className='ml-2 animate-spin'
								/>
							)}
						</AlertDialogAction>
						<div className='subtitle-2 m-2 text-center text-light-100'>
							کدی دریافت نکردید؟
							<Button
								type='button'
								variant='link'
								className='pl-1 text-brand'
								onClick={handleResendOtp}
							>
								برای ارسال مجدد کلیک کنید
							</Button>
						</div>
					</div>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default OTPModal;
