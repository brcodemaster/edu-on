import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('query') || ''

	try {
		const courses = await prisma.course.findMany({
			where: {
				OR: [
					{ author: { is: { name: { contains: query } } } },
					{ author: { is: { lastName: { contains: query } } } },
				],
			},
			include: {
				author: true,
			},
			take: 5,
		})

		return NextResponse.json(courses, { status: 200 })
	} catch (error) {
		const err = error instanceof Error ? error : new Error('Ошибка searchCourses server')

		return NextResponse.json(err.message, { status: 500 })
	}
}
