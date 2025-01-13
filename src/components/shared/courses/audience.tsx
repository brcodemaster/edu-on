import { Check } from '@/components/ui'
import { Audience as AudienceOne } from '@prisma/client'
import { useTranslations } from 'next-intl'

type Props = {
	audience: AudienceOne[]
}

export const Audience: React.FC<Props> = ({ audience }) => {
	const t = useTranslations('forWhom')

	return (
		<>
			<p className='text-black text-3xl font-bold pb-2 max-mobile:text-xl'>{t('forWhom')}</p>
			{audience &&
				audience.map(forWhom => (
					<p
						key={forWhom.id}
						className='flex items-center gap-2 pt-2 text-lg text-gray-primary font-medium max-mobile:text-base'
					>
						<Check />
						{forWhom.audience}
					</p>
				))}
		</>
	)
}
