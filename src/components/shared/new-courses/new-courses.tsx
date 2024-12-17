import { Arrows, Button, Section, Title } from '@/components/ui'
import { Carousel } from './carousel'

export const NewCourses: React.FC = () => {
	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center'>
			<div className='flex gap-4 justify-center w-full'>
				<Title size='xl' className='w-full text-center'>
					Yangi <span className='text-black'>kurslar</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[36px] relative max-w-[1144px] h-[395px] max-desktop:max-w-[858px] max-tablet:max-w-[572px] max-mobile:max-w-[286px]'>
				<div className='absolute left-0 top-0 bg-gradient-to-r from-white to-transparent w-10 h-full z-[5]' />
				<div className='absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-10 h-full z-[5]' />
				<Carousel />
				<Arrows top='50%' yPosition='-20px' index={2} />
			</div>
			<Button variant='primary' className='mt-[36px]'>
				Barchasi
			</Button>
		</Section>
	)
}
