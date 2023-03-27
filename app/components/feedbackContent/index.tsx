'use client';

import { Feedback } from '@/app/service/feedback';
import { FeedbackDataTypes } from '@/app/types/service/feedback';
import { useCallback, useEffect, useState } from 'react';
import { FeedbackCalander } from '../feedbackCalandar';
import { FeedbackList } from '../feedbackList';

export const FeedbackContent = () => {
    const [feedback, setFeedback] = useState<FeedbackDataTypes>();
    const [start, setStart] = useState<Date | undefined>(
        new Date('2020-01-01')
    );
    const [end, setEnd] = useState<Date | undefined>(new Date('2020-02-01'));

    const handleStartDate = useCallback(
        (date?: Date) => {
            setStart(date);
        },
        [setStart]
    );

    const handleEndDate = useCallback(
        (date?: Date) => {
            setEnd(date);
        },
        [setEnd]
    );

    useEffect(() => {
        const fetchData = async () => {
            const res = await Feedback(start, end);
            setFeedback(res);
        };
        fetchData();
    }, [start, end]);

    console.log(start);

    return (
        <>
            <FeedbackCalander
                handleStartDate={handleStartDate}
                handleEndDate={handleEndDate}
                start={start}
                end={end}
            />
            <FeedbackList feedback={feedback} />
        </>
    );
};
