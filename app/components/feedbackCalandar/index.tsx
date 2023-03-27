import { FeedbackCalandar } from '@/app/types/props';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const FeedbackCalander = ({
    handleStartDate,
    handleEndDate,
    start,
    end,
}: FeedbackCalandar) => {
    return (
        <div className='flex'>
            <div className='flex flex-col'>
                <div>Pick a start date</div>
                <DatePicker
                    dateFormat={'yyyy-MM-dd'}
                    selected={start}
                    onChange={(date) => handleStartDate(date)}
                />
            </div>

            <div className='flex flex-col'>
                <div>Pick an end date</div>
                <DatePicker
                    dateFormat={'yyyy-MM-dd'}
                    selected={end}
                    onChange={(date) => handleEndDate(date)}
                />
            </div>
        </div>
    );
};
