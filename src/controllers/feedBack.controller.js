import { feedBackService } from '../services'
import { commonConfig } from '../config'

export const getFeedBack = async (req, res, next) => {
    let { take, page } = req.body
    if (page <= 0 || !page) {
        page = 1
    }
    if (take <= 0 || !take) {
        take = commonConfig.take
    }
    const feedBacks = await feedBackService.getFeedBack(take, page)
    return res.status(200).json({
        success: true,
        data: feedBacks,
    })
}

export const createFeedBack = async (req, res, next) => {
    const user = req.user
    const { newsId, content } = req.body
    try {
        await feedBackService.createFeedBack(user.id, newsId, content)
        return res.status(200).json({
            success: true,
            message: 'FeedBack created successfully',
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}

export const acceptFeedBack = async (req, res, next) => {
    const { feedbackId } = req.body
    try {
        await feedBackService.updateStatusFeedBack(feedbackId, 'APPROVED')
        return res.status(200).json({
            success: true,
            message: 'FeedBack Accepted',
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}

export const rejectFeedBack = async (req, res, next) => {
    const { feedbackId } = req.body
    try {
        await feedBackService.updateStatusFeedBack(feedbackId, 'REJECTED')
        return res.status(200).json({
            success: true,
            message: 'FeedBack Rejected',
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}
