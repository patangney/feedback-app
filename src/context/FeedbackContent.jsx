//update global state
import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContent = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this item is from context',
      rating: 10
    }
  ])

  //** Delete Feedback */
  const deleteFeedback = id => {
    console.log('App', id) //Prop drilling
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  //** Add Feedback */
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <FeedbackContent.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback
      }}
    >
      {children}
    </FeedbackContent.Provider>
  )
}

export default FeedbackContent
