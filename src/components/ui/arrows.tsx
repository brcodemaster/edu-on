import { cn } from '@/lib/utils'
import { ArrowLeft } from './arrow-left'
import { ArrowRight } from './arrow-right'

type Props = {
	top: string
	yPosition: string
	index: number
	className?: string
}

export const Arrows: React.FC<Props> = ({ top, yPosition, index, className }) => {
	return (
		<>
			<ArrowLeft className={cn(`absolute`, className)} top={top} left={yPosition} index={index} />
			<ArrowRight className={cn(`absolute`, className)} top={top} right={yPosition} index={index} />
		</>
	)
}
