import { Inter } from 'next/font/google';
import { FeedbackList } from './components/feedbackList';
import { Auth } from './service/auth';
import { Feedback } from './service/feedback';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
    const auth = await Auth();

    return (
        <div>
            <div>Account: {auth.userName}</div>
            {/* @ts-expect-error Async Server Component */}
            <FeedbackList />
        </div>
    );
}
