function retrievePosts(token) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    
    return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then (res => {
        if (res.status === 200){
        return res.json()
    } else if (res.status === 400){
        return res.json()
            .then (body => {
                const message = body.error
                throw new Error(message)            
            })
        }
    })
}
export default retrievePosts