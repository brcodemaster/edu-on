import { Audience, Comment, Content, Course, Course_Param, Profit, Speaker } from '@prisma/client'

interface Courses {
	id: number
	title: string
	description: string
	author: {
		name: string
		specialist: string
		imgUrl: string
		alt: string
		company?: string
		rating: number
		comments: number
	}
	rating: number
	comments: number
	views: number
	price: number
	discountPrice: number
	outcomes: string[]
	audience: string[]
	contents: string[]
	atCourse: {
		forEver: boolean
		hours: number
		videos: number
		certificate: boolean
	}
	imgUrl: string
	alt: string
}

type CourseWithRelations = Course & {
	author: Speaker
	audience: Audience
	comments: Comment
	contents: Content
	courseParam: Course_Param
	profits: Profit
}
