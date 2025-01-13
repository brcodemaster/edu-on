import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
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
	} catch (error: any) {
		console.log(error)

		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}
