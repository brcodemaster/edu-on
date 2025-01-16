import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const oneMonthAgo = new Date()
		oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

		const response = await prisma.course.findMany({
			where: {
				courseParam: {
					createdAt: {
						gte: oneMonthAgo,
					},
				},
			},
			include: {
				courseParam: true,
			},
		})

		return NextResponse.json(response, { status: 200 })
	} catch (error) {
		const err = error instanceof Error ? error : new Error('Ошибка newCourses server')

		return NextResponse.json({ error: err.message }, { status: 500 })
	}
}
