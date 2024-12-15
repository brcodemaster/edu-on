import { Button, Input, Section, Shield, Title } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const SignUp = () => {
	return (
		<Section className='pt-[126px] flex flex-col justify-center items-center max-mobile:pt-[20px]'>
			<div className='w-full bg-blue-primary rounded-[72px] py-[55px] px-[72px] relative overflow-hidden  max-mobile:hidden'>
				<Title
					size='xl'
					className='text-white font-[gilroy] font-bold relative z-[1] max-tablet:text-[50px]'
				>
					Online Ta&apos;lim Oling
				</Title>
				<p className='text-white max-w-[394px]'>
					Platformamiz orqali istalgan yerda va istalgan vaqtda doimiy ravishda bilim oling!
				</p>
				<div className='pt-[42px] flex items-center gap-[30px] max-desktop:flex-col'>
					<Input placeholder='Tel.raqam' />
					<Input placeholder='Ismingiz' />
					<Button variant='white' className='whitespace-nowrap'>
						Ro&apos;yxatdan o&apos;tish
					</Button>
				</div>
				<Image
					className='absolute -top-[72px] right-10 opacity-50'
					src='/cursor.png'
					alt='Cursor image'
					width={240}
					height={324}
				/>
			</div>
			<Link
				href='sign-in'
				className='text-lg text-blue-primary flex gap-[6px] font-medium mt-[26px] max-mobile:mt-0 hover:opacity-70'
			>
				<Shield /> Akkountingiz bormi?
			</Link>
		</Section>
	)
}
