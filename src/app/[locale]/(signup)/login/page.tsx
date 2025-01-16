'use client'

import { Button, Section, SwitchCase } from '@/components/ui'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { ChangeEvent, useState } from 'react'

export default function Page() {
	const t = useTranslations()

	const [phone, setPhone] = useState('')
	const [pass, setPass] = useState('')

	return (
		<Section className='flex justify-center items-center font-[gilroy] min-h-screen w-full'>
			<div className='w-[600px] flex flex-col gap-5 max-mobile:gap-4'>
				<SwitchCase leftSide={t('learner')} rightSide={t('teacher')} className='pt-0' />
				<form className='flex flex-col w-full gap-3'>
					<input
						type='tel'
						name='phone'
						value={phone}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
						className='bg-black/5 py-[27px] px-[30px] rounded-3xl placeholder:text-gray-primary outline-none placeholder:font-medium'
						placeholder={t('phone')}
						autoComplete='on'
					/>
					<input
						type='text'
						name='password'
						value={pass}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
						className={cn(
							'bg-black/5 py-[27px] px-[30px] rounded-3xl placeholder:text-gray-primary outline-none placeholder:font-medium'
						)}
						placeholder={t('password')}
						autoComplete='on'
					/>
				</form>
				<div id='recaptcha-container' />
				<Button variant='primary' className={cn('w-full text-base')}>
					{t('sendConfirm')}
				</Button>
			</div>
		</Section>
	)
}
