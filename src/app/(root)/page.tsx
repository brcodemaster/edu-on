import { Courses, Header, Hero, Speakers, TopCourses } from '@/components/shared'
import { NewCourses } from '@/components/shared/new-courses/new-courses'
import { Superiority } from '@/components/shared/superiority'
import { Thoughts } from '@/components/shared/thoughts/thoughts'

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
			<Thoughts />
		</>
	)
}
