import { newCourses } from '@/components/constants'
import { ArrowLeft, ArrowRight, Button, CourseBlock, Section, Title } from '@/components/ui'

export const TopCourses: React.FC = () => {
	return (
		<Section className='pt-[100px] flex flex-col items-center justify-center'>
			<div className='flex gap-4 justify-center w-full'>
				<Title size='xl' className='w-full text-center'>
					Top <span className='text-black'>kurslar</span>
				</Title>
			</div>
			<div className='flex justify-center items-center pt-[36px] relative w-full'>
				<ArrowLeft className='absolute top-1/4 -left-10 max-mobile:-left-7' />
				<div className='max-w-[1144px] h-[365px] max-desktop:max-w-[858px] max-tablet:max-w-[572px] max-mobile:max-w-[286px] inline-flex items-start justify-between gap-[34px] w-full overflow-x relative'>
					{newCourses &&
						newCourses.map(topCourse => (
							<CourseBlock
								key={topCourse.title}
								imgUrl={topCourse.imgUrl}
								alt={topCourse.alt}
								labelImg={topCourse.labelImg}
								labelAlt={topCourse.labelAlt}
								title={topCourse.title}
								comments={topCourse.comments}
								price={topCourse.price}
								discountPrice={topCourse.discountPrice}
								rating={topCourse.rating}
								views={topCourse.views}
							/>
						))}
				</div>
				<ArrowRight className='absolute top-1/4 -right-10 max-mobile:-right-7' />
			</div>
			<Button variant='primary' className='mt-[36px]'>
				Barchasi
			</Button>
		</Section>
	)
}
