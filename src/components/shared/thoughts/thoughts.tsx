import { Arrows, Button, Section, Title } from '@/components/ui'
import { Carousel } from './carousel'

export const Thoughts: React.FC = () => {
	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p className='text-blue-primary text-[20px] font-bold'>FIKRLAR</p>
				<Title size='xl' className='w-full text-center max-tablet:text-[35px]'>
					Ular biz haqimizda <span className='text-black'>nima fikrdalar</span>
				</Title>
			</div>
			<div
				className='flex justify-center items-center h-[278px] pt-[36px] relative max-w-[840px]
			max-tablet:max-w-[580px] max-mobile:max-w-[300px] px-4'
			>
				<Carousel />
				<Arrows top='35%' yPosition='-10px' index={5} />
			</div>
			<Button variant='primary' className='mt-[36px]'>
				Barchasi
			</Button>
		</Section>
	)
}
