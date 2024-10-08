function createPost(token, image, text) {
    if (typeof token !== 'string') throw new Error('userId is not a a string')
    if (typeof image !== 'string') throw new Error('image is not a string')
    if (typeof text !== 'string') throw new Error('text is not a string')
    
    return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${userId}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, text})
     })
     .then (res => {
        if(res.status === 201){ 
            return 
        }
        else if (res.status === 400){
            return res.json()
            .then (body => {
                const message = body.error

                throw new Error(message)
            })
        }
     })
}
export default createPost