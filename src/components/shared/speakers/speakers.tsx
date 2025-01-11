import { Arrows, Button, Section, Title } from '@/components/ui'
import { Carousel } from './carousel'
import { useTranslations } from 'next-intl'

export const Speakers: React.FC = () => {
	const t = useTranslations()

	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center max-tablet:pt-[70px]'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p className='text-blue-primary text-[24px] font-bold max-tablet:text-[30px] max-tablet:leading-[0px] max-mobile:leading-[20px] max-mobile:text-[26px] uppercase'>
					{t('speakers')}
				</p>
				<Title
					size='xxl'
					className='w-full text-center max-tablet:text-[45px] max-mobile:text-[40px] max-mobile:leading-[50px]'
				>
					{t('70')} <span className='text-black'>{t('specialists')}</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[36px] relative max-w-[860px] h-[330px] max-tablet:max-w-[430px] max-mobile:max-w-[220px] max-tablet:pt-[30px] max-mobile:pt-[25px]'>
				<div className='absolute left-0 top-0 bg-gradient-to-r from-white to-transparent w-4 h-full z-[5]' />
				<div className='absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-4 h-full z-[5]' />
				<Carousel />
				<Arrows top='54%' yPosition='-20px' index={3} />
			</div>
			<Button variant='primary' className='mt-[36px] max-tablet:mt-[20px] max-mobile:mt-[15px]'>
				{t('allSpeakers')}
			</Button>
		</Section>
	)
}
