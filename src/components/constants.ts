export const menus = [
	{
		title: 'Bosh sahifa',
		link: '/',
	},
	{
		title: 'Kurslar',
		link: '/courses',
	},
	{
		title: 'FAQ',
		link: '/faq',
	},
	{
		title: 'Biz haqimizda',
		link: '/about-us',
	},
]

export const languages = [
	{
		title: "O'zbekcha",
		label: "O'z",
	},
	{
		title: 'Русский',
		label: 'Rus',
	},
]

export const active = 'Bosh sahifa'

export const newCourses: Courses[] = [
	{
		imgUrl: '/courses-photo-1.png',
		alt: 'CRM in business',
		labelImg: '/courses-label-1.png',
		labelAlt: 'Abdukarimov',
		title: 'Biznesda CRM sistemadan foydalanish va o‘rnatish',
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
		title: 'Biznesda sherikchilik va halollik asoslari',
		rating: 4.7,
		comments: 54110,
		views: 114554,
		price: 'Bepul',
	},
	{
		imgUrl: '/courses-photo-3.png',
		alt: 'LTV',
		labelImg: '/courses-label-3.png',
		labelAlt: 'Razzoqov',
		title: 'LTV ni qanday qilib 2 karra uzaytirish mumkin?',
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
		title: 'Brending. Brend aydentika va brendbook',
		rating: 4.9,
		comments: 5114,
		views: 17554,
		price: 6200000,
		discountPrice: 8600000,
	},
	{
		imgUrl: '/courses-photo-1.png',
		alt: 'CRM',
		labelImg: '/courses-label-1.png',
		labelAlt: 'Abdukarimov',
		title: 'Biznesda CRM sistemadan foydalanish',
		rating: 4.2,
		comments: 12965,
		views: 54112,
		price: 2750000,
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
		title: 'Marketing',
		amountOfCourse: 72,
		icon: '/chart.svg',
		alt: 'Marketing course',
		link: '/marketing',
		disabled: false,
	},
	{
		title: 'Dasturlash',
		amountOfCourse: 124,
		icon: '/category.svg',
		alt: 'Programming course',
		link: '/programming',
		disabled: true,
	},
	{
		title: 'Dizayn',
		amountOfCourse: 62,
		icon: '/image.svg',
		alt: 'Design course',
		link: '/design',
		disabled: true,
	},
	{
		title: 'Din va Diyonat',
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
	role: "O'quvchi" | "O'qituvchi"
	comment: string
}[] = [
	{
		imgUrl: '/speaker-1.png',
		alt: 'Diyor Sh.',
		name: 'Diyor Sh.',
		role: "O'quvchi",
		comment:
			'Platforma juda qulay. O‘qitishda samaradorlikni oshiruvchi bir qacha funksiyalarga ega. Narxlar ham qimmat emas.',
	},
	{
		imgUrl: '/speaker-2.png',
		alt: 'Shavkat Hasan',
		name: 'Shavkat Hasan',
		role: "O'qituvchi",
		comment:
			'Platforma juda qulay. O‘qitishda samaradorlikni oshiruvchi bir qacha funksiyalarga ega. Narxlar ham qimmat emas.',
	},
	{
		imgUrl: '/speaker-3.png',
		alt: 'Huzayfa B.',
		name: 'Huzayfa B.',
		role: "O'quvchi",
		comment:
			'Platforma juda qulay. O‘qitishda samaradorlikni oshiruvchi bir qacha funksiyalarga ega. Narxlar ham qimmat emas.',
	},
	{
		imgUrl: '/speaker-3.png',
		alt: 'Huzayfa A.',
		name: 'Huzayfa A.',
		role: "O'quvchi",
		comment:
			'Platforma juda qulay. O‘qitishda samaradorlikni oshiruvchi bir qacha funksiyalarga ega. Narxlar ham qimmat emas.',
	},
]
