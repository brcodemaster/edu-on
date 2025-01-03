import { Button, Section, Title } from '@/components/ui'
import { useTranslations } from 'next-intl'

export const Superiority: React.FC = () => {
	const t = useTranslations()

	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center'>
			<div className='flex flex-col gap-4 justify-center items-center w-full'>
				<p className='text-blue-primary text-[24px] font-bold uppercase'>{t('superiority')}</p>
				<Title size='xxl' className='w-full text-center max-tablet:text-[35px]'>
					{t('why')} <span className='text-black'>{t('eduon')}</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[36px] relative w-full'>
				<div className='max-w-[820px] h-[200px] max-tablet:max-w-[400px] max-mobile:max-w-[200px] inline-flex items-start justify-between gap-[34px] w-full overflow-x'>
					<div className='flex items-center gap-[18px] pt-9 max-mobile:flex-col'></div>
				</div>
			</div>
			<Button variant='primary' className='mt-[36px]'>
				{t('all')}
			</Button>
		</Section>
	)
}
