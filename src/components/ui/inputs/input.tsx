import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<Props> & {
	placeholder: string
}

export const Input: React.FC<Props> = ({ placeholder }) => {
	return (
		<input
			type='text'
			className='h-[82px] max-w-[236px] rounded-[24px] bg-white/25 outline-none py-[30px] px-[24px] text-white/75 text-lg placeholder:text-white/75'
			placeholder={placeholder}
		/>
	)
}
