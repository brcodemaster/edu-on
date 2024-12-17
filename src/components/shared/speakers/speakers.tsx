import { Arrows, Button, Section, Title } from '@/components/ui'
import { Carousel } from './carousel'

export const Speakers: React.FC = () => {
	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p className='text-blue-primary text-[20px] font-bold'>Spikerlar</p>
				<Title size='xl' className='w-full text-center max-tablet:text-[35px]'>
					70 dan <span className='text-black'>ortiq mutaxasislar</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[36px] relative max-w-[850px] h-[330px] max-tablet:max-w-[430px] max-mobile:max-w-[220px]'>
				<div className='absolute left-0 top-0 bg-gradient-to-r from-white to-transparent w-10 h-full z-[5]' />
				<div className='absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-10 h-full z-[5]' />
				<Carousel />
				<Arrows top='50%' yPosition='-2rem' index={3} />
			</div>
			<Button variant='primary' className='mt-[36px]'>
				Barchasi
			</Button>
		</Section>
	)
}
