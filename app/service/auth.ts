import { AuthTypes } from '../types/auth';

export const Auth = async () => {
    const formData = new URLSearchParams();
    formData.append('username', 'atsryanpowell@gmail.com');
    formData.append('password', '9P3Rq7Ju6fCukzF!');
    formData.append('grant_type', 'password');
    formData.append('client_id', 'AtsCms.WebClient');

    const requestAuth = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData,
    };

    const dataAuth = await fetch(
        'https://api.ats-workspace.com/token',
        requestAuth
    );

    const resAuth = (await dataAuth.json()) as AuthTypes;

    return resAuth;
};
