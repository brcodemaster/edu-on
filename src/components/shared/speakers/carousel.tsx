'use client'

import { SkeletonSpeaker } from '@/components/ui'
import { SpeakerBlock } from '@/components/ui/speaker-block'
import { Api } from '@/services/api-client'
import { Speaker } from '@prisma/client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Carousel: React.FC = () => {
	const [speakers, setSpeakers] = useState<Speaker[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		Api.speakers
			.search()
			.then(data => setSpeakers(data))
			.catch(error => setError(error))
			.finally(() => setLoading(false))
	}, [])

	if (!error) {
		console.log('Ошибка при поиске учителей: ' + error)

		return (
			<div className='bg-red-500 text-white font-medium w-[200px] h-auto text-center'>Error</div>
		)
	}

	return (
		<Swiper
			className='w-full h-full px-5 max-mobile:px-4'
			loop={false}
			spaceBetween={18}
			slidesPerView='auto'
			navigation={{ nextEl: '.swiper-button-next-3', prevEl: '.swiper-button-prev-3' }}
		>
			{loading &&
				Array.from({ length: 4 }, (_, ind) => (
					<SwiperSlide key={ind} className='w-[192px] mr-[18px]'>
						<SkeletonSpeaker />
					</SwiperSlide>
				))}
			{speakers &&
				speakers.map((speaker, ind) => (
					<SwiperSlide key={speaker.name} className='w-[192px]'>
						<SpeakerBlock
							name={speaker.name}
							lastName={speaker.lastName}
							specialist={speaker.teach}
							company={speaker.ownCompany}
							rating={speaker.rating}
							ratingCount={speaker.ratingCount}
							imgUrl={speaker.imgUrl}
							alt={String(speaker.name + speaker.lastName + ind)}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	)
}
