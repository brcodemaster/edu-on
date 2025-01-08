import { cn } from '@/lib/utils'
import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
	placeholder: string
	name: string
	className?: string
}

export const Input: React.FC<Props> = ({ placeholder, name, className, ...props }) => {
	return (
		<input
			name={name}
			type='text'
			className={cn(
				'rounded-[24px] bg-white/25 outline-none py-[30px] px-[24px] text-white/75 text-lg placeholder:text-white/75',
				className
			)}
			placeholder={placeholder}
			autoComplete='off'
			{...props}
		/>
	)
}
