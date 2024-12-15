export const navItems = [
	{
		name: 'داشبورد',
		icon: '/assets/icons/dashboard.svg',
		url: '/',
	},
	{
		name: 'اسناد',
		icon: '/assets/icons/documents.svg',
		url: '/documents',
	},
	{
		name: 'تصاویر',
		icon: '/assets/icons/images.svg',
		url: '/images',
	},
	{
		name: 'رسانه‌ها',
		icon: '/assets/icons/video.svg',
		url: '/media',
	},
	{
		name: 'سایر موارد',
		icon: '/assets/icons/others.svg',
		url: '/others',
	},
];

export const actionsDropdownItems = [
	{
		label: 'تغییر نام',
		icon: '/assets/icons/edit.svg',
		value: 'rename',
	},
	{
		label: 'جزئیات',
		icon: '/assets/icons/info.svg',
		value: 'details',
	},
	{
		label: 'اشتراک‌گذاری',
		icon: '/assets/icons/share.svg',
		value: 'share',
	},
	{
		label: 'دانلود',
		icon: '/assets/icons/download.svg',
		value: 'download',
	},
	{
		label: 'حذف',
		icon: '/assets/icons/delete.svg',
		value: 'delete',
	},
];

export const sortTypes = [
	{
		label: 'تاریخ ایجاد (جدیدترین)',
		value: '$createdAt-desc',
	},
	{
		label: 'تاریخ ایجاد (قدیمی‌ترین)',
		value: '$createdAt-asc',
	},
	{
		label: 'نام (A-Z)',
		value: 'name-asc',
	},
	{
		label: 'نام (Z-A)',
		value: 'name-desc',
	},
	{
		label: 'اندازه (بزرگ‌ترین)',
		value: 'size-desc',
	},
	{
		label: 'اندازه (کوچک‌ترین)',
		value: 'size-asc',
	},
];

export const avatarPlaceholderUrl =
	'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg';

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
