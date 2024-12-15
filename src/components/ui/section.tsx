import { cn } from '@/lib/utils'
import { Container } from './container'

type Props = {
	className?: string
}

export const Section: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
	return (
		<section>
			<Container className={cn(className)}>{children}</Container>
		</section>
	)
}
