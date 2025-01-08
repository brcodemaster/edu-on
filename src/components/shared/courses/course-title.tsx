import { useTranslations } from 'next-intl'

type Props = {
	title: string
	description: string
}

export const CourseTitle: React.FC<Props> = ({ title, description }) => {
	const t = useTranslations('coursesTitle')

	return (
		<div>
			<p className='text-6xl font-bold max-mobile:text-3xl'>{t(title)}</p>
			<p className='text-lg text-gray-primary pt-3 truncated font-medium'>
				{description}
				<span className='text-blue-primary cursor-pointer pl-1'>Yana...</span>
			</p>
		</div>
	)
}
