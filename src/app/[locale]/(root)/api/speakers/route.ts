import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const idParam = req.nextUrl.searchParams.get('id') || ''
	const id = idParam ? Number(idParam) : null

	console.log(id)

	try {
		if (id !== null && !isNaN(id)) {
			const response = await prisma.speaker.findMany({
				where: {
					id,
				},
			})

			return NextResponse.json(response, { status: 200 })
		}

		const response = await prisma.speaker.findMany()

		return NextResponse.json(response, { status: 200 })
	} catch (error: any) {
		console.log(error)

		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}
