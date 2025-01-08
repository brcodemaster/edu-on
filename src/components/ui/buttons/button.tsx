import { cva } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: 'primary' | 'secondary' | 'grayscale' | 'white'
	className?: string
}

const buttonVariants = cva('py-[17px] duration-300 select-none max-tablet:py-[13px]', {
	variants: {
		variant: {
			primary:
				'px-[30px] font-medium text-white rounded-[12px] bg-blue-primary hover:bg-blue-primary/80 text-[18px] max-tablet:px-[20px] max-tablet:text-[16px] max-mobile:px-[17px] max-mobile:text-[14px]',
			secondary:
				'bg-blue-secondary px-10 text-blue-primary font-bold rounded-[14px] text-[17px] hover:bg-blue-primary/20 max-tablet:px-7 max-tablet:text-[16px] max-mobile:px-5 max-mobile:text-[14px]',
			grayscale:
				'bg-gray-secondary py-[12px] text-gray-dark rounded-[12px] px-[18px] hover:bg-gray-dark/20 max-tablet:px-[15px] max-tablet:py-[10px] max-mobile:px-[14px] max-mobile:py-[9px] max-mobile:text-sm',
			white:
				'bg-white py-[30px] px-[56px] text-blue-primary rounded-[24px] hover:bg-white/60 font-[gilroy] font-bold text-lg max-tablet:py-[25px] max-tablet:px-[50px] max-mobile:py-[20px] max-mobile:py-[45px]',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
})

export const Button: React.FC<Props> = ({ variant, className, ...props }) => {
	return <button className={buttonVariants({ variant, className })} {...props} />
}
