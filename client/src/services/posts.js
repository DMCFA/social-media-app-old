import axios from 'axios';
const baseUrl = '/posts';

//Headers
const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

const getAll = async () => {
    const request = await axios.get(baseUrl);
    return request.data;
};

const createPost = async (post) => {
    const request = await axios.post(post, baseUrl, config);

    return request.data;
};

export default {
    getAll,
    createPost,
};
