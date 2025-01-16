import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const idParam = req.nextUrl.searchParams.get('id') || ''
	const id = idParam ? Number(idParam) : null

	console.log(id)

	try {
		if (id !== null && !isNaN(id)) {
			const response = await prisma.speaker.findFirst({
				where: {
					id,
				},
			})

			return NextResponse.json(response, { status: 200 })
		}
	} catch (error) {
		const err = error instanceof Error ? error : new Error('Ошибка speaker server')

		return NextResponse.json({ error: err.message }, { status: 500 })
	}
}
