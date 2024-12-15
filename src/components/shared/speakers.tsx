import { speakers } from '@/components/constants'
import { ArrowLeft, ArrowRight, Button, CourseBlock, Section, Title } from '@/components/ui'
import { SpeakerBlock } from '../ui/speaker-block'

export const Speakers: React.FC = () => {
	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p className='text-blue-primary text-[20px] font-bold'>Spikerlar</p>
				<Title size='xl' className='w-full text-center max-tablet:text-[35px]'>
					70 dan <span className='text-black'>ortiq mutaxasislar</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[36px] relative w-full'>
				<ArrowLeft className='absolute top-1/4 -left-10 max-mobile:-left-7' />
				<div className='max-w-[650px] h-[300px] max-tablet:max-w-[470px] max-mobile:max-w-[150px] inline-flex items-start justify-between gap-[34px] w-full overflow-x relative'>
					{speakers &&
						speakers.map(speaker => (
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
						))}
				</div>
				<ArrowRight className='absolute top-1/4 -right-10 max-mobile:-right-7' />
			</div>
			<Button variant='primary' className='mt-[36px]'>
				Barchasi
			</Button>
		</Section>
	)
}
