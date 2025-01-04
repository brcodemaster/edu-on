import {
	Accordion,
	Categories,
	Section,
	Send,
	SwitchCase,
	TitleWithDescription,
} from '@/components/ui'
import { useTranslations } from 'next-intl'

export default function Page() {
	const t = useTranslations()

	return (
		<Section className='flex flex-col justify-center items-center pt-[136px] max-mobile:pt-5'>
			<div className='flex flex-col justify-center pb-9'>
				<TitleWithDescription
					size='xxl'
					title={t('most')}
					subTitle={t('answers')}
					description={t('send')}
				/>
				<div className='flex relative pt-9'>
					<input
						name='sendQuestion'
						type='text'
						className='rounded-[18px] bg-blue-secondary outline-none placeholder:text-gray-primary/20 placeholder:font-medium py-[24px] px-[30px] pr-[60px] w-full'
						placeholder={t('writeTheAnswer')}
					/>
					<Send className='absolute top-1/2 right-5 cursor-pointer active:scale-110 duration-300' />
				</div>
				<SwitchCase leftSide={t('slices')} rightSide={t('inTeachers')} className='mt-10' />
			</div>
			<div className='pt-9 w-full flex flex-col justify-center items-center border-t-2 border-gray-secondary'>
				<div className='flex justify-center items-center max-w-[800px] max-tablet:max-w-full'>
					<Categories />
				</div>
				<div className='pt-9 w-full flex flex-col gap-[18px]'>
					<Accordion text={t('pay')} description={t('answer')} />
					<Accordion text={t('credit')} description={t('answer')} />
					<Accordion text={t('onlinePay')} description={t('answer')} />
					<Accordion text={t('how')} description={t('answer')} />
					<Accordion text={t('forTime')} description={t('answer')} />
				</div>
			</div>
		</Section>
	)
}
