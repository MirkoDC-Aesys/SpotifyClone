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
        .then(res => res.data[`${type}s`])
}

export const getCategoryPlaylist = (category_id) => {
    return axiosSpotify(`/browse/categories/${category_id}/playlists`)
        .then(res => res.data.playlists.items)
}

export const getPlaylistItems = (playlist_id) => {
    return axiosSpotify(`/playlists/${playlist_id}`)
        .then(res => res.data)
}

export const getAllCategories = () => {
    return axiosSpotify(`https://api.spotify.com/v1/browse/categories`)
        .then(res => res.data.categories.items)
}

export const getUserTop = (type = 'artists') => {
    return axiosSpotify(`/me/top/${type}`)
        .then(res => res.data)
}

export const getUserTracks = () => {
    return axiosSpotify(`/me/tracks`)
        .then(res => res.data.items)
}

export const getUserPlaylists = () => {
    return axiosSpotify(`/me/playlists`)
        .then(res => res.data.items)
}