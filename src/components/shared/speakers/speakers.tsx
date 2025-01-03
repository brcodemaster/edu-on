import { Arrows, Button, Section, Title } from '@/components/ui'
import { Carousel } from './carousel'
import { useTranslations } from 'next-intl'

export const Speakers: React.FC = () => {
	const t = useTranslations()

	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p className='text-blue-primary text-[24px] font-bold'>{t('speakers')}</p>
				<Title size='xxl' className='w-full text-center max-tablet:text-[35px]'>
					{t('70')} <span className='text-black'>{t('specialists')}</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[36px] relative max-w-[860px] h-[330px] max-tablet:max-w-[430px] max-mobile:max-w-[220px]'>
				<div className='absolute left-0 top-0 bg-gradient-to-r from-white to-transparent w-4 h-full z-[5]' />
				<div className='absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-4 h-full z-[5]' />
				<Carousel />
				<Arrows top='50%' yPosition='-2rem' index={3} />
			</div>
			<Button variant='primary' className='mt-[36px]'>
				{t('allSpeakers')}
			</Button>
		</Section>
	)
}
