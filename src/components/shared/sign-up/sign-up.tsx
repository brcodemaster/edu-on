'use client'

import { Button, Input, Section, Shield, Title } from '@/components/ui'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import cursorImg from '../../../../public/cursor.png'
import { ChangeEvent, useState } from 'react'

export const SignUp = () => {
	const [phone, setPhone] = useState<string>('')
	const [name, setName] = useState<string>('')

	const t = useTranslations()

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(phone, name)
		e.currentTarget.reset()
	}

	return (
		<Section className='pt-[126px] flex flex-col justify-center items-center max-mobile:pt-[20px]'>
			<div className='w-full bg-blue-primary rounded-[72px] py-[55px] px-[72px] relative overflow-hidden  max-mobile:hidden'>
				<Title
					size='xl'
					className='text-white font-[gilroy] font-bold relative z-[1] max-tablet:text-[50px]'
				>
					{t('learnOnline')}
				</Title>
				<p className='text-white max-w-[394px]'>{t('withPlatform')}</p>
				<form
					className='pt-[42px] flex items-center gap-[30px] max-desktop:flex-col'
					onSubmit={handleSubmit}
				>
					<Input
						name='phone'
						placeholder={t('phone')}
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
					<Input
						name='name'
						placeholder={t('name')}
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<Button variant='white' className='whitespace-nowrap'>
						{t('signup')}
					</Button>
				</form>
				<Image
					className='absolute -top-[72px] right-10 opacity-50'
					src={cursorImg}
					alt='Cursor image'
				/>
			</div>
			<Link
				href='/login'
				className='text-lg text-blue-primary flex gap-[6px] font-medium mt-[26px] max-mobile:mt-0 hover:opacity-70'
			>
				<Shield /> {t('doUhave')}
			</Link>
		</Section>
	)
}
