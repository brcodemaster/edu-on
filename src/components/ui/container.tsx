import { cn } from '@/lib/utils'

type Props = {
	className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
	return (
		<div
			className={cn(
				'max-w-[1440px] px-[150px] duration-300 mx-auto max-desktop:px-[90px] max-mobile:px-[80px] max-mobile-sm:px-[40px]',
				className
			)}
		>
			{children}
		</div>
	)
}
