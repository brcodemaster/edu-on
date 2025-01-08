import { Arrows, Button, Section, Title } from '@/components/ui'
import { Carousel } from './carousel'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export const Courses: React.FC = () => {
	const t = useTranslations()

	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center max-tablet:pt-[70px]'>
			<div className='flex flex-col gap-4 justify-center items-center w-full max-tablet:gap-3 max-mobile:gap-4'>
				<p className='text-blue-primary text-[24px] font-bold uppercase max-tablet:text-[30px] max-tablet:leading-[20px] max-mobile:leading-[30px]'>
					{t('courses')}
				</p>
				<Title
					size='xxl'
					className='w-full text-center max-tablet:text-[45px] max-mobile:text-[35px] max-mobile:leading-[40px]'
				>
					{t('30')} <span className='text-black'>{t('industries')}</span>
				</Title>
				<Title
					size='xl'
					className='w-full text-center max-tablet:text-[45px] max-mobile:text-[35px] pt-0 leading-3'
				>
					{t('4000')} <span className='text-black'>{t('topCourses')}</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[76px] relative max-w-[890px] h-[230px] max-tablet:max-w-[440px] max-mobile:max-w-[220px] mt-3 max-tablet:pt-[50px] max-mobile:pt-[40px] max-mobile:max-h-[200px]'>
				<div className='absolute left-0 top-0 bg-gradient-to-r from-white to-transparent w-6 h-full z-[5]' />
				<div className='absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-6 h-full z-[5]' />
				<Carousel />
				<Arrows top='50%' yPosition='-2rem' index={4} />
			</div>
			<Button variant='primary' className='mt-[36px] max-tablet:mt-[10px] max-mobile:mt-[0]'>
				<Link href='/courses'>{t('all')}</Link>
			</Button>
		</Section>
	)
}
