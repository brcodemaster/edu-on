import { newCourses } from '@/components/constants'
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
import { notFound } from 'next/navigation'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
	try {
		const { id: idCourse } = await params

		const course = newCourses.find(course => course.id === Number(idCourse))

		if (!course) {
			return
		}

		return (
			<Section className='flex justify-between gap-5 mt-9 max-desktop:flex-col'>
				<div className='max-w-[676px]'>
					<CourseTitle title={course.title} description={course.description} />
					<ParamsOfCourse
						author={course.author.name}
						comments={course.comments}
						rating={course.rating}
						views={course.views}
					/>
					<div className='py-9 border-b border-b-border max-mobile:py-5'>
						<OutComes outComes={course.outcomes} />
					</div>
					<div className='py-9 border-b border-b-border max-mobile:py-5'>
						<Audience audience={course.audience} />
					</div>
					<div className='py-9 border-b border-b-border max-mobile:py-5'>
						<ContentOfCourse contents={course.contents} />
					</div>
					<div className='py-9 border-b border-border '>
						<Course />
					</div>
					<div className='py-9'>
						<CommentsOfCourse />
					</div>
				</div>
				<CourseBlock
					imgUrl={course.imgUrl}
					alt={course.alt}
					hours={course.atCourse.hours}
					price={course.price}
					videos={course.atCourse.videos}
					discountPrice={course.discountPrice}
				/>
			</Section>
		)
	} catch (error) {
		console.log(error)

		return notFound()
	}
}
