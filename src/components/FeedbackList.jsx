function FeedbackList ({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  console.log(feedback)
  return <div>FeedbackList</div>
}

export default FeedbackList
