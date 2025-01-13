import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const category = req.nextUrl.searchParams.get('categoryTag') || ''

	if (!category || category === 'all' || category === 'religion') {
		const courses = await prisma.course.findMany({
			include: {
				courseParam: true,
			},
			take: 9,
		})

		return NextResponse.json(courses, { status: 200 })
	}

	if (category === 'bests') {
		const courses = await prisma.course.findMany({
			where: {
				rating: {
					gt: 4.5,
				},
			},
			include: {
				courseParam: true,
			},
			take: 9,
		})

		return NextResponse.json(courses, { status: 200 })
	}

	try {
		const filteredCourses = await prisma.course.findMany({
			where: {
				categoryTags: {
					some: {
						tag: category,
					},
				},
			},
			include: {
				courseParam: true,
			},
			take: 9,
		})

		return NextResponse.json(filteredCourses, { status: 200 })
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 })
	}
}
