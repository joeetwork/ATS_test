import { FeedbackDataTypes } from '../types/service/feedback';
import { Auth } from './auth';

export const Feedback = async (start?: Date, end?: Date) => {
    let startFormat;
    let endFormat;

    if (start) {
        const year = start.getFullYear();
        const month = String(start.getMonth() + 1).padStart(2, '0');
        const day = String(start.getDate()).padStart(2, '0');
        startFormat = `${year}-${month}-${day}`;
    }

    if (end) {
        const year = end.getFullYear();
        const month = String(end.getMonth() + 1).padStart(2, '0');
        const day = String(end.getDate()).padStart(2, '0');
        endFormat = `${year}-${month}-${day}`;
    }

    const auth = await Auth();

    const requestFeedback = {
        method: 'GET',
        headers: {
            Bearer: auth.access_token,
            Authorization: `Bearer ${auth.access_token}`,
        },
    };

    const dataFeedback = await fetch(
        `https://api.ats-workspace.com/dailyLogs/app.getAggregatedReviews(siteId=21,start='${startFormat}',end='${endFormat}')`,
        requestFeedback
    );

    const resFeedback = (await dataFeedback.json()) as FeedbackDataTypes;

    return resFeedback;
};
