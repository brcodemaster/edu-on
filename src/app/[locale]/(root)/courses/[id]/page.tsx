import {
	Audience,
	CommentsOfCourse,
	ContentOfCourse,
	Course,
	CourseBlock,
	CourseTitle,
	OutComes,
	ParamsOfCourse,
} from '@/components/shared'
import { Section } from '@/components/ui'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
	try {
		const { id: idCourse } = await params

		const course = await prisma.course.findFirst({
			where: {
				id: Number(idCourse),
			},
			include: {
				audience: true,
				author: true,
				comments: true,
				contents: true,
				courseParam: true,
				profits: true,
			},
		})

		if (!course) {
			return
		}

		return (
			<Section className='flex justify-between gap-5 mt-9 max-desktop:flex-col'>
				<div className='max-w-[676px]'>
					<CourseTitle title={course.title} description={course.description} />
					<ParamsOfCourse
						authorName={course.author.name}
						authorLastName={course.author.lastName}
						ratingCount={course.ratingCount}
						rating={course.rating}
						views={course.courseParam!.views}
					/>
					<div className='py-9 border-b border-b-border max-mobile:py-5'>
						<OutComes outComes={course.profits} />
					</div>
					<div className='py-9 border-b border-b-border max-mobile:py-5'>
						<Audience audience={course.audience} />
					</div>
					<div className='py-9 border-b border-b-border max-mobile:py-5'>
						<ContentOfCourse
							contents={course.contents}
							certificate={course.courseParam!.certificate}
						/>
					</div>
					<div className='py-9 border-b border-border '>
						<Course id={idCourse} speaker={course.author} />
					</div>
					<div className='py-9'>
						<CommentsOfCourse comments={course.comments} />
					</div>
				</div>
				<CourseBlock
					imgUrl={course.imgUrl}
					alt={course.alt}
					hours={course.courseParam!.hours}
					price={course.currentPrice}
					videos={course.courseParam!.videos}
					discountPrice={course.discountPrice}
				/>
			</Section>
		)
	} catch (error) {
		console.log(error)

		return notFound()
	}
}
