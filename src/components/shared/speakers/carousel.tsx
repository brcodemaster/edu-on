'use client'

import { speakers } from '@/components/constants'
import { SpeakerBlock } from '@/components/ui/speaker-block'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Carousel: React.FC = () => {
	return (
		<Swiper
			className='w-full h-full px-4'
			loop={false}
			spaceBetween={18}
			slidesPerView='auto'
			navigation={{ nextEl: '.swiper-button-next-3', prevEl: '.swiper-button-prev-3' }}
		>
			{speakers &&
				speakers.map(speaker => (
					<SwiperSlide key={speaker.name} className='w-[192px]'>
						<SpeakerBlock
							key={speaker.name}
							name={speaker.name}
							specialist={speaker.specialist}
							company={speaker.company}
							rating={speaker.rating}
							comments={speaker.comments}
							imgUrl={speaker.imgUrl}
							alt={speaker.alt}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	)
}
