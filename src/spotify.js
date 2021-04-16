const clientId = process.env.REACT_APP_CLIENT_ID || '4b13e50be57740cf9fdbb8272e72deea'
const redirectURI = process.env.REACT_APP_REDIRECT_URL || 'https://spotify-clone-sa.netlify.app/'

const scopes = [
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-top-read',
    'user-read-currently-playing',
    'user-read-recently-played',
]

export const getTokenFromURL = () => {
    return window.location.hash.substring(1).split('&').reduce((init, item) => {
        let parts = item.split('=')
        init[parts[0]] = decodeURIComponent(parts[1])

        return init
    }, {})
}


export const authEndpoint = 'https://accounts.spotify.com/authorize'
export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`
