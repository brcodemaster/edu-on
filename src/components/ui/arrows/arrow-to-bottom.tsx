import { cn } from '@/lib/utils'

type Props = {
	className?: string
}

export const ArrowToBottom: React.FC<Props> = ({ className }) => {
	return (
		<span className={cn(className)}>
			<svg
				width='18'
				height='18'
				viewBox='0 0 18 18'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M14.25 6.375L9 11.625L3.75 6.375'
					stroke='#7E7E7E'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</span>
	)
}
