import { Course, Course_Param } from '@prisma/client'
import { axiosInstance } from './axios-instance'
import { ApiRoutes } from './constants'

export type CourseWithTag = Course & {
	courseParam: Course_Param
}

export const search = async (categoryTag: string): Promise<CourseWithTag[]> => {
	return (await axiosInstance.get(ApiRoutes.SEARCH_CATEGORY, { params: { categoryTag } })).data
}
