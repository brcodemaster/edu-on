'use client'

import { Button, SwitchCase } from '@/components/ui'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function Page() {
	const router = useRouter()
	const t = useTranslations()

	return (
		<div
			className='bg-black/20 fixed top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center'
			onClick={() => {
				router.back()
			}}
		>
			<div
				className='bg-white rounded-2xl p-16 flex flex-col gap-6 justify-between items-start w-[650px]'
				onClick={e => {
					e.stopPropagation()
				}}
			>
				<SwitchCase leftSide={t('learner')} rightSide={t('teacher')} className='pt-0 mx-auto' />
				<div className='flex flex-col w-full gap-3'>
					<input
						name='phone'
						type='text'
						className='bg-black/5 py-[27px] px-[30px] rounded-3xl placeholder:text-gray-primary outline-none placeholder:font-medium'
						placeholder={t('phone')}
					/>
					<input
						name='password'
						type='text'
						className='bg-black/5 py-[27px] px-[30px] rounded-3xl placeholder:text-gray-primary outline-none placeholder:font-medium'
						placeholder={t('password')}
					/>
				</div>
				<Link
					href='/asd'
					className='text-blue-primary font-medium pl-3 hover:opacity-50 duration-300'
				>
					{t('forgot')}
				</Link>
				<Button variant='primary' className='w-full'>
					{t('signin')}
				</Button>
				<div className='pl-2'>
					{t('dontHave')}
					<span className='text-blue-primary font-medium pl-1 hover:opacity-50 duration-300 cursor-pointer'>
						{t('signup')}
					</span>
				</div>
			</div>
		</div>
	)
}
