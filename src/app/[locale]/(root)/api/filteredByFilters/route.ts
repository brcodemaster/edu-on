import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'
import qs from 'qs'

type QueryType = {
	sortBy: string
	ratings: string[]
	languages: string[]
	slices: string[]
	priceFrom: number
	priceTo: number
}

export async function GET(req: NextRequest) {
	const query: string = req.nextUrl.searchParams.get('query') || ''
	const parsedQuery = qs.parse(query)

	const queryObject: QueryType = {
		sortBy: parsedQuery.sortBy ? (parsedQuery.sortBy as string) : 'all',
		priceFrom: parsedQuery.priceFrom ? Number(parsedQuery.priceFrom) : 50000,
		priceTo: parsedQuery.priceFrom ? Number(parsedQuery.priceTo) : 10000000,
		ratings: parsedQuery.ratings ? String(parsedQuery.ratings).split(',') : [],
		languages: parsedQuery.languages ? String(parsedQuery.languages).split(',') : [],
		slices: parsedQuery.slices ? String(parsedQuery.slices).split(',') : [],
	}

	const ratingRanges = queryObject.ratings.map(key => {
		switch (key) {
			case '5':
				return { from: 4.5, to: 5.0 }
			case '4':
				return { from: 4.0, to: 4.5 }
			case '3':
				return { from: 3.0, to: 4.0 }
			case '2':
				return { from: 2.0, to: 3.0 }
			case '1':
				return { from: 1.0, to: 2.0 }
			default:
				return null
		}
	})

	const queryObj = {
		sortBy: queryObject.sortBy,
		priceFrom: queryObject.priceFrom,
		priceTo: queryObject.priceTo,
		ratings: ratingRanges,
		languages: queryObject.languages,
		slices: queryObject.slices,
	}

	const oneMonthAgo = new Date()
	oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

	try {
		const courses = await prisma.course.findMany({
			where: {
				currentPrice: {
					gte: queryObject.priceFrom ? queryObject.priceFrom : undefined,
					lte: queryObject.priceTo ? queryObject.priceTo : undefined,
				},

				courseParam: {
					whatLanguage: {
						in: queryObject.languages.length ? queryObject.languages : undefined,
					},
					createdAt:
						queryObject.sortBy === 'news'
							? { gte: oneMonthAgo }
							: queryObject.sortBy === 'olds'
							? { lte: oneMonthAgo }
							: undefined,
				},
				...(queryObj.ratings.length
					? {
							OR: queryObj.ratings.map(range => ({
								rating: {
									gte: range?.from || undefined,
									lte: range?.to || undefined,
								},
							})),
					  }
					: {}),
				categoryTags: {
					some: {
						tag: {
							in: queryObject.slices.length ? queryObject.slices : undefined,
						},
					},
				},
			},
			include: {
				courseParam: true,
			},
		})

		return NextResponse.json(courses, { status: 200 })
	} catch (error) {
		console.log('Ошибка при выполнении запроса: ' + error)
		return NextResponse.json({ error }, { status: 500 })
	}
}
