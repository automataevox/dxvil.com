const { stringify } = require('querystring')

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID 
const client_secret =  process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET 
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const EndpointGetToken = 'https://accounts.spotify.com/api/token'
const EndpointGetTopTopTracks = 'https://api.spotify.com/v1/artists/1Ngynwc6bFIKGzRcOrBAnx/albums'

const getAccessToken = async () => {
  const resp = await fetch(EndpointGetToken, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })
  return resp.json()
}

async function getTopTracks(){
  const { access_token } = await getAccessToken()

  const resp = await fetch(`${EndpointGetTopTopTracks}?include_groups=single`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  return resp.json()
}

// ;(async () => {
//   const resp = await getTopTracks()
//   const data = await resp.json()
//   console.log(data)
// })()

export { getTopTracks }