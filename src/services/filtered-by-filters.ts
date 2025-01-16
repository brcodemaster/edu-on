import { axiosInstance } from './axios-instance'
import { ApiRoutes } from './constants'
import { CourseWithTag } from './filtered-course'

export const search = async (query: string): Promise<CourseWithTag[]> => {
	return (await axiosInstance.get(ApiRoutes.SEARCH_FILTERS, { params: { query } })).data
}
