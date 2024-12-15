import { ActionButton, ArrowLeft, ArrowRight, Arrows, Button, Play, Section, Title } from '../../ui'
import Image from 'next/image'
import { SwitchCase } from './switch-case'

type Props = {
	className?: string
}

export const Hero: React.FC<Props> = ({ className }) => {
	return (
		<Section className='flex justify-center pt-[106px] relative'>
			<Image
				className='absolute top-28 left-5 -z-[1]'
				src='/ellipse.png'
				alt='Ellipse'
				width={300}
				height={268}
			/>
			<Image
				className='absolute top-28 right-5 max-mobile:hidden -z-[1]'
				src='/cursor.png'
				alt='Ellipse'
				width={236}
				height={328}
			/>
			<div className='flex flex-col items-center relative w-[656px] max-mobile:w-[350px]'>
				<div className='flex flex-col justify-center items-center w-full'>
					<div className='flex flex-col justify-center items-center'>
						<div className='leading-[65px] text-center w-full select-none'>
							<Title size='xxl' className='w-full'>
								Onlayn bilim
								<p className='font-[samsungSharp] text-[36px] text-black'>platformasi</p>
							</Title>
						</div>
						<p className='font-medium text-gray-primary text-center w-full'>
							Ta'lim beruvchilar va ilm oluvchilar uchun onlayn platforma
						</p>
						<div className='flex justify-center items-center gap-9 pt-6'>
							<Button variant='primary'>Kurslar</Button>
							<a
								href='/'
								className='font-medium text-blue-primary text-lg flex items-center gap-2 hover:opacity-60 duration-300 text-center'
							>
								<Play /> Videoni ko&apos;rish
							</a>
						</div>
					</div>
					<SwitchCase leftSide='Bilim oluvchi' rightSide='Bilim ulashuvchi' />
					<div className='flex items-center gap-[18px] pt-9 max-mobile:flex-col'>
						<ActionButton
							title='Profil oching'
							icon='/profile.svg'
							alt='Profile icon'
							link='/profile'
						/>
						<ActionButton
							title='Kursni tanlang'
							icon='/category.svg'
							alt='Category icon'
							link='/categories'
						/>
						<ActionButton
							title="O'qishni boshlang"
							icon='/activity.svg'
							alt='Activity icon'
							link='/activity'
						/>
					</div>
				</div>
				<Arrows top='24px' yPosition='0' className='max-mobile:hidden' />
			</div>
		</Section>
	)
}
