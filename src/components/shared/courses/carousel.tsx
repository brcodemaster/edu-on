'use client'

import { courses } from '@/components/constants'
import { ActionButton } from '@/components/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslations } from 'next-intl'

export const Carousel: React.FC = () => {
	const t = useTranslations('button')

	return (
		<Swiper
			className='w-full h-full px-6 max-mobile:px-4'
			loop={false}
			spaceBetween={30}
			slidesPerView='auto'
			navigation={{ nextEl: '.swiper-button-next-4', prevEl: '.swiper-button-prev-4' }}
		>
			{courses &&
				courses.map(course => (
					<SwiperSlide key={course.title} className='w-[190px]'>
						<ActionButton
							key={course.title}
							title={t(`${course.title}`)}
							subTitle={`${course.amountOfCourse} ${t(`course`)}`}
							icon={course.icon}
							alt={course.alt}
							link={course.link}
							disabled={course.disabled}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	)
}
