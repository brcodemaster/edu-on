import { Arrows, Button, Section, Title } from '@/components/ui'
import { Carousel } from './carousel'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export const Courses: React.FC = () => {
	const t = useTranslations()

	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p className='text-blue-primary text-[24px] font-bold uppercase'>{t('courses')}</p>
				<Title size='xxl' className='w-full text-center max-tablet:text-[35px]'>
					{t('30')} <span className='text-black'>{t('industries')}</span>
				</Title>
				<Title size='xl' className='w-full text-center max-tablet:text-[35px] pt-0 leading-3'>
					{t('4000')} <span className='text-black'>{t('topCourses')}</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[76px] relative max-w-[890px] h-[230px] max-tablet:max-w-[440px] max-mobile:max-w-[220px] mt-3'>
				<div className='absolute left-0 top-0 bg-gradient-to-r from-white to-transparent w-6 h-full z-[5]' />
				<div className='absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-6 h-full z-[5]' />
				<Carousel />
				<Arrows top='50%' yPosition='-2rem' index={4} />
			</div>
			<Button variant='primary' className='mt-[36px]'>
				<Link href='/courses'>{t('all')}</Link>
			</Button>
		</Section>
	)
}
