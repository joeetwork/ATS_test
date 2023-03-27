import { FeedbackTypes } from '../types/feedback';
import { Auth } from './auth';

export const Feedback = async () => {
    const auth = await Auth();

    const requestFeedback = {
        method: 'GET',
        headers: {
            Bearer: auth.access_token,
            Authorization: `Bearer ${auth.access_token}`,
        },
    };

    const dataFeedback = await fetch(
        "https://api.ats-workspace.com/dailyLogs/app.getAggregatedReviews(siteId=21,start='2020-01-01',end='2020-02-01')",
        requestFeedback
    );

    const resFeedback = (await dataFeedback.json()) as FeedbackTypes;

    return resFeedback;
};
