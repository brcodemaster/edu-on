export const menus = [
	{
		title: 'home',
		link: '/',
	},
	{
		title: 'courses',
		link: '/courses',
	},
	{
		title: 'faq',
		link: '/faq',
	},
	{
		title: 'aboutUs',
		link: '/about-us',
	},
]

export const languages = [
	{
		title: "O'zbekcha",
		label: "O'z",
		locale: 'uz',
	},
	{
		title: 'English',
		label: 'Eng',
		locale: 'en',
	},
]

export const newCourses: Courses[] = [
	{
		imgUrl: '/courses-photo-1.png',
		alt: 'CRM in business',
		labelImg: '/courses-label-1.png',
		labelAlt: 'Abdukarimov',
		title: 'CRM',
		rating: 4.2,
		comments: 12965,
		views: 54112,
		price: 2750000,
	},
	{
		imgUrl: '/courses-photo-2.png',
		alt: 'Business',
		labelImg: '/courses-label-2.png',
		labelAlt: 'Umirov',
		title: 'business',
		rating: 4.7,
		comments: 54110,
		views: 114554,
		price: 0,
	},
	{
		imgUrl: '/courses-photo-3.png',
		alt: 'LTV',
		labelImg: '/courses-label-3.png',
		labelAlt: 'Razzoqov',
		title: 'LTV',
		rating: 4.9,
		comments: 154,
		views: 1055,
		price: 12000000,
	},
	{
		imgUrl: '/courses-photo-4.png',
		alt: 'CRM in business',
		labelImg: '/courses-label-4.png',
		labelAlt: 'Abdukarimov',
		title: 'brending',
		rating: 4.9,
		comments: 5114,
		views: 17554,
		price: 6200000,
		discountPrice: 8600000,
	},
	{
		imgUrl: '/courses-photo-5.png',
		alt: 'Blog',
		labelImg: '/courses-label-5.png',
		labelAlt: 'label5',
		title: 'blog',
		rating: 4.9,
		comments: 1483,
		views: 4544,
		price: 1000000,
	},
	{
		imgUrl: '/courses-photo-6.png',
		alt: 'UX/UI',
		labelImg: '/courses-label-6.png',
		labelAlt: 'label6',
		title: 'ux',
		rating: 4.4,
		comments: 1548,
		views: 12445,
		price: 0,
	},
	{
		imgUrl: '/courses-photo-7.png',
		alt: 'SMM',
		labelImg: '/courses-label-7.png',
		labelAlt: 'label7',
		title: 'SMM',
		rating: 3.9,
		comments: 114588,
		views: 214558,
		price: 0,
	},
	{
		imgUrl: '/courses-photo-8.png',
		alt: 'English',
		labelImg: '/courses-label-8.png',
		labelAlt: 'label8',
		title: 'english',
		rating: 4.8,
		comments: 158,
		views: 954,
		discountPrice: 4200000,
		price: 3000000,
	},
	{
		imgUrl: '/courses-photo-9.png',
		alt: 'Telegram bot',
		labelImg: '/courses-label-9.png',
		labelAlt: 'label9',
		title: 'telegramBot',
		rating: 4.7,
		comments: 6591,
		views: 45478,
		price: 0,
	},
]

export const speakers = [
	{
		name: 'Akmal P.',
		specialist: 'IT Biznes',
		imgUrl: '/speaker-1.png',
		alt: 'Akmal P.',
		company: 'Express24',
		rating: 4.7,
		comments: 12965,
	},
	{
		name: 'Husan M.',
		specialist: 'Biznes',
		imgUrl: '/speaker-2.png',
		alt: 'Husan M.',
		company: 'MFaktor',
		rating: 4.6,
		comments: 1011,
	},
	{
		name: 'Hasan M.',
		specialist: 'Biznes',
		imgUrl: '/speaker-3.png',
		alt: 'Hasan M.',
		company: 'MFaktor',
		rating: 4.1,
		comments: 7544,
	},
	{
		name: 'Jahongir P.',
		specialist: 'Menejment',
		imgUrl: '/speaker-4.png',
		alt: 'Jahongir P.',
		company: 'Cambridge',
		rating: 4.7,
		comments: 12965,
	},
]

export const courses = [
	{
		title: 'marketing',
		amountOfCourse: 72,
		icon: '/chart.svg',
		alt: 'Marketing course',
		link: '/marketing',
		disabled: false,
	},
	{
		title: 'programming',
		amountOfCourse: 124,
		icon: '/category.svg',
		alt: 'Programming course',
		link: '/programming',
		disabled: true,
	},
	{
		title: 'design',
		amountOfCourse: 62,
		icon: '/image.svg',
		alt: 'Design course',
		link: '/design',
		disabled: true,
	},
	{
		title: 'religion',
		amountOfCourse: 31,
		icon: '/moon.svg',
		alt: 'Din course',
		link: '/din',
		disabled: true,
	},
]

