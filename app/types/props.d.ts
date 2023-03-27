import { FeedbackDataTypes } from './service/feedback';

export interface FeedbackListProps {
    feedback: FeedbackDataTypes | undefined;
}

export interface FeedbackCalandar {
    handleStartDate(date: Date | null | undefined): void;
    handleEndDate(date: Date | null | undefined): void;
    start: Date | null | undefined;
    end: Date | null | undefined
}
