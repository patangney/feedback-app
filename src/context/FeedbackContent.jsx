//update global state
import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContent = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this is feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'this is feedback item 2',
      rating: 4
    },
    {
      id: 3,
      text: 'this is feedback item 3',
      rating: 6
    }
  ])

  //** Edit Feedback */
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  //** Set Item to be updated */
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  //** Delete Feedback */
  const deleteFeedback = id => {
    console.log('App', id) //Prop drilling
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  //** Update Feedback Item */
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? {
        ...item, 
        ...updatedItem
      } : item ))
    )

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
        addFeedback,
        feedbackEdit,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContent.Provider>
  )
}

export default FeedbackContent
