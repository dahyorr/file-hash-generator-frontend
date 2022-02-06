import axios from "axios";

export const serviceApi =  axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const routes = {
    upload: '/upload',
    initiateHash: '/hash/initiate',
    getHashResult: '/hash/result', // query param fileId
}

export const uploadFile = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const {data, status, statusText} = await serviceApi.post<{
        fileId: string;
        message: string;
    }>(routes.upload, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return {data, status, statusText}
}