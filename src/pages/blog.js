export default function Blog() {
    return (
        <main>
            <h1>Ini Adalah Halaman Blog</h1>
            <br />
            <hr />
            <ul>
                {BLOGS.map((blog, i) => (
                    <li key={i}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

const BLOGS = [
    {
        title: 'Blog 1',
        date: '2023-01-01',
        content: 
            'Lorem ipsum'
    },
    {
        title: 'Blog 2',
        date: '2023-04-01',
        content: 
            'Lorem ipsum'
    },
    {
        title: 'Blog 3',
        date: '2023-08-01',
        content: 
            'Lorem ipsum'
    }
]