import { Check } from '@/components/ui'
import { Profit } from '@prisma/client'
import { useTranslations } from 'next-intl'

type Props = {
	outComes: Profit[]
}

export const OutComes: React.FC<Props> = ({ outComes }) => {
	const t = useTranslations('outComes')

	return (
		<>
			<p className='text-black text-3xl font-bold pb-2 max-mobile:text-xl'>{t('outComes')}</p>
			{outComes &&
				outComes.map(outCome => (
					<p
						key={outCome.id}
						className='flex items-center gap-2 pt-2 text-lg text-gray-primary font-medium max-mobile:text-base'
					>
						<Check />
						{outCome.profit}
					</p>
				))}
		</>
	)
}
