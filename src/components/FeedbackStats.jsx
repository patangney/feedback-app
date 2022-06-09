import PropTypes from 'prop-types'

function FeedbackStats ({ feedback }) {
  function roundToTwo (num) {
    return +(Math.round(num + 'e+2') + 'e-2')
  }
  //calculate average rating
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length
  console.log(roundToTwo(average))

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average Rating: {isNaN(roundToTwo(average)) ? 0 : roundToTwo(average)}
      </h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats
