import { cva } from 'class-variance-authority'
import React, { JSX } from 'react'

type Props = {
	size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
	className?: string
}

const titleVariants = cva('', {
	variants: {
		size: {
			xxl: 'text-[72px] font-[samsungSharp] text-blue-primary font-black',
			xl: 'text-[46px] font-[samsungSharp] text-black font-black',
		},
	},
	defaultVariants: {
		size: 'xxl',
	},
})

const tagMapBySize = {
	xxl: 'h1',
	xl: 'h2',
	lg: 'h3',
	md: 'h4',
	sm: 'h5',
	xs: 'h6',
}

export const Title: React.FC<React.PropsWithChildren<Props>> = ({ size, children, className }) => {
	const Tag = tagMapBySize[size] as keyof JSX.IntrinsicElements

	return <Tag className={titleVariants({ size: 'xxl', className })}>{children}</Tag>
}
