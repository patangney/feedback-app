import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage';

function App () {
  //eslint-disable-next-line
  const [feedback, setFeedback] = useState(FeedbackData)

  //** Delete Feedback */
  const deleteFeedback = id => {
    console.log('App', id) //Prop drilling
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header />
      <div className='container'>
        <FeedbackForm  handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </Router>
  )
}

export default App
