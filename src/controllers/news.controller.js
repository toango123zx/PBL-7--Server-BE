import { newsService } from '../services'
import { dateUtils } from '../utils'

export const getNews = async (req, res, next) => {
    const { categoryId, date } = req.query

    const news = await newsService.getNews(categoryId, dateUtils.formatDBDate(date))

    return res.status(200).json({
        success: true,
        data: news,
    })
}
