import { Arrows, Button, Section, Title } from '@/components/ui'
import { Carousel } from './carousel'

export const Courses: React.FC = () => {
	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p className='text-blue-primary text-[20px] font-bold'>KURSLAR</p>
				<Title size='xl' className='w-full text-center max-tablet:text-[35px]'>
					30 dan <span className='text-black'>ortiq soha va</span>
				</Title>
				<Title size='xl' className='w-full text-center max-tablet:text-[35px] pt-0 leading-3'>
					4000+ <span className='text-black'>kurslar</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[76px] relative max-w-[880px] h-[230px] max-tablet:max-w-[440px] max-mobile:max-w-[220px]'>
				<Carousel />
				<Arrows top='50%' yPosition='-2rem' index={4} />
			</div>
			<Button variant='primary' className='mt-[36px]'>
				Barchasi
			</Button>
		</Section>
	)
}
