'use client'

import { useTranslations } from 'next-intl'
import { Input } from './inputs'
import Image from 'next/image'

import cursorImg from '../../../public/cursor.png'
import { Button } from './buttons'

export const Form: React.FC = () => {
	const t = useTranslations('form')

	return (
		<div className='bg-blue-primary rounded-[36px] p-[54px] w-full relative overflow-hidden flex flex-col items-center justify-center mt-[136px]'>
			<form className='grid grid-cols-2 grid-rows-3 gap-3 w-full z-20 max-tablet:grid-cols-1'>
				<label className='font-medium text-white text-[24px] col-start-1'>
					<p className='pl-5 pb-2'>{t('name')}</p>
					<Input name='name' placeholder={t('placeholderName')} className='w-full' />
				</label>
				<label className='font-medium text-white text-[24px] col-start-1'>
					<p className='pl-5 pb-2'>{t('email')}</p>
					<Input name='name' placeholder={t('placeholderEmail')} className='w-full' />
				</label>
				<label className='font-medium text-white text-[24px] col-start-1'>
					<p className='pl-5 pb-2'>{t('phone')}</p>
					<Input
						name='name'
						placeholder={t('placeholderPhone')}
						className='w-full'
						pattern='\d{13}'
					/>
				</label>
				<label className='font-medium text-white text-[24px] col-start-2 row-start-1 row-end-4 max-tablet:col-start-1 max-tablet:row-start-4'>
					<p className='pl-5 pb-2'>{t('message')}</p>
					<textarea
						name='message'
						placeholder={t('placeholderMessage')}
						className='rounded-[24px] bg-white/25 outline-none py-[30px] px-[24px] text-white/75 text-lg placeholder:text-white/75 w-full h-[386px] max-h-[386px] max-mobile:max-h-[113px]'
					></textarea>
				</label>
			</form>
			<Button variant='white' className='mt-10 z-20'>
				{t('send')}
			</Button>
			<Image
				className='absolute -bottom-[50px] right-10 opacity-50'
				src={cursorImg}
				alt='Cursor image'
			/>
		</div>
	)
}
