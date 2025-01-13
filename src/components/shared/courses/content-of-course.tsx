import { Certificate, Video } from '@/components/ui'
import { Content } from '@prisma/client'
import { useTranslations } from 'next-intl'

type Props = {
	contents: Content[]
	certificate: boolean
}

export const ContentOfCourse: React.FC<Props> = ({ contents, certificate }) => {
	const t = useTranslations('courseContent')

	return (
		<>
			<p className='text-black text-3xl font-bold pb-6 max-mobile:text-xl max-mobile:pb-3'>
				{t('courseContent')}
			</p>
			{contents &&
				contents.map((content, ind) => (
					<p
						key={content.id}
						className='flex items-center gap-2 py-6 px-7 hover:bg-blue-primary/30 rounded-2xl duration-300 text-lg text-gray-primary font-medium cursor-pointer my-2 max-mobile:py-3 max-mobile:px-4 max-mobile:text-base w-full'
					>
						<Video />
						<span className='w-full truncate'>{`${ind + 1}. ${content.content}`}</span>
					</p>
				))}
			{certificate && (
				<p className='flex items-center gap-2 py-6 px-7 hover:bg-blue-primary/30 rounded-2xl duration-300 text-lg text-gray-primary font-medium cursor-pointer my-2 max-mobile:py-3 max-mobile:px-4 max-mobile:text-base w-full'>
					<Certificate />
					<span className='w-full truncate'>{`${contents.length + 1}. Sertifikat`}</span>
				</p>
			)}
		</>
	)
}
