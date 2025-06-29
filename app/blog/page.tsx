const Blog = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Intentional delay")
        }, 2000)
    })
    return <h1>Blog Posts</h1>
}

export default Blog;