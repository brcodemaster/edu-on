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
	{
		title: 'English',
		label: 'Eng',
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
		imgUrl: '/courses-photo-5.png',
		alt: 'Blog',
		labelImg: '/courses-label-5.png',
		labelAlt: 'label5',
		title: 'Blog yuritishni 0 dan o’rganamiz. Amaliy',
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
		title: 'UX/UI dizayn. Figmada boshlang’ich app dizayn',
		rating: 4.4,
		comments: 1548,
		views: 12445,
		price: 'Bepul',
	},
	{
		imgUrl: '/courses-photo-7.png',
		alt: 'SMM',
		labelImg: '/courses-label-7.png',
		labelAlt: 'label7',
		title: 'SMM. Boshlang‘ich smm va intensiv dizayn',
		rating: 3.9,
		comments: 114588,
		views: 214558,
		price: 'Bepul',
	},
	{
		imgUrl: '/courses-photo-8.png',
		alt: 'English',
		labelImg: '/courses-label-8.png',
		labelAlt: 'label8',
		title: 'Academic english. Upper intermediate level',
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
		title: 'Telegram bot haqida qisqacha. Kirish',
		rating: 4.7,
		comments: 6591,
		views: 45478,
		price: 'Bepul',
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

export const footerNavigations = [
	{
		title: 'Veb Sayt',
		children: [
			{
				title: 'Bosh Sahifa',
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
		],
	},
	{
		title: "Ma'lumotlar",
		children: [
			{
				title: 'Biz haqimizda',
				link: '/about-us',
			},
			{
				title: 'Foydalanish shartlari',
				link: '/rules',
			},
			{
				title: 'Privacy & Policy',
				link: '/privacy-and-policy',
			},
		],
	},
	{
		title: 'Manzillar',
		children: [
			{
				title: "Toshkent sh. Yakkasaroy t. Shota Rustaveli 1-tor ko'chasi, 6-uy",
				link: 'https://www.google.com/maps',
			},
			{
				title: '+998 99 702 00 88',
				link: 'tel:+998997020088',
			},
			{
				title: 'Info@eduon.uz',
				link: 'mailto:info@eduon.uz',
			},
		],
	},
]

export const socialMedia = [
	{
		imgUrl: '/instagram.svg',
		alt: 'instagramm link',
		link: 'https://www.instagram.com/ravshanbekovvb',
	},
	{
		imgUrl: '/telegram.svg',
		alt: 'telegram link',
		link: 'https://t.me/ravshanbekovvb',
	},
	{
		imgUrl: '/facebook.svg',
		alt: 'facebook link',
		link: 'https://www.facebook.com/',
	},
	{
		imgUrl: '/youtube.svg',
		alt: 'youtube link',
		link: 'https://www.youtube.com/',
	},
]

export const categories = [
	{
		title: 'Barchasi',
	},
	{
		title: 'Bepul',
	},
	{
		title: "Zo'rlari",
	},
	{
		title: 'Marketing',
	},
	{
		title: 'Dasturlash',
	},
	{
		title: 'Biznes',
	},
	{
		title: 'Diniy',
	},
	{
		title: 'Xotijiy tillar',
	},
	{
		title: 'Menejment',
	},
]

export const aboutUs = [
	{
		title: 'Umumiy qoidalar',
		subtitle: `EduOn platformasida spiker bo'lish uchun ro'yxatdan o'tganingizda, ushbu spiker shartlariga rioya qilishga rozilik bildirasiz. Spiker sifatida siz to'g'ridan-to'g'ri EduOn, (O'zbekistondagi ta’lim platformasi) bilan shartnoma tuzasiz. EduOn sizning veb sahifaga yuklangan shaxsiy ma’lumotlaringizni to’g’rilash yoki o’zgartirish huquqiga ega va har qanday holatda ham tarqalishidan himoya qilishni zimmasiga oladi. Kompaniya kontentni himoyalash maqsadida undan nusxa ko’chirish, yuklab olish va tarqatish holatlarini qat’iyan man etadi va veb sahifaga joylangan materiallar intellektual mulk agentligi tomonidan himoyalangan va EduOn ushbu mulk egasi hisoblanib undan foydalanish vakolatiga ega.`,
	},
	{
		title: 'Atamalar',
		children: [
			{
				title:
					'eduon.uz onlayn o’quv kursi bo’yicha xizmat ko’rsatish uchun tuzilgan mazkur shartnomada qo’llangan atamalar quyidagicha tushuniladi',
				description:
					" «Shartnoma» - eduon.uz onlayn o’quv platformasi bo’yicha xizmat ko’rsatiluvchi amaldagi ushbu ommaviy oferta tushuniladi.«Ariza» - Foydalanuvchining eduon.uzdagi shaxsiy kabineti, ro’yxatdan o’tgan elektron pochtasi orqali qilgan murojaatlari.«eduon.uz» - Bilim beruvchi va bilim oluvchilarni bog’lovchi onlayn platforma.«O’quv kursi» - Video, audio vizual, matn fayllar tarzida bitta mavzu va nom bilan birlashtirilgan o’quv materiallarining to’plami. O’quv kurslar tavsifi saytda taqdim etiladi. O’quv kurslari tarkibiy o’zgartirib borilishi mumkin.«Shaxsiy kabinet» - Foydalanuvchining eduon.uz saytida ro’yxatdan o’tishi natijasida shakllangan, himoyalangan sahifalar to’plami. Oferta shartlari doirasida sayt funksiyalaridan foydalanishi mumkin bo’lgan sahifa. Shaxsiy kabinetga kirish foydalanuvchining saytda kirishda ko’rsatgan ma’lumotlari (login va parol) asosida amalga oshiriladi.«Tomonlar» - Foydalanuvchi va eduon.uz xizmati.«Hisob» - o’rnatilgan xizmat va topshirilgan mahsulot (o’quv materiallari) haqini to'lash uchun taqdim etilgan, shaxsiy kabinetdan yoki foydalanuvchining ro'yxatdan o’tish vaqtidagi elektron pochtasiga yuborilgan to’lov xabarnomasi.«Xizmatlar» - eduon.uz saytida dasturlashni o’rgatish bo’yicha o’quv materiallarini onlayn taqdim etish va shu sayt orqali ko’rsatiladigan boshqa xizmatlar.2.2. Atamalar bo’yicha tushunmovchilik yuzaga kelganda O’zbekiston Respublikasining amaldagi qonunlari va Internetning texnik talablariga muvofiq hal qilinadi",
			},
			{
				title:
					'Atamalar bo’yicha tushunmovchilik yuzaga kelganda O’zbekiston Respublikasining amaldagi qonunlari va Internetning texnik talablariga muvofiq hal qilinadi.',
			},
		],
	},
	{
		title: 'Shartnoma tuzish tartibi',
		children: [
			{
				title:
					'O’zbekiston Respublikasi Fuqarolik Kodeksining 370-moddasiga asosan foydalanuvchi tomonidan quyidagi harakatlarning amalga oshirilishi Mazkur taklifni to’laligicha qabul qilish hisoblanadi:',
			},
			{
				title: 'eduon.uz saytida ro’yxatdan o’tish',
			},
			{
				title: 'Tanlagan o’quv kursi uchun to’lovni amalga oshirish.',
			},
		],
	},
	{
		title: 'Tomonlarning huquq va majburiyatlari',
		children: [
			{
				title: 'Spikerning majburiyatlari',
				description:
					"Spiker sifatida siz o'zingiz joylashtirgan barcha kontent uchun, shu jumladan ma'ruzalar, viktorinalar, kodlash mashqlari, amaliy mashg'ulotlar, topshiriqlar, manbalar, javoblar, kursga kirish sahifasi kontenti va e'lonlari (\"Taqdim etilgan kontent\") uchun javobgarsiz.",
			},
			{
				title: 'Siz quyidagilarni taqdim etasiz va kafolat berasiz:',
				description:
					"Sizning kontentingiz har qanday uchinchi tomonning intellektual mulk huquqlarini buzmaydi yoki o'zlashtirmaydi. Siz o'zingizning taqdim etilgan kontentingiz va xizmatlardan foydalanish orqali siz taklif qilayotgan xizmatlarni o'rgatish va taklif qilish uchun kerakli malaka, ma'lumot va tajribaga (shu jumladan ta'lim, o'qitish, bilim va mahorat to'plamlariga) egasiz.Siz o'zingizning faoliyat sohangiz standartlariga va umuman ko'rsatma xizmatlariga mos keladigan xizmat sifatini ta'minlaysiz.",
			},
			{
				title: 'Siz shunday qilmasligingizga kafolat berasiz:',
				description:
					"Har qanday noo'rin, haqoratli, irqchi, nafratlanuvchi, seksistik, pornografik, yolg'on, chalg'ituvchi, noto'g'ri, yoki tuhmat qilingan kontent yoki ma'lumotlarni joylashtirish yoki taqdim etish. Xizmatlar orqali yoki biron bir foydalanuvchiga istalgan yoki ruxsatsiz reklama, reklama materiallari, keraksiz pochta xabarlari, spam yoki boshqa iltimosnoma shakllarini (tijorat yoki boshqa) yuborish yoki uzatish.Xizmatlardan, o'quvchilarga o'qitish xizmatlarini ko'rsatishdan boshqa maqsadlar uchun foydalanish. Boshqa shaxsni taqlid qilish yoki boshqa shaxsning hisob raqamiga ruxsatsiz kirish huquqini olish. Boshqa spikerlarga o'zlarining xizmatlarini yoki kurslarini taqdim etishlariga aralashish yoki boshqa yo'l bilan to'sqinlik qilish. EduOn resurslaridan, shu jumladan qo'llab-quvvatlash xizmatlaridan suiiste'mol qilish.",
			},
		],
	},
	{
		title: 'Ishonch va havsizlik',
		children: [
			{
				title: 'Ishonch va xavfsizlik siyosati',
				description:
					"Biz kurslarni olib tashlash, to'lovlarni to'xtatib turish va / yoki spikerlarni har qanday sababga ko'ra har qanday vaqtda, oldindan ogohlantirmasdan, shu jumladan quyidagi hollarda olib tashlash huquqini o'zida saqlab qolamiz: o'qituvchi yoki kurs bizning siyosatimizga yoki qonuniy shartlariga (shu jumladan, foydalanish shartlariga) mos kelmasa. Kurs bizning sifat standartlarimizdan pastroq bo'lsa yoki talabalar tajribasiga salbiy ta'sir ko'rsatsa. Spiker EduOn’ga salbiy ta'sir ko'rsatishi yoki EduOn’ni jamoat obro'siga, nafratiga, janjaliga yoki masxara qilishiga olib kelishi mumkin bo'lgan xatti-harakatlarni amalga oshirsa. Spiker EduOn siyosatini buzgan marketolog yoki boshqa biznes sheriklarining xizmatlarini jalb qilsa;",
			},
			{
				title: 'Boshqa foydalanuvchilar bilan aloqalar',
				description:
					"Spikerlar talabalar bilan to'g'ridan-to'g'ri shartnomaviy munosabatlarga ega emaslar, shuning uchun siz talabalar to'g'risida faqatgina xizmatlar orqali sizga taqdim etiladigan ma'lumotlardir. Siz olgan ma'lumotlaringizdan EduOn platformasida o'sha talabalarga o'z xizmatlaringizni ko'rsatishdan boshqa maqsadda foydalanmasligingizga va qo'shimcha shaxsiy ma'lumotlar so'ramasligingizga yoki talabalarning shaxsiy ma'lumotlarini EduOn platformasidan tashqarida saqlamasligingizga rozilik bildirasiz. Siz EduOn kompaniyasiga talabalarning shaxsiy ma'lumotlaridan foydalanish bilan bog'liq har qanday da'volardan tovon puli to'laysiz.",
			},
		],
	},
	{
		title: 'Narxlar',
		subtitle:
			'Narxlar EduOn tomonidan qat’iy o’rnatilgan 5$-200$ gacha bo’lgan tartibda belgilanishi lozim. Ushbu shartlar buzilishi ogohlantirish, keyinchalik tovon puli to’lanishiga olib keladi.',
	},
	{
		title: "To'lovlar",
		children: [
			{
				title: 'Daromad ulushi',
				description:
					'Daromad ulushlari EduOn ma’muriyati tomonidan 70% (Spiker) va 30% (EduOn) etib belgilangan.',
			},
			{
				title: "To'lovlarni qabul qilish",
				description:
					"Sizga o'z vaqtida to'lashimiz uchun siz Click yoki PayMe hisob qaydnomangizga egalik qilishingiz va sizning akkauntingiz bilan bog'liq to'g'ri elektron pochta xabarlarini bizga yetkazishingiz kerak. Biz aniqlangan firibgarliklar, intellektual mulk huquqlari buzilganligi yoki boshqa qonun hujjatlari buzilgan taqdirda biz mablag' to'lamaslik huquqini o'zimizda saqlab qolamiz.",
			},
			{
				title: 'Pulni qaytarish',
				description:
					"Spikerlar foydalanish shartlari bo'yicha pul mablag'lari qaytarib beriladigan operatsiyalardan daromad olmaydilar. Agar talaba biz tegishli spikerning to'lovini to'laganimizdan keyin pulni qaytarib berishni so'rasa, biz (1) o'qituvchiga yuborilgan keyingi to'lovdan qaytariladigan summani ushlab qolish huquqiga egamiz yoki (2) qo'shimcha to'lovlar olinmasa, spikerdan to'lovlar qaytariladigan summani qoplash uchun yetarli bo’lmasa, spikerdan qaytarilish zarur bo’lgan har qanday summani qaytarishni talab qilinadi.",
			},
		],
	},
	{
		title: 'Savdo belgisi',
		subtitle:
			'Quyida keltirilgan talablarga rioya qilgan holda, biz sizga vakolat bergan joyda bizning savdo belgilarimizdan foydalanishingiz mumkin.',
		children: [
			{
				title: 'Siz foydalanishingiz mumkin',
				description:
					"Biz e'lon qilishimiz mumkin bo'lgan har qanday ko'rsatmalarda biz sizga taqdim etadigan savdo belgilarimiz rasmlaridan foydalaning. Bizning savdo belgilarimizdan faqat EduOn kurslarini reklama qilish va sotish yoki EduOn’da ishtirok etish bilan bog'liq holda foydalaning. Sizdan foydalanishni to'xtatishni so'rasak, darhol bajaring",
			},
			{
				title: 'Siz qilmasligingiz kerak:',
				description:
					"Savdo belgilarimizdan chalg'ituvchi yoki kamsituvchi usulda foydalanish. Savdo belgilarimizdan sizning kurslaringiz yoki xizmatlaringizni qo'llab-quvvatlashimiz, homiylik qilishimiz yoki tasdiqlashimizni anglatadigan tarzda foydalanish. Savdo belgilarimizdan amaldagi qonunchilikka xilof ravishda yoki odobsiz, nomaqbul yoki noqonuniy mavzu yoki materiallar bilan bog'liq holda foydalanish.",
			},
		],
	},
	{
		title: "Akkauntingizni o'chirish",
		subtitle:
			"Akkauntingizni o'chirib tashlamasdan oldin biz sizga qolgan barcha rejalashtirilgan to'lovlarni amalga oshirish uchun tijorat maqsadlarida harakat qilamiz. Agar siz talabalar ilgari sizning kurslaringizga yozilgan bo'lsa, sizning ismingiz va yuborilgan kontentga sizning akkauntingiz o'chirilgandan so'ng ushbu talabalar kirish huquqini saqlab qolishlarini tushunasiz. Agar sizga yordam kerak bo'lsa yoki hisobingizni o'chirishda qiyinchiliklarga duch kelsangiz, bizni qo'llab-quvvatlash markazimiz orqali bog'lanishingiz mumkin.",
	},
	{
		title: 'Turli xil huquqiy atamalar:',
		children: [
			{
				title: 'Ushbu shartlarni yangilash',
				description:
					"Vaqti-vaqti bilan biz ushbu shartlarni amaliyotimizni aniqlashtirish yoki yangi yoki turli xil amaliyotlarni aks ettirish uchun yangilashimiz mumkin (masalan, yangi xususiyatlarni qo'shganda) va EduOn ushbu shartlarni o'zgartirish va / yoki o'zgartirish kiritish huquqini o'zida saqlab qoladi. Har qanday holatda. Agar biz biron bir muhim o'zgarishlarni amalga oshirsak, biz sizning akkauntingizda ko'rsatilgan elektron pochta manziliga xabar beramiz. O'zgartirishlar, agar boshqacha ko'rsatilmagan bo'lsa, e'lon qilingan kundan boshlab kuchga kiradi. O'zgarishlar kuchga kirgandan keyin bizning xizmatlarimizdan doimiy ravishda foydalanishingiz ushbu o'zgarishlarni qabul qilishingizni anglatadi. Har qanday qayta ko'rib chiqilgan shartlar avvalgi shartlarning o'rnini bosadi.",
			},
			{
				title: 'Tarjimalar',
				description:
					'Ushbu shartlarning o’zbek tilidan boshqa har qanday versiyasi qulaylik uchun taqdim etiladi.',
			},
			{
				title: 'Oramizdagi munosabatlar',
				description:
					"Siz va biz hech qanday qo'shma korxona, sheriklik, ish bilan ta'minlash, pudratchi yoki agentlik munosabatlari oramizda mavjud emasligiga qo'shilamiz.",
			},
		],
	},
	{
		title: "Biz bilan qanday bog'lanish mumkin",
		subtitle:
			"Biz bilan bog'lanishning eng yaxshi usuli - qo'llab-quvvatlash guruhimizga murojaat qilishdir. Sizning savollaringiz, tashvishlaringiz va bizning xizmatlarimiz haqidagi fikr-mulohazalaringizni eshitishga tayyormiz.",
	},
]
