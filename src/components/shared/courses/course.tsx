'use client'

import { newCourses } from '@/components/constants'
import { CourseBlock, SkeletonCourse, SkeletonSpeaker, SpeakerBlock } from '@/components/ui'
import { Api } from '@/services/api-client'
import { CourseWithRelations } from '@/types/types'
import { Speaker } from '@prisma/client'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {
	id: string
	speaker: Speaker
}

export const Course: React.FC<Props> = ({ id, speaker }) => {
	const t = useTranslations()
	const [courses, setCourses] = useState<CourseWithRelations[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		Api.courses
			.search()
			.then(data => setCourses(data))
			.catch(err => setError(err.message))
			.finally(() => setLoading(false))
	}, [])

	if (error) {
		console.log('Ошибка при поиске учителей: ' + error)

		return (
			<div className='bg-red-500 text-white font-medium w-[200px] h-auto text-center'>Error</div>
		)
	}

	return (
		<>
			<p className='text-black text-3xl font-bold pb-6 max-mobile:pb-3 max-mobile:text-xl'>
				{t('speakerAndSimilar')}
			</p>
			<div className='flex items-center gap-5 h-full relative max-mobile:flex-col'>
				<div className='w-[192px]'>
					<SpeakerBlock
						name={speaker.name}
						lastName={speaker.lastName}
						specialist={speaker.teach}
						company={speaker.ownCompany}
						rating={speaker.rating}
						ratingCount={speaker.ratingCount}
						imgUrl={speaker.imgUrl}
						alt={speaker.name + String(speaker.id)}
						className='h-[350px] w-[192px] shrink-0 max-mobile:h-[280px]'
					/>
				</div>
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
						{loading &&
							Array.from({ length: 2 }, (_, ind) => (
								<SwiperSlide key={ind} className='w-[280px] h-full mr-[30px]'>
									<SkeletonCourse />
								</SwiperSlide>
							))}

						{courses &&
							courses.map(newCourse => (
								<SwiperSlide key={newCourse.title} className='w-[280px] h-full'>
									<CourseBlock
										id={newCourse.id}
										key={newCourse.title}
										imgUrl={newCourse.imgUrl}
										alt={newCourse.alt}
										title={newCourse.title}
										ratingCount={newCourse.ratingCount}
										price={newCourse.currentPrice}
										discountPrice={newCourse.discountPrice}
										rating={newCourse.rating}
										views={newCourse.courseParam.views}
									/>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</div>
		</>
	)
}
