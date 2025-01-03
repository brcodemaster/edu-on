import { Arrows, Button, Section, Title } from '@/components/ui'
import { Carousel } from './carousel'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export const TopCourses: React.FC = () => {
	const t = useTranslations()

	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center'>
			<div className='flex gap-4 justify-center w-full'>
				<Title size='xxl' className='w-full text-center'>
					{t('top')} <span className='text-black'>{t('courses')}</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[36px] relative max-w-[1144px] h-[395px] max-desktop:max-w-[858px] max-tablet:max-w-[572px] max-mobile:max-w-[286px]'>
				<div className='absolute left-0 top-0 bg-gradient-to-r from-white to-transparent w-4 h-full z-[5]' />
				<div className='absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-4 h-full z-[5]' />
				<Carousel />
				<Arrows top='50%' yPosition='-20px' index={1} />
			</div>
			<Button variant='primary' className='mt-[36px]'>
				<Link href='/courses'>{t('all')}</Link>
			</Button>
		</Section>
	)
}
