import { Title } from './title'

type Props = {
	size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
	title: string
	subTitle: string
	description?: string
	className?: string
}

export const TitleWithDescription: React.FC<Props> = ({ size, title, subTitle, description }) => {
	return (
		<>
			<div className='leading-[65px] text-center w-full select-none max-mobile:leading-[50px]'>
				<Title
					size={size}
					className='w-full max-tablet:text-[60px] max-tablet:leading-[45px] max-mobile:text-[40px]'
				>
					{title}
				</Title>
				<p className='font-[samsungSharp] text-[36px] text-black'>{subTitle}</p>
			</div>
			{description && (
				<p className='font-medium text-gray-primary text-center w-full max-tablet:pt-2 max-mobile:pt-2 text-balance'>
					{description}
				</p>
			)}
		</>
	)
}
