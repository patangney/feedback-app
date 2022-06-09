import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList ({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  console.log(feedback)
  //* Loop through items *//
  return (
    <div className='feedback-list'>
      {feedback.map(item => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        /> //** handleDelete - pass to Feedback Item props */
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default FeedbackList
