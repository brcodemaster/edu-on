import { newCourses } from '@/components/constants'
import {
	Button,
	Categories,
	CourseBlock,
	FilterSelect,
	Languages,
	Pagination,
	Range,
	Section,
	Slices,
	SwitchCase,
	TitleWithDescription,
} from '@/components/ui'
import { Ratings } from '@/components/ui/filters/ratings'

export default function Courses() {
	return (
		<Section className='flex flex-col justify-center items-center pt-[136px]'>
			<div className='flex flex-col'>
				<TitleWithDescription
					size='xxl'
					title='Xush kelibsiz'
					subTitle='ilm izlanuvchi'
					description="Xo'sh bugun qanday bilimlar o'rganamiz?"
				/>
				<SwitchCase leftSide="Bo'limlar bo'yicha" rightSide="Ustozlar bo'yicha" />
			</div>
			<div className='border-t border-t-border mt-[54px] pt-[36px] w-full flex justify-between items-start gap-[54px] max-tablet:flex-col max-mobile:gap-5'>
				<div className='w-[254px] h-full shrink-0 max-tablet:w-full'>
					<FilterSelect />
					<Range />
					<div className='w-full max-tablet:grid max-tablet:grid-cols-2 max-tablet:w-full max-tablet:gap-5 max-mobile:grid-cols-1'>
						<Ratings />
						<Languages />
						<Slices />
						<Button variant='primary' className='w-full mt-6 h-[61px]'>
							Ko&apos;rsatish
						</Button>
					</div>
				</div>
				<div className='overflow-hidden w-full h-full'>
					<Categories />
					<div className='py-9 grid grid-cols-3 gap-y-9 max-desktop:grid-cols-2 max-mobile:grid-cols-1'>
						{newCourses &&
							newCourses.map(newCourse => (
								<CourseBlock
									key={newCourse.title}
									imgUrl={newCourse.imgUrl}
									alt={newCourse.alt}
									labelImg={newCourse.labelImg}
									labelAlt={newCourse.labelAlt}
									title={newCourse.title}
									comments={newCourse.comments}
									price={newCourse.price}
									discountPrice={newCourse.discountPrice}
									rating={newCourse.rating}
									views={newCourse.views}
								/>
							))}
					</div>
					<Pagination />
				</div>
			</div>
		</Section>
	)
}
