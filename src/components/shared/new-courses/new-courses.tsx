import { Arrows, Button, Section, Title } from '@/components/ui'
import { Carousel } from './carousel'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export const NewCourses: React.FC = () => {
	const t = useTranslations()

	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center max-tablet:pt-[70px]'>
			<div className='flex gap-4 justify-center w-full'>
				<Title
					size='xxl'
					className='w-full text-center max-mobile:text-[40px] max-mobile:leading-[65px]'
				>
					{t('new')} <span className='text-black'>{t('topCourses')}</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[36px] relative max-w-[1144px] h-[395px] max-desktop:max-w-[858px] max-tablet:max-w-[572px] max-mobile:max-w-[286px] max-tablet:pt-[30px] max-mobile:pt-[25px]'>
				<div className='absolute left-0 top-0 bg-gradient-to-r from-white to-transparent w-4 h-full z-[5]' />
				<div className='absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-4 h-full z-[5]' />
				<Carousel />
				<Arrows top='50%' yPosition='-20px' index={2} />
			</div>
			<Button variant='primary' className='mt-[36px] max-tablet:mt-[25px] max-mobile:mt-[20px]'>
				<Link href='/courses'>{t('all')}</Link>
			</Button>
		</Section>
	)
}
