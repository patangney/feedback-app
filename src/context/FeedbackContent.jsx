//update global state
import { createContext, useState, useEffect } from 'react'

const FeedbackContent = createContext()

//**TODO add firebase to project */

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  //** Edit Feedback */
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  //** Fetch Feedback from json web server */
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  //** Set Item to be updated */
  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  //** Delete Feedback */
  const deleteFeedback = async id => {
    console.log('App', id) //Prop drilling
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`,{ method: 'DELETE'})
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  //** Update Feedback Item */
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    })

    const data = await response.json(); //response we get back
    setFeedback(
      feedback.map(item =>
        item.id === id
          ? {
              ...item,
              ...data
            }
          : item
      )
    )
  }

  //** Add Feedback */
  const addFeedback = async newFeedback => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)      
    })
    
    const data = await response.json()
    console.log(data)
    setFeedback([data, ...feedback])
  }
  return (
    <FeedbackContent.Provider
      value={{
        feedback,
        isLoading,
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
