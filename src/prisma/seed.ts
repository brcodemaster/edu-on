import { prisma } from './prisma-client'

async function up() {
	await prisma.speaker.createMany({
		data: [
			{
				name: 'Husan',
				lastName: 'Mamasaidov',
				teach: 'Biznes',
				imgUrl: '/speaker-1.png',
				ownCompany: 'MFaktor',
				rating: 4.6,
				ratingCount: 1011,
			},
			{
				name: 'Akmal',
				lastName: "Po'latov",
				teach: 'IT Biznes',
				imgUrl: '/speaker-2.png',
				ownCompany: 'Express24',
				rating: 4.7,
				ratingCount: 12965,
			},
			{
				name: 'Hasan',
				lastName: 'Mamasaidov',
				teach: 'Biznes',
				imgUrl: '/speaker-3.png',
				ownCompany: 'MFaktor',
				rating: 4.1,
				ratingCount: 7544,
			},
			{
				name: 'Jahongir',
				lastName: 'Pirimqulov',
				teach: 'Menejment',
				imgUrl: '/speaker-4.png',
				ownCompany: 'Cambridge',
				rating: 4.3,
				ratingCount: 6742,
			},
			{
				name: 'Alisher',
				lastName: 'Bobojonov',
				teach: 'Bloging',
				imgUrl: '/speaker-5.png',
				ownCompany: 'Bloggers House',
				rating: 3.7,
				ratingCount: 7435,
			},
			{
				name: 'Qodir',
				lastName: 'Sherbekov',
				teach: 'ux',
				imgUrl: '/speaker-6.png',
				ownCompany: 'UX Design',
				rating: 3.1,
				ratingCount: 1574,
			},
			{
				name: 'Laziz',
				lastName: 'Mirodilov',
				teach: 'SMM',
				imgUrl: '/speaker-7.png',
				ownCompany: 'SMM',
				rating: 3.0,
				ratingCount: 7352,
			},
			{
				name: 'Nodir',
				lastName: 'Mamatqulov',
				teach: 'English',
				imgUrl: '/speaker-8.png',
				ownCompany: 'U English',
				rating: 1.4,
				ratingCount: 150,
			},
			{
				name: 'Behruz',
				lastName: 'Alijonov',
				teach: 'Coding',
				imgUrl: '/speaker-9.png',
				ownCompany: 'Online Dev',
				rating: 4.8,
				ratingCount: 9475,
			},
		],
	})

	await prisma.course.createMany({
		data: [
			{
				title: 'CRM',
				description:
					"Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Biznes egalari, top menejer, tadbirkorlar uchun Husan Mamasaidovning 'Strategik marketing' nomli intensiv kurs",
				authorId: 1,
				rating: 4.2,
				ratingCount: 12965,
				currentPrice: 2750000,
				imgUrl: '/courses-photo-1.png',
				alt: 'CRM in business',
			},
			{
				title: 'business',
				description:
					'Biznes sherikchilik aloqalarida halollik va ishonch asosiy tamoyillar hisoblanadi. Ular muvaffaqiyatli va barqaror hamkorlikning kalitidir.',
				authorId: 2,
				rating: 4.7,
				ratingCount: 54110,
				currentPrice: 0,
				imgUrl: '/courses-photo-2.png',
				alt: 'Business',
			},
			{
				title: 'LTV',
				description:
					"Kompaniya daromadini 2 karraga ko'tarishni istaysizmi? Husan Mamasaidovning 'Strategik marketing' intensiv kursi orqali mijozlar bilan aloqalarni mustahkamlang va ularning umrlik qiymatini (LTV) oshirish usullarini o‘rganing.",
				authorId: 3,
				rating: 4.9,
				ratingCount: 154,
				currentPrice: 10000000,
				imgUrl: '/courses-photo-3.png',
				alt: 'LTV',
			},
			{
				title: 'brending',
				description:
					"Kompaniya brendini yaratish va mustahkamlash bo‘yicha ko‘nikmalarni o‘rganing. Husan Mamasaidovning 'Brend yaratish va strategiya' kursi yordamida kompaniyaning brend aydentikasini va brendbook ni qanday yaratish kerakligini bilib oling.",
				authorId: 4,
				rating: 4.9,
				ratingCount: 5114,
				currentPrice: 6200000,
				discountPrice: 8600000,
				imgUrl: '/courses-photo-4.png',
				alt: 'CRM in business',
			},
			{
				title: 'blog',
				description:
					'Blog yuritishni boshlash va uni muvaffaqiyatli boshqarish bo‘yicha amaliy kurs. Akmal P. tomonidan o‘rgatiladigan kursda blog yaratishdan tortib, uni rivojlantirish va monetizatsiyaga qadar bo‘lgan barcha jihatlar o‘rganiladi.',
				authorId: 5,
				rating: 4.9,
				ratingCount: 1483,
				currentPrice: 1000000,
				imgUrl: '/courses-photo-5.png',
				alt: 'Blog',
			},
			{
				title: 'ux',
				description:
					"UX/UI dizayn asoslari va amaliyotlarini o‘rganing. Jahongir P. tomonidan o‘rgatiladigan kursda foydalanuvchi tajribasini yaratish va interfeys dizaynining eng yaxshi amaliyotlari haqida batafsil ma'lumot olasiz.",
				authorId: 6,
				rating: 4.4,
				ratingCount: 1548,
				currentPrice: 0,
				imgUrl: '/courses-photo-6.png',
				alt: 'UX/UI',
			},
			{
				title: 'SMM',
				description:
					'SMM (Social Media Marketing) ning boshlang‘ich va intensiv asoslarini o‘rganing. Ravshanbekov B. tomonidan o‘rgatiladigan kursda ijtimoiy tarmoqlarda muvaffaqiyatli marketing kampaniyalarini yaratish va yuritishning eng yaxshi amaliyotlari haqida bilib olasiz.',
				authorId: 7,
				rating: 5.0,
				ratingCount: 8424,
				currentPrice: 0,
				imgUrl: '/courses-photo-7.png',
				alt: 'SMM',
			},
			{
				title: 'english',
				description:
					'Biznes egalariga va menejerlarga mo‘ljallangan intensiv ingliz tili kursi. Bu kursda ingliz tilida samarali biznes muloqotini o‘rganasiz va kompaniya daromadlarini ikki karra oshirishga yordam beradigan strategiyalarni kashf qilasiz.',
				authorId: 8,
				rating: 4.8,
				ratingCount: 158,
				currentPrice: 3000000,
				discountPrice: 4200000,
				imgUrl: '/courses-photo-8.png',
				alt: 'English for Business',
			},
			{
				title: 'telegramBot',
				description:
					'Telegram botlarni yaratish va biznes jarayonlarini avtomatlashtirishni o‘rganing. Ushbu kursda siz Telegram botlarini yaratishdan tortib, biznesni qo‘llab-quvvatlash va mijozlar bilan samarali aloqalar o‘rnatishgacha bo‘lgan barcha bosqichlarni o‘rganasiz.',
				authorId: 9,
				rating: 4.7,
				ratingCount: 6591,
				currentPrice: 0,
				imgUrl: '/courses-photo-9.png',
				alt: 'Telegram Bot for Business',
			},
		],
	})

	await prisma.course_Param.createMany({
		data: [
			{
				whatLanguage: 'uz',
				views: 54112,
				forEver: true,
				hours: 12,
				videos: 7,
				certificate: true,
				courseId: 1,
			},
			{
				whatLanguage: 'uz',
				views: 114554,
				forEver: true,
				hours: 7,
				videos: 5,
				certificate: false,
				courseId: 2,
			},
			{
				whatLanguage: 'uz',
				views: 1055,
				forEver: true,
				hours: 5,
				videos: 8,
				certificate: true,
				courseId: 3,
			},
			{
				whatLanguage: 'uz',
				views: 17554,
				forEver: true,
				hours: 48,
				videos: 34,
				certificate: true,
				courseId: 4,
			},
			{
				whatLanguage: 'uz',
				views: 4544,
				forEver: true,
				hours: 15,
				videos: 4,
				certificate: true,
				courseId: 5,
			},
			{
				whatLanguage: 'uz',
				views: 12445,
				forEver: true,
				hours: 24,
				videos: 14,
				certificate: false,
				courseId: 6,
			},
			{
				whatLanguage: 'uz',
				views: 16879,
				forEver: true,
				hours: 10,
				videos: 8,
				certificate: false,
				courseId: 7,
			},
			{
				whatLanguage: 'en',
				views: 954,
				forEver: true,
				hours: 9,
				videos: 5,
				certificate: true,
				courseId: 8,
			},
			{
				whatLanguage: 'uz',
				views: 45478,
				forEver: true,
				hours: 11,
				videos: 7,
				certificate: false,
				courseId: 9,
			},
		],
	})

	await prisma.comment.createMany({
		data: [
			{
				commentWriterImgUrl: '/speaker-1.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Zo'r gap yo'q",
				courseId: 1,
			},
			{
				commentWriterImgUrl: '/speaker-2.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Rahmat, kurs zo'r ekan",
				courseId: 1,
			},
			{
				commentWriterImgUrl: '/speaker-3.png',
				writtenBy: 'Otabek Nasrullayev',
				comment:
					"Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq emas ovoz. Lekin baribir zo'r !!!",
				courseId: 1,
			},
			{
				commentWriterImgUrl: '/speaker-4.png',
				writtenBy: 'Farrux Turgunov',
				comment:
					"Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash kerak ro'yxatdan qanday o'tish kerak shu bo'yicha xam instruksiya qilib joylab qo'ysangizlar nur ustiga a'lo nur bo'lar edi. Sababi birinchi kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim.",
				courseId: 1,
			},
			{
				commentWriterImgUrl: '/speaker-1.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Zo'r gap yo'q",
				courseId: 2,
			},
			{
				commentWriterImgUrl: '/speaker-2.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Rahmat, kurs zo'r ekan",
				courseId: 2,
			},
			{
				commentWriterImgUrl: '/speaker-3.png',
				writtenBy: 'Otabek Nasrullayev',
				comment:
					"Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq emas ovoz. Lekin baribir zo'r !!!",
				courseId: 2,
			},
			{
				commentWriterImgUrl: '/speaker-4.png',
				writtenBy: 'Farrux Turgunov',
				comment:
					"Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash kerak ro'yxatdan qanday o'tish kerak shu bo'yicha xam instruksiya qilib joylab qo'ysangizlar nur ustiga a'lo nur bo'lar edi. Sababi birinchi kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim.",
				courseId: 2,
			},
			{
				commentWriterImgUrl: '/speaker-1.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Zo'r gap yo'q",
				courseId: 3,
			},
			{
				commentWriterImgUrl: '/speaker-2.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Rahmat, kurs zo'r ekan",
				courseId: 3,
			},
			{
				commentWriterImgUrl: '/speaker-3.png',
				writtenBy: 'Otabek Nasrullayev',
				comment:
					"Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq emas ovoz. Lekin baribir zo'r !!!",
				courseId: 3,
			},
			{
				commentWriterImgUrl: '/speaker-4.png',
				writtenBy: 'Farrux Turgunov',
				comment:
					"Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash kerak ro'yxatdan qanday o'tish kerak shu bo'yicha xam instruksiya qilib joylab qo'ysangizlar nur ustiga a'lo nur bo'lar edi. Sababi birinchi kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim.",
				courseId: 3,
			},
			{
				commentWriterImgUrl: '/speaker-1.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Zo'r gap yo'q",
				courseId: 4,
			},
			{
				commentWriterImgUrl: '/speaker-2.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Rahmat, kurs zo'r ekan",
				courseId: 4,
			},
			{
				commentWriterImgUrl: '/speaker-3.png',
				writtenBy: 'Otabek Nasrullayev',
				comment:
					"Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq emas ovoz. Lekin baribir zo'r !!!",
				courseId: 4,
			},
			{
				commentWriterImgUrl: '/speaker-4.png',
				writtenBy: 'Farrux Turgunov',
				comment:
					"Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash kerak ro'yxatdan qanday o'tish kerak shu bo'yicha xam instruksiya qilib joylab qo'ysangizlar nur ustiga a'lo nur bo'lar edi. Sababi birinchi kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim.",
				courseId: 4,
			},
			{
				commentWriterImgUrl: '/speaker-1.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Zo'r gap yo'q",
				courseId: 5,
			},
			{
				commentWriterImgUrl: '/speaker-2.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Rahmat, kurs zo'r ekan",
				courseId: 5,
			},
			{
				commentWriterImgUrl: '/speaker-3.png',
				writtenBy: 'Otabek Nasrullayev',
				comment:
					"Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq emas ovoz. Lekin baribir zo'r !!!",
				courseId: 5,
			},
			{
				commentWriterImgUrl: '/speaker-4.png',
				writtenBy: 'Farrux Turgunov',
				comment:
					"Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash kerak ro'yxatdan qanday o'tish kerak shu bo'yicha xam instruksiya qilib joylab qo'ysangizlar nur ustiga a'lo nur bo'lar edi. Sababi birinchi kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim.",
				courseId: 5,
			},
			{
				commentWriterImgUrl: '/speaker-1.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Zo'r gap yo'q",
				courseId: 6,
			},
			{
				commentWriterImgUrl: '/speaker-2.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Rahmat, kurs zo'r ekan",
				courseId: 6,
			},
			{
				commentWriterImgUrl: '/speaker-3.png',
				writtenBy: 'Otabek Nasrullayev',
				comment:
					"Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq emas ovoz. Lekin baribir zo'r !!!",
				courseId: 6,
			},
			{
				commentWriterImgUrl: '/speaker-4.png',
				writtenBy: 'Farrux Turgunov',
				comment:
					"Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash kerak ro'yxatdan qanday o'tish kerak shu bo'yicha xam instruksiya qilib joylab qo'ysangizlar nur ustiga a'lo nur bo'lar edi. Sababi birinchi kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim.",
				courseId: 6,
			},
			{
				commentWriterImgUrl: '/speaker-1.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Zo'r gap yo'q",
				courseId: 7,
			},
			{
				commentWriterImgUrl: '/speaker-2.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Rahmat, kurs zo'r ekan",
				courseId: 7,
			},
			{
				commentWriterImgUrl: '/speaker-3.png',
				writtenBy: 'Otabek Nasrullayev',
				comment:
					"Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq emas ovoz. Lekin baribir zo'r !!!",
				courseId: 7,
			},
			{
				commentWriterImgUrl: '/speaker-4.png',
				writtenBy: 'Farrux Turgunov',
				comment:
					"Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash kerak ro'yxatdan qanday o'tish kerak shu bo'yicha xam instruksiya qilib joylab qo'ysangizlar nur ustiga a'lo nur bo'lar edi. Sababi birinchi kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim.",
				courseId: 7,
			},
			{
				commentWriterImgUrl: '/speaker-1.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Zo'r gap yo'q",
				courseId: 8,
			},
			{
				commentWriterImgUrl: '/speaker-2.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Rahmat, kurs zo'r ekan",
				courseId: 8,
			},
			{
				commentWriterImgUrl: '/speaker-3.png',
				writtenBy: 'Otabek Nasrullayev',
				comment:
					"Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq emas ovoz. Lekin baribir zo'r !!!",
				courseId: 8,
			},
			{
				commentWriterImgUrl: '/speaker-4.png',
				writtenBy: 'Farrux Turgunov',
				comment:
					"Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash kerak ro'yxatdan qanday o'tish kerak shu bo'yicha xam instruksiya qilib joylab qo'ysangizlar nur ustiga a'lo nur bo'lar edi. Sababi birinchi kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim.",
				courseId: 8,
			},
			{
				commentWriterImgUrl: '/speaker-1.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Zo'r gap yo'q",
				courseId: 9,
			},
			{
				commentWriterImgUrl: '/speaker-2.png',
				writtenBy: 'Abduvosiq Abdumalikov',
				comment: "Rahmat, kurs zo'r ekan",
				courseId: 9,
			},
			{
				commentWriterImgUrl: '/speaker-3.png',
				writtenBy: 'Otabek Nasrullayev',
				comment:
					"Juda yaxshi faqat videoda qandaydir shovqin bor juda tiniq emas ovoz. Lekin baribir zo'r !!!",
				courseId: 9,
			},
			{
				commentWriterImgUrl: '/speaker-4.png',
				writtenBy: 'Farrux Turgunov',
				comment:
					"Lekin yana bitta taklif bu shunday platformalaringizga kirganda qanday darsni boshlash kerak ro'yxatdan qanday o'tish kerak shu bo'yicha xam instruksiya qilib joylab qo'ysangizlar nur ustiga a'lo nur bo'lar edi. Sababi birinchi kirgan odam ozgina adashar ekan bu endi meni bir foydalanuvchi sifatida bergan taklifim.",
				courseId: 9,
			},
		],
	})

	await prisma.profit.createMany({
		data: [
			{
				profit: 'CRM sistema o’rnatilsa biznes qanday foydalar ko’rishini',
				courseId: 1,
			},
			{
				profit: 'Sistemani qayerlardan o’rnatsa bo’lishini',
				courseId: 1,
			},
			{
				profit: 'Nega CRM ga o’tish shart ekanligini',
				courseId: 1,
			},
			{
				profit: 'CRM orqali LTVni hisoblash usullarini',
				courseId: 1,
			},
			{
				profit: 'LTVni oshiruvchi bir qancha ishlovchi keyslarni',
				courseId: 1,
			},
			{
				profit: 'Mijozlar va sheriklar bilan mustahkam hamkorlik o‘rnatish',
				courseId: 2,
			},
			{
				profit: 'Halollik asosida kompaniyaning ishonchliligini oshirish',
				courseId: 2,
			},
			{
				profit: 'Sheriklik kelishuvlarini samarali boshqarish',
				courseId: 2,
			},
			{
				profit: 'Kompaniya faoliyatini uzoq muddatli rivojlantirish uchun tamoyillarni belgilash',
				courseId: 2,
			},
			{
				profit: 'Qiyin vaziyatlarda yechim topishda halollik va adolatni saqlash',
				courseId: 2,
			},
			{
				profit: 'Mijozlarni kompaniyaga uzoq muddatli sodiq qilish usullarini o‘rganish',
				courseId: 3,
			},
			{
				profit: 'Mijozlarning umrlik qiymatini (LTV) ikki barobarga oshirish strategiyalari',
				courseId: 3,
			},
			{
				profit: 'Qo‘shimcha sotuv va mijozlarni qayta jalb qilish texnikalari',
				courseId: 3,
			},
			{
				profit: 'CRM tizimlari va shaxsiylashtirilgan yondashuv yordamida daromadni oshirish',
				courseId: 3,
			},
			{
				profit:
					'Mijozlarning ehtiyojlarini chuqur tahlil qilish va ularga mos yechimlar taklif qilish',
				courseId: 3,
			},
			{
				profit: 'Brend yaratishning asosiy tamoyillarini o‘rganish',
				courseId: 4,
			},
			{
				profit: 'Brend aydentika va brendbook nima ekanligini tushunish',
				courseId: 4,
			},
			{
				profit: 'Brendni yaratishda foydalanuvchi tajribasi va dizaynning o‘rni',
				courseId: 4,
			},
			{
				profit: 'Brend strategiyasini ishlab chiqish va uni amaliyotga tadbiq etish',
				courseId: 4,
			},
			{
				profit: 'Yuqori darajadagi brendni muvaffaqiyatli rivojlantirish uchun zaruriy vositalar',
				courseId: 4,
			},
			{
				profit: 'Blog yaratish va boshqarish bo‘yicha amaliy ko‘nikmalarni o‘rganish',
				courseId: 5,
			},
			{
				profit: 'Blogning o‘sishiga yordam beradigan marketing strategiyalarini joriy etish',
				courseId: 5,
			},
			{
				profit: 'SEO va kontent yaratish asoslari',
				courseId: 5,
			},
			{
				profit: 'Blog monetizatsiyasini amalga oshirish usullari',
				courseId: 5,
			},
			{
				profit: 'O‘quvchilarga yo‘naltirilgan tarkib yaratish va uni optimallashtirish',
				courseId: 5,
			},
			{
				profit: 'Foydalanuvchi tajribasini yaratish va samarali dizayn qilish',
				courseId: 6,
			},
			{
				profit: 'UI/UX dizayn asoslarini o‘rganish va amaliyotga tadbiq etish',
				courseId: 6,
			},
			{
				profit: 'Interfeys yaratishning eng yaxshi amaliyotlarini tushunish',
				courseId: 6,
			},
			{
				profit: 'Vizuallar va foydalanuvchi navigatsiyasini optimallashtirish',
				courseId: 6,
			},
			{
				profit: 'Web va mobil ilovalar uchun dizaynni yaratish',
				courseId: 6,
			},
			{
				profit: 'Ijtimoiy tarmoqlarda muvaffaqiyatli marketing kampaniyalarini yaratish',
				courseId: 7,
			},
			{
				profit: 'SMM strategiyalarini ishlab chiqish va amalga oshirish',
				courseId: 7,
			},
			{
				profit: 'Brand awareness va engagement oshirish uchun samarali usullar',
				courseId: 7,
			},
			{
				profit: 'Targeting va audience analysis asoslarini tushunish',
				courseId: 7,
			},
			{
				profit: 'Instagram, Facebook, TikTok kabi platformalarda reklama yaratish',
				courseId: 7,
			},
			{
				profit: "Biznesda ingliz tilida samarali muloqot qilish ko'nikmalarini rivojlantirish",
				courseId: 8,
			},
			{
				profit: 'Ingliz tilidagi biznes hujjatlarini tayyorlash',
				courseId: 8,
			},
			{
				profit: "Anglashuvda aniqlik va ishonchlilikni ta'minlash",
				courseId: 8,
			},
			{
				profit: "Global biznesda muvaffaqiyatli aloqalar o'rnatish",
				courseId: 8,
			},
			{
				profit: 'Xalqaro savdo va marketingda tilning ahamiyatini tushunish',
				courseId: 8,
			},
			{
				profit: 'Telegram bot yordamida biznes jarayonlarini avtomatlashtirish',
				courseId: 9,
			},
			{
				profit: 'Botni mijozlar bilan aloqalar uchun yaratish va sozlash',
				courseId: 9,
			},
			{
				profit: 'Bot orqali marketing va savdo jarayonlarini boshqarish',
				courseId: 9,
			},
			{
				profit: 'Mijozlarga xizmat ko‘rsatishni yaxshilash',
				courseId: 9,
			},
			{
				profit: 'Telegram botni integratsiyalash va maxsus funksiyalar yaratish',
				courseId: 9,
			},
		],
	})

	await prisma.audience.createMany({
		data: [
			{
				audience: '500,000$ aylanmaga ega bo’lgan tadbirkorlar',
				courseId: 1,
			},
			{
				audience: 'CEO yoki kompaniyaning bosh marketologlari',
				courseId: 1,
			},
			{
				audience: 'IT sohasidagi katta kompaniyalar CTO si',
				courseId: 1,
			},
			{
				audience: 'Senior leveldagi dasturchilar',
				courseId: 1,
			},
			{
				audience: 'Katta biznes egalari va moliyaviy mas’ul shaxslar',
				courseId: 2,
			},
			{
				audience: 'Marketing bo‘limi rahbarlari va strateglar',
				courseId: 2,
			},
			{
				audience: 'IT kompaniyalarining texnik rahbarlari (CTO)',
				courseId: 2,
			},
			{
				audience: "O'rta va yuqori lavozimdagi dasturchilar",
				courseId: 2,
			},
			{
				audience: 'Kompaniyaning boshqaruv darajasidagi barcha xodimlar',
				courseId: 2,
			},
			{
				audience: 'Tadbirkorlar va biznes egalari',
				courseId: 3,
			},
			{
				audience: 'Top menejerlar va marketing rahbarlari',
				courseId: 3,
			},
			{
				audience: 'Mijozlar bilan ishlovchi bo‘lim boshliqlari',
				courseId: 3,
			},
			{
				audience: 'Kompaniyasi uchun LTV ni oshirishni istovchi mutaxassislar',
				courseId: 3,
			},
			{
				audience: 'CRM tizimlarini joriy qilayotgan yoki rivojlantirayotgan kompaniyalar',
				courseId: 3,
			},
			{
				audience: 'Brend yaratish va uni rivojlantirishni istagan tadbirkorlar',
				courseId: 4,
			},
			{
				audience: 'Kompaniya marketing va brend menejerlari',
				courseId: 4,
			},
			{
				audience: 'Dizaynerlar va vizual kommunikatsiya bo‘yicha rahbarlar',
				courseId: 4,
			},
			{
				audience: 'IT va dizayn sohasidagi brendingga qiziqadigan rahbarlar va mutaxassislar',
				courseId: 4,
			},
			{
				audience: 'Tadbirkorlar va bloggerlar',
				courseId: 5,
			},
			{
				audience: 'Marketing bo‘limi rahbarlari va strateglar',
				courseId: 5,
			},
			{
				audience: 'Content yaratish bo‘yicha mutaxassislar',
				courseId: 5,
			},
			{
				audience: 'IT sohasidagi startaplar va onlayn xizmatlar egalariga',
				courseId: 5,
			},
			{
				audience: 'Blog va media tarmoqlarda faoliyat yuritmoqchi bo‘lgan har qanday shaxs',
				courseId: 5,
			},
			{
				audience: 'UX/UI dizayn sohasiga qiziqadiganlar',
				courseId: 6,
			},
			{
				audience: 'Dizayn va foydalanuvchi tajribasini rivojlantirishni istagan kompaniyalar',
				courseId: 6,
			},
			{
				audience: "Dizayn bo'yicha boshqaruvchilarga va rahbarlarga",
				courseId: 6,
			},
			{
				audience: 'Interfeys dizaynerlari va web-dizaynerlar',
				courseId: 6,
			},
			{
				audience: 'Marketing va SMM bo‘yicha boshlovchilar',
				courseId: 7,
			},
			{
				audience: 'Biznes egalari va kompaniyalar rahbarlari',
				courseId: 7,
			},
			{
				audience: 'Ijtimoiy tarmoqlarda brendni rivojlantirishni istaganlar',
				courseId: 7,
			},
			{
				audience: 'Startaplar va ijtimoiy tarmoqda faoliyat yuritayotgan kompaniyalar',
				courseId: 7,
			},
			{
				audience: '500,000$ aylanmaga ega bo‘lgan tadbirkorlar',
				courseId: 8,
			},
			{
				audience: 'CEO va kompaniyaning bosh marketologlari',
				courseId: 8,
			},
			{
				audience: 'IT sohasidagi katta kompaniyalar CTO si',
				courseId: 8,
			},
			{
				audience: 'Senior leveldagi dasturchilar',
				courseId: 8,
			},
			{
				audience: 'Biznesdagi ingliz tilida muloqot qilishni o‘rganmoqchi bo‘lganlar',
				courseId: 8,
			},
			{
				audience: 'Tadbirkorlar va biznes egalari',
				courseId: 9,
			},
			{
				audience: 'Marketing va savdo sohasidagi mutaxassislar',
				courseId: 9,
			},
			{
				audience: 'IT sohasidagi dasturchilar va texnik xodimlar',
				courseId: 9,
			},
			{
				audience: "Telegram botlardan foydalanishni o‘rganmoqchi bo'lganlar",
				courseId: 9,
			},
		],
	})

	await prisma.content.createMany({
		data: [
			{
				content: 'Strategik marketing (treyler)',
				courseId: 1,
			},
			{
				content: 'SWOT analiz qilish',
				courseId: 1,
			},
			{
				content: 'Ish muhiti',
				courseId: 1,
			},
			{
				content: "Biznesda politika qanday bo'ladi",
				courseId: 1,
			},
			{
				content: 'Bir burun qoidasi',
				courseId: 1,
			},
			{
				content: 'Fundamental marketing',
				courseId: 1,
			},
			{
				content: 'Mijozlarimizning umrlik qiymati',
				courseId: 1,
			},
			{
				content: 'Sheriklikda asosiy tamoyillar va strategiyalar',
				courseId: 2,
			},
			{
				content: 'Ishonchni shakllantirish va saqlash usullari',
				courseId: 2,
			},
			{
				content: 'Halollikning biznesdagi iqtisodiy qiymati',
				courseId: 2,
			},
			{
				content: 'Sheriklar bilan munosabatlarda kommunikatsiya qoidalari',
				courseId: 2,
			},
			{
				content: 'Samarali kelishuvlarni ishlab chiqish texnikasi',
				courseId: 2,
			},
			{
				content: "Bozordagi o'zaro manfaatli hamkorlik misollari",
				courseId: 2,
			},
			{
				content: 'LTV: mijozlar qiymatini oshirish va qo‘llash',
				courseId: 2,
			},
			{
				content: 'LTV: Umrlik qiymat tushunchasi va uni hisoblash usullari',
				courseId: 3,
			},
			{
				content: 'Mijozlarni sodiqlashtirish strategiyalari',
				courseId: 3,
			},
			{
				content: 'Qo‘shimcha sotuv (Upsell va Cross-sell) usullari',
				courseId: 3,
			},
			{
				content: 'CRM tizimlari va mijoz ma’lumotlarini boshqarish',
				courseId: 3,
			},
			{
				content: 'Mijoz ehtiyojlariga mos marketing yondashuvlari',
				courseId: 3,
			},
			{
				content: "LTV va ROI o'rtasidagi bog‘liqlik",
				courseId: 3,
			},
			{
				content: 'Qayta sotuv va mijozlar faolligini oshirish misollari',
				courseId: 3,
			},
			{
				content: 'Brending asoslari va aydentika yaratish',
				courseId: 4,
			},
			{
				content: 'Brendbook: Yaxshi brendni qanday yaratish kerak',
				courseId: 4,
			},
			{
				content: 'Foydalanuvchi tajribasi va dizayn bilan brendni kuchaytirish',
				courseId: 4,
			},
			{
				content: 'Brend strategiyasining elementlari va rivojlanishi',
				courseId: 4,
			},
			{
				content: 'Raqobatchilarga qarshi brendni bozorga chiqarish usullari',
				courseId: 4,
			},
			{
				content: 'Brend va uning imidjini raqamli vositalar orqali boshqarish',
				courseId: 4,
			},
			{
				content: "Brendning barqarorligi va uzoq muddatli muvaffaqiyatini ta'minlash",
				courseId: 4,
			},
			{
				content: 'Blog yaratishning bosqichlari va boshlang‘ich sozlamalar',
				courseId: 5,
			},
			{
				content: 'SEO asoslari va kontent yaratishning muhim jihatlari',
				courseId: 5,
			},
			{
				content: "Blogni rivojlantirish va o'quvchi jalb qilish strategiyalari",
				courseId: 5,
			},
			{
				content: 'Blogda monetizatsiya qilish usullari: reklama, affiliate marketing, va boshqalar',
				courseId: 5,
			},
			{
				content: 'Blog kontentini rejalashtirish va ilgari surish usullari',
				courseId: 5,
			},
			{
				content: 'Blog statistikalarini tahlil qilish va samarali optimizatsiya qilish',
				courseId: 5,
			},
			{
				content: 'Blogni muvaffaqiyatli boshqarish uchun zarur vositalar va platformalar',
				courseId: 5,
			},
			{
				content: 'UX/UI dizayn asoslari va foydalanuvchi tajribasi',
				courseId: 6,
			},
			{
				content: 'Web va mobil ilovalar uchun dizayn qilish',
				courseId: 6,
			},
			{
				content: "Foydalanuvchi testlarini o'tkazish va natijalarini tahlil qilish",
				courseId: 6,
			},
			{
				content: 'Interfeys dizaynning eng yaxshi amaliyotlari',
				courseId: 6,
			},
			{
				content: 'Foydalanuvchi interfeysini optimallashtirish va uning samaradorligini oshirish',
				courseId: 6,
			},
			{
				content: 'Responsive dizayn va interaktiv elementlar',
				courseId: 6,
			},
			{
				content: 'Design Thinking va prototip yaratish',
				courseId: 6,
			},
			{
				content: 'SMM asoslari: strategiya va maqsadlar',
				courseId: 7,
			},
			{
				content: 'Target audience aniqlash va ularni jalb qilish',
				courseId: 7,
			},
			{
				content: 'Instagram, Facebook, TikTok marketing amaliyotlari',
				courseId: 7,
			},
			{
				content: 'Kontent rejalashtirish va yaratilishi',
				courseId: 7,
			},
			{
				content: 'Engagement oshirish va reklama tahlili',
				courseId: 7,
			},
			{
				content: 'SMM analytics va ROI hisoblash',
				courseId: 7,
			},
			{
				content: 'Influencer marketing va brend hamkorliklari',
				courseId: 7,
			},
			{
				content: 'Biznes muloqoti uchun ingliz tilining asosiy iboralari',
				courseId: 8,
			},
			{
				content: 'SWOT analiz va biznes hujjatlarini ingliz tilida tuzish',
				courseId: 8,
			},
			{
				content: 'Strategik marketing va biznes atamalari',
				courseId: 8,
			},
			{
				content: 'Ingliz tilidagi biznes e-mail va xat yozish',
				courseId: 8,
			},
			{
				content: 'Global bozorda muvaffaqiyatli muloqot qilishning sirli strategiyalari',
				courseId: 8,
			},
			{
				content: "Anglashuv va muzokaralar ko'nikmalarini oshirish",
				courseId: 8,
			},
			{
				content: 'Fundamental biznes atamalari va inglizcha talqinlari',
				courseId: 8,
			},
			{
				content: 'Telegram bot yaratish uchun kerakli vositalar va resurslar',
				courseId: 9,
			},
			{
				content: 'Botning asosiy funktsiyalari va ularni sozlash',
				courseId: 9,
			},
			{
				content: 'Telegram API bilan ishlash',
				courseId: 9,
			},
			{
				content: 'Bot orqali marketing va reklama kampaniyalarini boshqarish',
				courseId: 9,
			},
			{
				content: 'Telegram botni biznesga moslashtirish va optimallashtirish',
				courseId: 9,
			},
			{
				content: 'Botni xavfsiz va samarali ishlatish usullari',
				courseId: 9,
			},
			{
				content: 'Praktik misollar va muvaffaqiyatli bot yaratish keyslari',
				courseId: 9,
			},
		],
	})

	await prisma.category_Tags.createMany({
		data: [
			{
				tag: 'business',
				courseId: 1,
			},
			{
				tag: 'business',
				courseId: 2,
			},
			{
				tag: 'free',
				courseId: 2,
			},
			{
				tag: 'business',
				courseId: 3,
			},
			{
				tag: 'marketing',
				courseId: 3,
			},
			{
				tag: 'marketing',
				courseId: 4,
			},
			{
				tag: 'management',
				courseId: 5,
			},
			{
				tag: 'programming',
				courseId: 6,
			},
			{
				tag: 'free',
				courseId: 6,
			},
			{
				tag: 'marketing',
				courseId: 7,
			},
			{
				tag: 'free',
				courseId: 7,
			},
			{
				tag: 'foreignLang',
				courseId: 8,
			},
			{
				tag: 'programming',
				courseId: 9,
			},
			{
				tag: 'free',
				courseId: 9,
			},
		],
	})
}

async function down() {
	//Postgresql
	await prisma.$executeRaw`TRUNCATE TABLE "Speaker" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Audience" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Comment" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Content" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Course" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Course_Param" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Profit" RESTART IDENTITY CASCADE;`
	await prisma.$executeRaw`TRUNCATE TABLE "Category_Tags" RESTART IDENTITY CASCADE;`
}

async function main() {
	try {
		await down()
		await up()
	} catch (error) {
		console.log('Error on main: ' + error)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
