'use client'

import { Button, Section, SwitchCase } from '@/components/ui'
import { auth, firebaseConfig } from '@/firebase'
import { cn } from '@/lib/utils'
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useState, useTransition } from 'react'

export default function Page() {
	const t = useTranslations()
	const router = useRouter()

	const [isDisabled, setIsDisabled] = useState(true)
	const [phone, setPhone] = useState('')
	const [pass, setPass] = useState('')
	const [timer, setTimer] = useState(0)
	const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null)
	const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null)
	const [isPending, startTransition] = useTransition()
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		let timerNodeJS: NodeJS.Timeout

		if (timer > 0) {
			timerNodeJS = setTimeout(() => {
				setTimer(timer - 1)
			}, 1000)
		}

		return () => {
			clearTimeout(timerNodeJS)
		}
	}, [timer])

	useEffect(() => {
		const recaptcha = new RecaptchaVerifier(auth, 'recaptcha-container', {
			size: 'invisible',
		})
		setRecaptchaVerifier(recaptcha)

		return () => {
			recaptcha.clear()
		}
	}, [auth])

	const requestOtp = (e?: FormEvent<HTMLFormElement>) => {
		e?.preventDefault()
		setIsDisabled(false)
		setTimer(60)

		console.log(firebaseConfig)

		startTransition(async () => {
			if (!recaptchaVerifier) {
				return
			}

			try {
				const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifier)
				setConfirmationResult(confirmationResult)
			} catch (error) {
				if (error instanceof Error) {
					setError(error)
				}
			}
		})
	}

	useEffect(() => {
		const correctPass = pass.length === 6
		if (correctPass) {
			verifyOtp()
		}
	}, [pass])

	const verifyOtp = async () => {
		startTransition(async () => {
			if (!confirmationResult) {
				return
			}

			try {
				await confirmationResult.confirm(pass)
				router.replace('/')
			} catch (error) {
				if (error instanceof Error) {
					setError(error)
				}
			}
		})
	}

	return (
		<Section className='flex justify-center items-center font-[gilroy] min-h-screen w-full'>
			<div className='w-[600px] flex flex-col gap-5 max-mobile:gap-4'>
				<SwitchCase leftSide={t('learner')} rightSide={t('teacher')} className='pt-0' />
				<form className='flex flex-col w-full gap-3' onSubmit={requestOtp}>
					<input
						disabled={!isDisabled}
						type='tel'
						name='phone'
						value={phone}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
						className='bg-black/5 py-[27px] px-[30px] rounded-3xl placeholder:text-gray-primary outline-none placeholder:font-medium'
						placeholder={t('phone')}
						autoComplete='on'
					/>
					<input
						disabled={isDisabled}
						type='text'
						name='password'
						value={pass}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
						className={cn(
							'bg-black/5 py-[27px] px-[30px] rounded-3xl placeholder:text-gray-primary outline-none placeholder:font-medium',
							isDisabled && 'blur-[2px]'
						)}
						placeholder={t('password')}
						autoComplete='on'
					/>
				</form>
				{error && <div className='text-base text-red-500 font-medium px-3'>{error.message}</div>}
				<div id='recaptcha-container' />
				<Button
					variant='primary'
					className={cn('w-full text-base', timer > 0 && 'pointer-events-none bg-gray-primary')}
					onClick={() => requestOtp()}
					disabled={timer > 0 && isPending}
				>
					{isDisabled
						? t('sendConfirm')
						: timer === 0
						? t('sendConfirm')
						: `${t('sendConfirm')} (${timer})`}
				</Button>
			</div>
		</Section>
	)
}
