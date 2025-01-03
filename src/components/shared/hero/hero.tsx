import {
	ActionButton,
	Arrows,
	Button,
	Play,
	Section,
	SwitchCase,
	TitleWithDescription,
} from '../../ui'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import cursorImg from '../../../../public/cursor.png'
import ellipseImg from '../../../../public/ellipse.png'
import profileImg from '../../../../public/profile.svg'
import { Link } from '@/i18n/routing'

export const Hero: React.FC = () => {
	const t = useTranslations()

	return (
		<Section className='flex justify-center pt-[106px] relative'>
			<Image className='absolute top-28 left-5 -z-[1]' src={ellipseImg} alt='Ellipse' priority />
			<Image
				className='absolute top-28 right-5 max-mobile:hidden -z-[1]'
				src={cursorImg}
				alt='Ellipse'
				priority
			/>
			<div className='flex flex-col items-center relative w-[656px] max-mobile:w-[350px]'>
				<div className='flex flex-col justify-center items-center w-full'>
					<div className='flex flex-col justify-center items-center'>
						<TitleWithDescription
							size='xxl'
							title={t('title')}
							subTitle={t('subtitle')}
							description={t('description')}
						/>
						<div className='flex justify-center items-center gap-9 pt-6'>
							<Button variant='primary'>
								<Link href='/courses'>{t('courses')}</Link>
							</Button>
							<a
								href='https://www.google.com/search?q=video&sa=X&sca_esv=6c2e7dfbe02beaf5&sxsrf=ADLYWIIEltxcNpoyoCccslF51SzMT_btDg:1735903067133&udm=2&fbs=AEQNm0BYsTTMbryxDzqPbVETOLCJiCmucAjrRirGrlhiwSGhgK1e1IrwpPktbduDmxgRQroiH49X6QJSecZO1s_VJ7jBG_raqER9HXixq8S-LyHQvAWGaqNNP21ooOVi1FfVD9ThWqSQ1WKGYuilTTkliqgr8G_UVv-EPH2bTq4MzERg9TJztV5n0Myqty2hCEO1gCTh8o_SwD8M6R9LIMowNL_zaOngYg&ved=2ahUKEwj9_bjtttmKAxWwFRAIHWrDPbUQtKgLegQIBRAJ&biw=1440&bih=739&dpr=1#vhid=9cCKyXfTeD1x5M&vssid=mosaic'
								className='font-medium text-blue-primary text-lg flex items-center gap-2 hover:opacity-60 duration-300 text-center'
							>
								<Play /> {t('seeVideo')}
							</a>
						</div>
					</div>
					<SwitchCase leftSide={t('learner')} rightSide={t('teacher')} />
					<div className='flex items-center gap-[18px] pt-9 max-mobile:flex-col'>
						<ActionButton
							title={t('openProfile')}
							icon={profileImg}
							alt='Profile icon'
							link='/profile'
						/>
						<ActionButton
							title={t('chooseCourse')}
							icon='/category.svg'
							alt='Category icon'
							link='/courses'
						/>
						<ActionButton
							title={t('startLearning')}
							icon='/activity.svg'
							alt='Activity icon'
							link='/activity'
						/>
					</div>
				</div>
				<Arrows top='24px' yPosition='-50px' className='max-mobile:hidden' index={6} />
			</div>
		</Section>
	)
}
