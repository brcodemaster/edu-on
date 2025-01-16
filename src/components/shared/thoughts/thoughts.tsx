import { Arrows, Section, Title } from '@/components/ui'
import { Carousel } from './carousel'
import { useTranslations } from 'next-intl'

export const Thoughts: React.FC = () => {
	const t = useTranslations()

	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center max-tablet:pt-[70px]'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p className='text-blue-primary text-[24px] font-bold uppercase max-tablet:leading-3 max-tablet:text-[30px]'>
					{t('thoughts')}
				</p>
				<Title size='xxl' className='w-full text-center max-tablet:text-[35px]'>
					{t('they')} <span className='text-black'>{t('aboutUs')}</span>
				</Title>
			</div>
			<div
				className='flex justify-center items-center mt-[36px] h-[235px] relative max-w-[870px]
			max-tablet:max-w-[580px] max-mobile:max-w-[310px] px-6'
			>
				<div className='absolute left-6 top-0 bg-gradient-to-r from-white to-transparent w-4 h-full z-[5]' />
				<div className='absolute right-6 top-0 bg-gradient-to-l from-white to-transparent w-4 h-full z-[5]' />
				<Carousel />
				<Arrows top='50%' yPosition='-10px' index={5} />
			</div>
		</Section>
	)
}
