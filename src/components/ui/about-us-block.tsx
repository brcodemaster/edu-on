import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Play } from './svgs'
import { useTranslations } from 'next-intl'

type Props = {
	imgUrl: string
	left: boolean
	title: string
	text: string
	text2: string
	text3?: string
	className?: string
}

export const AboutUsBlock: React.FC<Props> = ({
	imgUrl,
	left = true,
	title,
	text,
	text2,
	text3,
	className,
}) => {
	const t = useTranslations()

	return (
		<div className={cn('flex gap-16 max-tablet:flex-col', className)}>
			{left && (
				<div className='max-w-[540px] max-h-[408px] shrink-0'>
					<Image
						src={imgUrl}
						alt='About us image'
						width={540}
						height={408}
						className='object-cover w-full h-full rounded-[48px	]'
					/>
				</div>
			)}

			<div>
				<p className='font-bold text-blue-primary text-[46px] pt-7'>{title}</p>
				<p className='text-balance pt-7 font-medium'>{text}</p>
				<p className='text-balance pt-7 font-medium'>{text2}</p>
				{text3 ? (
					<p className='text-balance pt-7 font-medium'>{text3}</p>
				) : (
					<a
						href='#'
						className='font-medium text-blue-primary text-lg flex items-center gap-2 hover:opacity-60 duration-300 text-center max-mobile:gap-2 pt-5'
					>
						<Play /> {t('seeVideo')}
					</a>
				)}
			</div>
			{!left && (
				<div className='max-w-[540px] max-h-[408px] shrink-0'>
					<Image
						src={imgUrl}
						alt='About us image'
						width={540}
						height={408}
						className='object-cover w-full h-full rounded-[48px	]'
					/>
				</div>
			)}
		</div>
	)
}
