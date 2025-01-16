import { axiosInstance } from './axios-instance'
import { ApiRoutes } from './constants'
import { CourseWithSpeaker } from '@/components/ui/svgs/search-icon'

export const search = async (query: string): Promise<CourseWithSpeaker[]> => {
	return (await axiosInstance.get(ApiRoutes.SEARCH_FILTER_COURSES, { params: { query } })).data
}
