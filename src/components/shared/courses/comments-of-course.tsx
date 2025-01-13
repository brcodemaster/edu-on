import { Send } from '@/components/ui'
import { CourseWithRelations } from '@/types/types'
import { Comment, Course } from '@prisma/client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type Props = {
	comments: Comment[]
}

export const CommentsOfCourse: React.FC<Props> = ({ comments }) => {
	const t = useTranslations()

	return (
		<>
			<p className='text-black text-3xl font-bold pb-6 max-mobile:pb-3 max-mobile:text-xl'>
				{t('comments')}
			</p>
			{comments &&
				comments.map(comment => (
					<div className='flex gap-4 pt-7' key={comment.id}>
						<div className='w-[54px] h-[54px] shrink-0'>
							<Image
								src={comment.commentWriterImgUrl}
								alt={comment.writtenBy + String(comment.id)}
								width={54}
								height={54}
								className='w-full h-full object-contain'
							/>
						</div>
						<div className='flex flex-col'>
							<span className='text-black font-bold text-lg max-mobile:text-base'>
								{comment.writtenBy}
							</span>
							<span className='text-gray-primary font-medium max-mobile:text-sm'>
								{comment.comment}
							</span>
						</div>
					</div>
				))}
		</>
	)
}