export const thoughts: {
	imgUrl: string
	alt: string
	name: string
	role: 'pupil' | 'educator'
	comment: string
}[] = [
	{
		imgUrl: '/speaker-1.png',
		alt: 'Diyor Sh.',
		name: 'Diyor Sh.',
		role: 'pupil',
		comment: 'comment1',
	},
	{
		imgUrl: '/speaker-2.png',
		alt: 'Shavkat Hasan',
		name: 'Shavkat Hasan',
		role: 'educator',
		comment: 'comment2',
	},
	{
		imgUrl: '/speaker-3.png',
		alt: 'Huzayfa B.',
		name: 'Huzayfa B.',
		role: 'pupil',
		comment: 'comment3',
	},
	{
		imgUrl: '/speaker-3.png',
		alt: 'Huzayfa A.',
		name: 'Huzayfa A.',
		role: 'pupil',
		comment: 'comment4',
	},
]

export const footerNavigations = [
	{
		title: 'webSite',
		children: [
			{
				title: 'home',
				link: '/',
			},
			{
				title: 'courses',
				link: '/courses',
			},
			{
				title: 'faq',
				link: '/faq',
			},
		],
	},
	{
		title: 'information',
		children: [
			{
				title: 'aboutUs',
				link: '/about-us',
			},
			{
				title: 'terms',
				link: '/about-us',
			},
			{
				title: 'privacy',
				link: '/about-us',
			},
		],
	},
	{
		title: 'locations',
		children: [
			{
				title: 'location',
				link: 'https://www.google.com/maps',
			},
			{
				title: 'phone',
				link: 'tel:+998997020088',
			},
			{
				title: 'email',
				link: 'mailto:info@eduon.uz',
			},
		],
	},
]

export const socialMedia = [
	{
		icon: 'bxl-instagram',
		alt: 'instagramm link',
		link: 'https://www.instagram.com/ravshanbekovvb',
	},
	{
		icon: 'bxl-telegram',
		alt: 'telegram link',
		link: 'https://t.me/ravshanbekovvb',
	},
	{
		icon: 'bxl-facebook',
		alt: 'facebook link',
		link: 'https://www.facebook.com/',
	},
	{
		icon: 'bxl-youtube',
		alt: 'youtube link',
		link: 'https://www.youtube.com/',
	},
]

export const categories = [
	{
		title: 'all',
	},
	{
		title: 'free',
	},
	{
		title: 'bests',
	},
	{
		title: 'marketing',
	},
	{
		title: 'programming',
	},
	{
		title: 'business',
	},
	{
		title: 'religion',
	},
	{
		title: 'foreignLang',
	},
	{
		title: 'management',
	},
]

export const aboutUs = [
	{
		title: 'rules',
		subtitle: `rules1`,
	},
	{
		title: 'terms',
		children: [
			{
				title: 'terms1',
				description: 'terms2',
			},
			{
				title: 'terms3',
			},
		],
	},
	{
		title: 'agreement',
		children: [
			{
				title: 'agreement1',
			},
			{
				title: 'agreement2',
			},
			{
				title: 'agreement3',
			},
		],
	},
	{
		title: 'side',
		children: [
			{
				title: 'spiker',
				description: 'spiker1',
			},
			{
				title: 'spiker2',
				description: 'spiker3',
			},
			{
				title: 'spiker4',
				description: 'spiker5',
			},
		],
	},
	{
		title: 'policy',
		children: [
			{
				title: 'policy1',
				description: 'policy2',
			},
			{
				title: 'policy3',
				description: 'policy4',
			},
		],
	},
	{
		title: 'pricing',
		subtitle: 'pricing1',
	},
	{
		title: 'pricing2',
		children: [
			{
				title: 'pricing3',
				description: 'pricing4',
			},
			{
				title: 'pricing5',
				description: 'pricing6',
			},
			{
				title: 'pricing7',
				description: 'pricing8',
			},
		],
	},
	{
		title: 'trademark',
		children: [
			{
				title: 'trademark1',
				description: 'trademark2',
			},
			{
				title: 'trademark3',
				description: 'trademark4',
			},
		],
	},
	{
		title: 'delete',
		subtitle: 'delete1',
	},
	{
		title: 'term',
		children: [
			{
				title: 'term1',
				description: 'term2',
			},
			{
				title: 'term3',
				description: 'term4',
			},
			{
				title: 'term5',
				description: 'term6',
			},
		],
	},
	{
		title: 'term7',
		subtitle: 'term8',
	},
]
