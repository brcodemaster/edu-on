'use client'

import { newCourses } from '@/components/constants'
import { CourseBlock } from '@/components/ui'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Carousel: React.FC = () => {
	return (
		<Swiper
			className='w-full h-full px-4'
			loop={false}
			spaceBetween={30}
			slidesPerView='auto'
			navigation={{ nextEl: '.swiper-button-next-2', prevEl: '.swiper-button-prev-2' }}
		>
			{newCourses &&
				newCourses.map(newCourse => (
					<SwiperSlide key={newCourse.title} className='w-[253px]'>
						<CourseBlock
							key={newCourse.title}
							imgUrl={newCourse.imgUrl}
							alt={newCourse.alt}
							labelImg={newCourse.labelImg}
							labelAlt={newCourse.labelAlt}
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
	)
}
