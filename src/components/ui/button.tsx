import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: 'primary' | 'secondary' | 'grayscale'
	className?: string
}

const buttonVariants = cva('py-[17px] duration-300', {
	variants: {
		variant: {
			primary:
				'px-[30px] font-medium text-white rounded-[12px] bg-blue-primary hover:bg-blue-primary/80 text-[18px]',
			secondary: 'bg-blue-secondary px-10 text-blue-primary font-bold rounded-[14px] text-[17px]',
			grayscale:
				'bg-gray-secondary py-[12px] text-gray-dark rounded-[12px] px-[18px] hover:bg-gray-dark/10',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
})

export const Button: React.FC<Props> = ({ variant, className, ...props }) => {
	return <button className={buttonVariants({ variant, className })} {...props} />
}
