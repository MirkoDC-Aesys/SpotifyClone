import axios from "axios";

const axiosSpotify = axios.create({
    baseURL: 'https://api.spotify.com/v1'
})

//AXIOS interceptors
axiosSpotify.interceptors.request.use(config => {
    config.headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    return config
})

export const getUser = () => axiosSpotify(`/me`).then(res => res.data)

export const searchItem = (q = 'a', type = 'track') => {
    return axiosSpotify(`/search?q=${q}&type=${type}`)
        .then(res => res.data.tracks)
}

export const getCategoryPlaylist = (category_id) => {
    return axiosSpotify(`/browse/categories/${category_id}/playlists`)
    .then(res => res.data.playlists.items)
}

export const getAllCategories = () => {
    return axiosSpotify(`https://api.spotify.com/v1/browse/categories`)
    .then(res => res.data.categories.items)
}