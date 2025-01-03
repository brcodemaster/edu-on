import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
	placeholder: string
	name: string
}

export const Input: React.FC<Props> = ({ placeholder, name, ...props }) => {
	return (
		<input
			name={name}
			type='text'
			className='h-[82px] max-w-[236px] rounded-[24px] bg-white/25 outline-none py-[30px] px-[24px] text-white/75 text-lg placeholder:text-white/75'
			placeholder={placeholder}
			autoComplete='off'
			{...props}
		/>
	)
}
