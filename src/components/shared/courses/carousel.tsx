'use client'

import { courses } from '@/components/constants'
import { ActionButton } from '@/components/ui'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Carousel: React.FC = () => {
	return (
		<Swiper
			className='w-full h-full px-4'
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
							title={course.title}
							subTitle={`${course.amountOfCourse} ta kurs`}
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
