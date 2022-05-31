import axios from 'axios'

const indecisionApi = axios.create({
    baseURL: 'https://yesno.wtf/api',
});

export const getRandomAnswer = async () => {
    const { data } = await indecisionApi.get()
    return data;
}