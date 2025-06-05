import axios from 'axios';

const api_key = 'd10qk0pr01qse6ldek10d10qk0pr01qse6ldek1g';

export const api = axios.create({
    baseURL: 'https://finnhub.io/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});



