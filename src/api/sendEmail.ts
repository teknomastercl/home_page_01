import errorLog from '@/utils/errorLog'
import Axios from 'axios'

export interface From {
    email: string;
    name: string;
}

export interface To {
    email: string;
    name: string;
}


export interface Request {
    from: From;
    to: To[];
    subject: string;
    html_part: string;
    headers: any;
    smtp_tags: string[];
    attachments: any[];
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: Request): Promise<Response[] | null> => {
    const path = `send_emails`
    const url = 'https://teknomaster.ipzmarketing.com/api/v1/' + path
    const body = req
    const headers = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-auth-token',
        'Access-Control-Allow-Credentials': 'true',
        'x-auth-token': '_y2q9nTXV6oYdT4Mjo3Szj_uzkhvZmvxLxxvkRMk'
    }

    return Axios.post(url, body, { headers })
        .then((response: { data: any }) => response.data)
        .catch((error) => {
            errorLog({ path, url, req, error })
            return null
        })
}

export interface Response {
    id: number;
    subscriber_id?: any;
    email: string;
    created_at: Date;
}
