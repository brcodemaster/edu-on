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
		id: 1,
		title: 'CRM',
		description:
			"Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Biznes egalari, top menejer, tadbirkorlar uchun Husan Mamasaidovning 'Strategik marketing' nomli intensiv kurs",
		author: {
			name: 'Husan M.',
			specialist: 'Biznes',
			imgUrl: '/speaker-2.png',
			alt: 'Husan M.',
			company: 'MFaktor',
			rating: 4.6,
			comments: 1011,
		},
		rating: 4.2,
		comments: 12965,
		views: 54112,
		price: 2750000,
		discountPrice: 0,
		outcomes: [
			'CRM sistema o’rnatilsa biznes qanday foydalar ko’rishini',
			'Sistemani qayerlardan o’rnatsa bo’lishini',
			'Nega CRM ga o’tish shart ekanligini',
			'CRM orqali LTVni hisoblash usullarini',
			'LTVni oshiruvchi bir qancha ishlovchi keyslarni',
		],
		audience: [
			'500,000$ aylanmaga ega bo’lgan tadbirkorlar',
			'CEO yoki kompaniyaning bosh marketologlari',
			'IT sohasidagi katta kompaniyalar CTO si',
			'Senior leveldagi dasturchilar',
		],
		contents: [
			'Strategik marketing (treyler)',
			'SWOT analiz qilish',
			'Ish muhiti',
			"Biznesda politika qanday bo'ladi",
			'Bir burun qoidasi',
			'Fundamental marketing',
			'Mijozlarimizning umrlik qiymati',
		],
		atCourse: {
			forEver: true,
			hours: 12.5,
			videos: 7,
			certificate: true,
		},
		imgUrl: '/courses-photo-1.png',
		alt: 'CRM in business',
	},
	{
		id: 2,
		title: 'business',
		description:
			'Biznes sherikchilik aloqalarida halollik va ishonch asosiy tamoyillar hisoblanadi. Ular muvaffaqiyatli va barqaror hamkorlikning kalitidir.',
		author: {
			name: 'Umirov B.',
			specialist: 'Biznes',
			imgUrl: '/speaker-3.png',
			alt: 'Umirov B.',
			rating: 3.4,
			comments: 2014,
		},
		rating: 4.7,
		comments: 54110,
		views: 114554,
		price: 0,
		discountPrice: 0,
		outcomes: [
			'Mijozlar va sheriklar bilan mustahkam hamkorlik o‘rnatish',
			'Halollik asosida kompaniyaning ishonchliligini oshirish',
			'Sheriklik kelishuvlarini samarali boshqarish',
			'Kompaniya faoliyatini uzoq muddatli rivojlantirish uchun tamoyillarni belgilash',
			'Qiyin vaziyatlarda yechim topishda halollik va adolatni saqlash',
		],
		audience: [
			'Katta biznes egalari va moliyaviy mas’ul shaxslar',
			'Marketing bo‘limi rahbarlari va strateglar',
			'IT kompaniyalarining texnik rahbarlari (CTO)',
			'O‘rta va yuqori lavozimdagi dasturchilar',
			'Kompaniyaning boshqaruv darajasidagi barcha xodimlar',
		],
		contents: [
			'Sheriklikda asosiy tamoyillar va strategiyalar',
			'Ishonchni shakllantirish va saqlash usullari',
			'Halollikning biznesdagi iqtisodiy qiymati',
			'Sheriklar bilan munosabatlarda kommunikatsiya qoidalari',
			'Samarali kelishuvlarni ishlab chiqish texnikasi',
			'Bozordagi o‘zaro manfaatli hamkorlik misollari',
			'LTV: mijozlar qiymatini oshirish va qo‘llash',
		],
		atCourse: {
			forEver: true,
			hours: 7,
			videos: 5,
			certificate: true,
		},
		imgUrl: '/courses-photo-2.png',
		alt: 'Business',
	},
	{
		id: 3,
		title: 'LTV',
		description:
			"Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Husan Mamasaidovning 'Strategik marketing' intensiv kursi orqali mijozlar bilan aloqalarni mustahkamlang va ularning umrlik qiymatini (LTV) oshirish usullarini o‘rganing.",
		author: {
			name: 'Hasan M.',
			specialist: 'Biznes',
			imgUrl: '/speaker-3.png',
			alt: 'Hasan M.',
			company: 'MFaktor',
			rating: 4.1,
			comments: 7544,
		},
		rating: 4.9,
		comments: 154,
		views: 1055,
		price: 12000000,
		discountPrice: 0,
		outcomes: [
			'Mijozlarni kompaniyaga uzoq muddatli sodiq qilish usullarini o‘rganish',
			'Mijozlarning umrlik qiymatini (LTV) ikki barobarga oshirish strategiyalari',
			'Qo‘shimcha sotuv va mijozlarni qayta jalb qilish texnikalari',
			'CRM tizimlari va shaxsiylashtirilgan yondashuv yordamida daromadni oshirish',
			'Mijozlarning ehtiyojlarini chuqur tahlil qilish va ularga mos yechimlar taklif qilish',
		],
		audience: [
			'Tadbirkorlar va biznes egalari',
			'Top menejerlar va marketing rahbarlari',
			'Mijozlar bilan ishlovchi bo‘lim boshliqlari',
			'Kompaniyasi uchun LTV ni oshirishni istovchi mutaxassislar',
			'CRM tizimlarini joriy qilayotgan yoki rivojlantirayotgan kompaniyalar',
		],
		contents: [
			'LTV: Umrlik qiymat tushunchasi va uni hisoblash usullari',
			'Mijozlarni sodiqlashtirish strategiyalari',
			'Qo‘shimcha sotuv (Upsell va Cross-sell) usullari',
			'CRM tizimlari va mijoz ma’lumotlarini boshqarish',
			'Mijoz ehtiyojlariga mos marketing yondashuvlari',
			'Daromadni oshirish uchun personalizatsiya texnikalari',
			'LTV va ROI o‘rtasidagi bog‘liqlik',
			'Qayta sotuv va mijozlar faolligini oshirish misollari',
		],
		atCourse: {
			forEver: true,
			hours: 5,
			videos: 8,
			certificate: true,
		},
		imgUrl: '/courses-photo-3.png',
		alt: 'LTV',
	},
	{
		id: 4,
		title: 'brending',
		description:
			"Kompaniya brendini yaratish va mustahkamlash bo‘yicha ko‘nikmalarni o‘rganing. Husan Mamasaidovning 'Brend yaratish va strategiya' kursi yordamida kompaniyaning brend aydentikasini va brendbook ni qanday yaratish kerakligini bilib oling.",
		author: {
			name: 'Qodirov A.',
			specialist: 'Brending va dizayn',
			imgUrl: '/speaker-4.png',
			alt: 'Qodirov A.',
			company: 'Figma U',
			rating: 4.1,
			comments: 8421,
		},
		rating: 4.9,
		comments: 5114,
		views: 17554,
		price: 6200000,
		discountPrice: 8600000,
		outcomes: [
			'Brend yaratishning asosiy tamoyillarini o‘rganish',
			'Brend aydentika va brendbook nima ekanligini tushunish',
			'Brendni yaratishda foydalanuvchi tajribasi va dizaynning o‘rni',
			'Brend strategiyasini ishlab chiqish va uni amaliyotga tadbiq etish',
			'Yuqori darajadagi brendni muvaffaqiyatli rivojlantirish uchun zaruriy vositalar',
		],
		audience: [
			'Brend yaratish va uni rivojlantirishni istagan tadbirkorlar',
			'Kompaniya marketing va brend menejerlari',
			'Marketing strategiyalari bo‘yicha mutaxassislar',
			'Dizaynerlar va vizual kommunikatsiya bo‘yicha rahbarlar',
			'IT va dizayn sohasidagi brendingga qiziqadigan rahbarlar va mutaxassislar',
		],
		contents: [
			'Brending asoslari va aydentika yaratish',
			'Brendbook: Yaxshi brendni qanday yaratish kerak',
			'Foydalanuvchi tajribasi va dizayn bilan brendni kuchaytirish',
			'Brend strategiyasining elementlari va rivojlanishi',
			'Raqobatchilarga qarshi brendni bozorga chiqarish usullari',
			'Brend va uning imidjini raqamli vositalar orqali boshqarish',
			'Brendning barqarorligi va uzoq muddatli muvaffaqiyatini ta’minlash',
		],
		atCourse: {
			forEver: true,
			hours: 48,
			videos: 34,
			certificate: true,
		},
		imgUrl: '/courses-photo-4.png',
		alt: 'CRM in business',
	},
	{
		id: 5,
		title: 'blog',
		description:
			'Blog yuritishni boshlash va uni muvaffaqiyatli boshqarish bo‘yicha amaliy kurs. Akmal P. tomonidan o‘rgatiladigan kursda blog yaratishdan tortib, uni rivojlantirish va monetizatsiyaga qadar bo‘lgan barcha jihatlar o‘rganiladi.',
		author: {
			name: 'Akmal P.',
			specialist: 'IT Biznes',
			imgUrl: '/speaker-1.png',
			alt: 'Akmal P.',
			company: 'Express24',
			rating: 4.7,
			comments: 12965,
		},
		rating: 4.9,
		comments: 1483,
		views: 4544,
		price: 1000000,
		discountPrice: 0,
		outcomes: [
			'Blog yaratish va boshqarish bo‘yicha amaliy ko‘nikmalarni o‘rganish',
			'Blogning o‘sishiga yordam beradigan marketing strategiyalarini joriy etish',
			'SEO va kontent yaratish asoslari',
			'Blog monetizatsiyasini amalga oshirish usullari',
			'O‘quvchilarga yo‘naltirilgan tarkib yaratish va uni optimallashtirish',
		],
		audience: [
			'Tadbirkorlar va bloggerlar',
			'Marketing bo‘limi rahbarlari va strateglar',
			'Content yaratish bo‘yicha mutaxassislar',
			'IT sohasidagi startaplar va onlayn xizmatlar egalariga',
			'Blog va media tarmoqlarda faoliyat yuritmoqchi bo‘lgan har qanday shaxs',
		],
		contents: [
			'Blog yaratishning bosqichlari va boshlang‘ich sozlamalar',
			'SEO asoslari va kontent yaratishning muhim jihatlari',
			'Blogni rivojlantirish va o‘quvchi jalb qilish strategiyalari',
			'Blogda monetizatsiya qilish usullari: reklama, affiliate marketing, va boshqalar',
			'Blog kontentini rejalashtirish va ilgari surish usullari',
			'Blog statistikalarini tahlil qilish va samarali optimizatsiya qilish',
			'Blogni muvaffaqiyatli boshqarish uchun zarur vositalar va platformalar',
		],
		atCourse: {
			forEver: true,
			hours: 48,
			videos: 34,
			certificate: true,
		},
		imgUrl: '/courses-photo-5.png',
		alt: 'Blog',
	},
	{
		id: 6,
		title: 'ux',
		description:
			"UX/UI dizayn asoslari va amaliyotlarini o‘rganing. Jahongir P. tomonidan o‘rgatiladigan kursda foydalanuvchi tajribasini yaratish va interfeys dizaynining eng yaxshi amaliyotlari haqida batafsil ma'lumot olasiz.",
		author: {
			name: 'Jahongir P.',
			specialist: 'Menejment va dizayn',
			imgUrl: '/speaker-4.png',
			alt: 'Jahongir P.',
			company: 'Cambridge',
			rating: 4.7,
			comments: 12965,
		},
		rating: 4.4,
		comments: 1548,
		views: 12445,
		price: 0,
		discountPrice: 0,
		outcomes: [
			'Foydalanuvchi tajribasini yaratish va samarali dizayn qilish',
			'UI/UX dizayn asoslarini o‘rganish va amaliyotga tadbiq etish',
			'Interfeys yaratishning eng yaxshi amaliyotlarini tushunish',
			'Vizuallar va foydalanuvchi navigatsiyasini optimallashtirish',
			'Web va mobil ilovalar uchun dizaynni yaratish',
		],
		audience: [
			'UX/UI dizayn sohasiga qiziqadiganlar',
			'Dizayn va foydalanuvchi tajribasini rivojlantirishni istagan kompaniyalar',
			'IT kompaniyalari va startaplar',
			'Dizayn bo‘yicha boshqaruvchilarga va rahbarlarga',
			'Interfeys dizaynerlari va web-dizaynerlar',
		],
		contents: [
			'UX/UI dizayn asoslari va foydalanuvchi tajribasi',
			'Web va mobil ilovalar uchun dizayn qilish',
			'Foydalanuvchi testlarini o‘tkazish va natijalarini tahlil qilish',
			'Interfeys dizaynning eng yaxshi amaliyotlari',
			'Foydalanuvchi interfeysini optimallashtirish va uning samaradorligini oshirish',
			'Responsive dizayn va interaktiv elementlar',
			'Design Thinking va prototip yaratish',
		],
		atCourse: {
			forEver: true,
			hours: 48,
			videos: 34,
			certificate: true,
		},
		imgUrl: '/courses-photo-6.png',
		alt: 'UX/UI',
	},
	{
		id: 7,
		title: 'SMM',
		description:
			'SMM (Social Media Marketing) ning boshlang‘ich va intensiv asoslarini o‘rganing. Ravshanbekov B. tomonidan o‘rgatiladigan kursda ijtimoiy tarmoqlarda muvaffaqiyatli marketing kampaniyalarini yaratish va yuritishning eng yaxshi amaliyotlari haqida bilib olasiz.',
		author: {
			name: 'Ravshanbekov B.',
			specialist: 'Menejment va Marketing',
			imgUrl: '/speaker-5.png',
			alt: 'Ravshanbekov B.',
			company: 'Cambridge',
			rating: 5.0,
			comments: 16842,
		},
		rating: 5,
		comments: 8424,
		views: 16879,
		price: 0,
		discountPrice: 0,
		outcomes: [
			'Ijtimoiy tarmoqlarda muvaffaqiyatli marketing kampaniyalarini yaratish',
			'SMM strategiyalarini ishlab chiqish va amalga oshirish',
			'Brand awareness va engagement oshirish uchun samarali usullar',
			'Targeting va audience analysis asoslarini tushunish',
			'Instagram, Facebook, TikTok kabi platformalarda reklama yaratish',
		],
		audience: [
			'Marketing va SMM bo‘yicha boshlovchilar',
			'Biznes egalari va kompaniyalar rahbarlari',
			'Digital marketing bo‘yicha mutaxassislar',
			'Ijtimoiy tarmoqlarda brendni rivojlantirishni istaganlar',
			'Startaplar va ijtimoiy tarmoqda faoliyat yuritayotgan kompaniyalar',
		],
		contents: [
			'SMM asoslari: strategiya va maqsadlar',
			'Target audience aniqlash va ularni jalb qilish',
			'Instagram, Facebook, TikTok marketing amaliyotlari',
			'Kontent rejalashtirish va yaratilishi',
			'Engagement oshirish va reklama tahlili',
			'SMM analytics va ROI hisoblash',
			'Influencer marketing va brend hamkorliklari',
		],
		atCourse: {
			forEver: true,
			hours: 48,
			videos: 34,
			certificate: true,
		},
		imgUrl: '/courses-photo-7.png',
		alt: 'SMM',
	},
	{
		id: 8,
		title: 'english',
		description:
			'Biznes egalariga va menejerlarga mo‘ljallangan intensiv ingliz tili kursi. Bu kursda ingliz tilida samarali biznes muloqotini o‘rganasiz va kompaniya daromadlarini ikki karra oshirishga yordam beradigan strategiyalarni kashf qilasiz.',
		author: {
			name: 'Fayzullayev Z.',
			specialist: 'Biznes Tilshunos',
			imgUrl: '/speaker-6.png',
			alt: 'Fayzullayev Z.',
			company: 'Alim',
			rating: 4.4,
			comments: 4879,
		},
		rating: 4.8,
		comments: 158,
		views: 954,
		price: 3000000,
		discountPrice: 4200000,
		outcomes: [
			"Biznesda ingliz tilida samarali muloqot qilish ko'nikmalarini rivojlantirish",
			'Ingliz tilidagi biznes hujjatlarini tayyorlash',
			"Anglashuvda aniqlik va ishonchlilikni ta'minlash",
			'Global biznesda muvaffaqiyatli aloqalar o‘rnatish',
			'Xalqaro savdo va marketingda tilning ahamiyatini tushunish',
		],
		audience: [
			'500,000$ aylanmaga ega bo‘lgan tadbirkorlar',
			'CEO va kompaniyaning bosh marketologlari',
			'IT sohasidagi katta kompaniyalar CTO si',
			'Senior leveldagi dasturchilar',
			'Biznesdagi ingliz tilida muloqot qilishni o‘rganmoqchi bo‘lganlar',
		],
		contents: [
			'Biznes muloqoti uchun ingliz tilining asosiy iboralari',
			'SWOT analiz va biznes hujjatlarini ingliz tilida tuzish',
			'Strategik marketing va biznes atamalari',
			'Ingliz tilidagi biznes e-mail va xat yozish',
			'Global bozorda muvaffaqiyatli muloqot qilishning sirli strategiyalari',
			'Anglashuv va muzokaralar ko‘nikmalarini oshirish',
			'Fundamental biznes atamalari va inglizcha talqinlari',
		],
		atCourse: {
			forEver: true,
			hours: 48,
			videos: 34,
			certificate: true,
		},
		imgUrl: '/courses-photo-8.png',
		alt: 'English for Business',
	},
	{
		id: 9,
		title: 'telegramBot',
		description:
			'Telegram botlarni yaratish va biznes jarayonlarini avtomatlashtirishni o‘rganing. Ushbu kursda siz Telegram botlarini yaratishdan tortib, biznesni qo‘llab-quvvatlash va mijozlar bilan samarali aloqalar o‘rnatishgacha bo‘lgan barcha bosqichlarni o‘rganasiz.',
		author: {
			name: 'Unknown Q.',
			specialist: 'Targeting & Automation',
			imgUrl: '/speaker-7.png',
			alt: 'Unknown Q.',
			company: 'Vossh',
			rating: 4.1,
			comments: 8741,
		},
		rating: 4.7,
		comments: 6591,
		views: 45478,
		price: 0,
		discountPrice: 0,
		outcomes: [
			'Telegram bot yordamida biznes jarayonlarini avtomatlashtirish',
			'Botni mijozlar bilan aloqalar uchun yaratish va sozlash',
			'Bot orqali marketing va savdo jarayonlarini boshqarish',
			'Mijozlarga xizmat ko‘rsatishni yaxshilash',
			'Telegram botni integratsiyalash va maxsus funksiyalar yaratish',
		],
		audience: [
			'Tadbirkorlar va biznes egalari',
			'Marketing va savdo sohasidagi mutaxassislar',
			'IT sohasidagi dasturchilar va texnik xodimlar',
			'Telegram botlardan foydalanishni o‘rganmoqchi bo‘lganlar',
		],
		contents: [
			'Telegram bot yaratish uchun kerakli vositalar va resurslar',
			'Botning asosiy funktsiyalari va ularni sozlash',
			'Telegram API bilan ishlash',
			'Bot orqali marketing va reklama kampaniyalarini boshqarish',
			'Telegram botni biznesga moslashtirish va optimallashtirish',
			'Botni xavfsiz va samarali ishlatish usullari',
			'Praktik misollar va muvaffaqiyatli bot yaratish keyslari',
		],
		atCourse: {
			forEver: true,
			hours: 48,
			videos: 34,
			certificate: true,
		},
		imgUrl: '/courses-photo-9.png',
		alt: 'Telegram Bot for Business',
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
		link: '/religion',
		disabled: true,
	},
	{
		title: 'foreignLang',
		amountOfCourse: 146,
		icon: '/Chat.svg',
		alt: 'foreignLang',
		link: '/foreign-language',
		disabled: true,
	},
	{
		title: 'business',
		amountOfCourse: 27,
		icon: '/Work.svg',
		alt: 'business',
		link: '/business',
		disabled: true,
	},
	{
		title: 'management',
		amountOfCourse: 34,
		icon: '/Discovery.svg',
		alt: 'management',
		link: '/management',
		disabled: true,
	},
	{
		title: 'sale',
		amountOfCourse: 49,
		icon: '/Bag.svg',
		alt: 'sale',
		link: '/sale',
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
				link: '/terms-of-use',
			},
			{
				title: 'privacy',
				link: '/terms-of-use',
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
