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
			navigation={{ nextEl: '.swiper-button-next-1', prevEl: '.swiper-button-prev-1' }}
		>
			{newCourses &&
				newCourses.map(topCourse => (
					<SwiperSlide key={topCourse.title} className='w-[253px]'>
						<CourseBlock
							imgUrl={topCourse.imgUrl}
							alt={topCourse.alt}
							labelImg={topCourse.labelImg}
							labelAlt={topCourse.labelAlt}
							title={topCourse.title}
							comments={topCourse.comments}
							price={topCourse.price}
							discountPrice={topCourse.discountPrice}
							rating={topCourse.rating}
							views={topCourse.views}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	)
}
