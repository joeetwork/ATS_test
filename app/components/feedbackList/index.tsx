import { FeedbackListProps } from '@/app/types/props';

export const FeedbackList = ({ feedback }: FeedbackListProps) => {
    return (
        <div>
            <div className='text-yellow-700 text-3xl font-bold text-center py-4'>
                Feedback from January 2020
            </div>
            <ul className='flex flex-col text-center'>
                {feedback &&
                    feedback.value.map((feedback, i) => {
                        return (
                            <li
                                className='border-solid border-2 rounded-md w-3/12 mx-auto mt-1.5'
                                key={i}
                            >
                                {feedback}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
