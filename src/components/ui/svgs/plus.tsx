import { cn } from '@/lib/utils'

type Props = {
	className?: string
	fill: 'blue' | 'red'
}

export const Plus: React.FC<Props> = ({ className, fill }) => {
	return (
		<span className={cn('duration-300', className)}>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M15.9847 12.85H12.8996V15.9084C12.8996 16.4008 12.4969 16.8 12.0002 16.8C11.5035 16.8 11.1008 16.4008 11.1008 15.9084V12.85H8.01565C7.5523 12.8025 7.2002 12.4154 7.2002 11.9536C7.2002 11.4918 7.5523 11.1047 8.01565 11.0572H11.0911V8.0084C11.1391 7.54907 11.5295 7.20001 11.9954 7.20001C12.4612 7.20001 12.8516 7.54907 12.8996 8.0084V11.0572H15.9847C16.4481 11.1047 16.8002 11.4918 16.8002 11.9536C16.8002 12.4154 16.4481 12.8025 15.9847 12.85Z'
					fill={fill === 'blue' ? '#006AFF' : 'red'}
				/>
				<circle
					cx='12'
					cy='12'
					r='11.25'
					stroke={fill === 'blue' ? '#006AFF' : 'red'}
					strokeWidth='1.5'
				/>
			</svg>
		</span>
	)
}
