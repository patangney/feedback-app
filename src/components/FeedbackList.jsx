import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'
import FeedbackContent from '../context/FeedbackContent'

function FeedbackList () {
  //extract from feedback context using hook
  const {feedback, isLoading} = useContext(FeedbackContent)
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }
  console.log(feedback)
  //* Loop through items *//
  return isLoading ? <Spinner /> : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id }
              item={item}              
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

  )
  
  // ** Non animated version */
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map(item => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} /> //** handleDelete - pass to Feedback Item props */
  //     ))}
  //   </div>
  // )
}




export default FeedbackList
