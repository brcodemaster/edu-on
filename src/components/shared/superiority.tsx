import { Button, Section, Title } from '@/components/ui'
import { useTranslations } from 'next-intl'

export const Superiority: React.FC = () => {
	const t = useTranslations()

	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center max-tablet:pt-[70px]'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p className='text-blue-primary text-[24px] font-bold uppercase max-tablet:leading-3'>
					{t('superiority')}
				</p>
				<Title size='xxl' className='w-full text-center max-tablet:text-[35px]'>
					{t('why')} <span className='text-black'>{t('eduon')}</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[36px] relative w-full max-tablet:pt-[30px] max-mobile:pt-[25px]'>
				<div className='max-w-[820px] h-[200px] max-tablet:h-[170px] max-tablet:max-w-[400px] max-mobile:max-w-[200px] max-mobile:h-[150px] inline-flex items-start justify-between gap-[34px] w-full overflow-x'>
					<div className='flex items-center gap-[18px] pt-9 max-mobile:flex-col'></div>
				</div>
			</div>
			<Button variant='primary' className='mt-[36px] max-tablet:mt-[30px] max-mobile:mt-[25px]'>
				{t('all')}
			</Button>
		</Section>
	)
}
