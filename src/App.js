function App () {
  const title = 'Blog Post'
  const body = 'This is a blog post'
  const comments = [
    { id: 1, text: 'test test 1' },
    { id: 2, text: 'test test 2' },
    { id: 3, text: 'test test 3' }
  ]
  return (
    <div className='container'>
      <h1>{title.toLowerCase()}</h1>
      <p>{body}</p>
      <p>
        Comments ({comments.length})
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </p>
    </div>
  )
}

export default App
