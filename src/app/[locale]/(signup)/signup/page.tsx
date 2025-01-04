import { Button, Section, SwitchCase } from '@/components/ui'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function Signup() {
	const t = useTranslations()

	return (
		<Section className='flex justify-center items-center font-[gilroy] min-h-screen w-full'>
			<div className='w-[600px] pt-10 flex flex-col gap-5 max-mobile:gap-4 max-mobile:pt-3'>
				<SwitchCase leftSide={t('learner')} rightSide={t('teacher')} className='pt-0' />
				<div className='flex flex-col w-full gap-3'>
					<input
						type='text'
						name='phone'
						className='bg-black/5 py-[27px] px-[30px] rounded-3xl placeholder:text-gray-primary outline-none placeholder:font-medium'
						placeholder={t('phone')}
						autoComplete='on'
					/>
					<input
						type='text'
						name='password'
						className='bg-black/5 py-[27px] px-[30px] rounded-3xl placeholder:text-gray-primary outline-none placeholder:font-medium'
						placeholder={t('password')}
						autoComplete='on'
					/>
				</div>
				<Button variant='primary' className='w-full' type='submit' id='recaptcha'>
					{t('signup')}
				</Button>
				<div>
					{t('doUhave')}
					<Link
						href='/login'
						className='text-blue-primary font-medium pl-1 hover:opacity-50 duration-300'
					>
						{t('signin')}
					</Link>
				</div>
			</div>
		</Section>
	)
}
