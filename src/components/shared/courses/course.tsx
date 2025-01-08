'use client'

import { newCourses } from '@/components/constants'
import { CourseBlock, SpeakerBlock } from '@/components/ui'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'

const s = {
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
}

export const Course: React.FC = () => {
	const t = useTranslations()

	return (
		<>
			<p className='text-black text-3xl font-bold pb-6 max-mobile:pb-3 max-mobile:text-xl'>
				{t('speakerAndSimilar')}
			</p>
			<div className='flex items-center gap-5 h-full relative max-mobile:flex-col'>
				<SpeakerBlock
					name={s.author.name}
					imgUrl={s.author.imgUrl}
					alt={s.author.alt}
					comments={s.author.comments}
					company={s.author.company}
					rating={s.author.rating}
					specialist={s.author.specialist}
					className='h-[350px] w-[192px] shrink-0 max-mobile:h-[280px]'
				/>
				<div className='h-[350px] overflow-hidden max-mobile:w-full'>
					<div className='absolute left-[211px] max-mobile:left-0 top-0 bg-gradient-to-r from-white to-transparent w-6 h-full z-[5]' />
					<div className='absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-6 h-full z-[5]' />
					<Swiper
						className='w-full h-full px-5 max-mobile:px-4'
						loop={false}
						spaceBetween={18}
						slidesPerView='auto'
						navigation={{ nextEl: '.swiper-button-next-3', prevEl: '.swiper-button-prev-3' }}
					>
						{newCourses &&
							newCourses.map(newCourse => (
								<SwiperSlide key={newCourse.title} className='w-[280px] h-full'>
									<CourseBlock
										id={String(newCourse.id)}
										key={newCourse.title}
										imgUrl={newCourse.imgUrl}
										alt={newCourse.alt}
										title={newCourse.title}
										comments={newCourse.comments}
										price={newCourse.price}
										discountPrice={newCourse.discountPrice}
										rating={newCourse.rating}
										views={newCourse.views}
									/>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</div>
		</>
	)
}
