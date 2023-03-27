import { FeedbackContent } from './components/feedbackContent';
import { Auth } from './service/auth';

export default async function Home() {
    const auth = await Auth();

    return (
        <div>
            <div>Account: {auth.userName}</div>
            <FeedbackContent />
        </div>
    );
}
