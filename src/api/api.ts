import axios from 'axios';

export const api_key = 'd10qk0pr01qse6ldek10d10qk0pr01qse6ldek1g';
export const api_key_fmp = 'PwcVX2qClWjdlB3DRpZ8VTXOm2zI7Fh6';

export const apiFin = axios.create({
    baseURL: 'https://finnhub.io/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});
export const apiFmp = axios.create({
   
})



