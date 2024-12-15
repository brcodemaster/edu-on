import { Courses, Header, Hero, Speakers, TopCourses } from '@/components/shared'
import { NewCourses } from '@/components/shared/new-courses'
import { Superiority } from '@/components/shared/superiority'

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<TopCourses />
			<NewCourses />
			<Speakers />
			<Courses />
			<Superiority />
		</>
	)
}
