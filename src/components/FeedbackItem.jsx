import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card'
import FeedbackContent from '../context/FeedbackContent';


function FeedbackItem ({item}) {
  const {deleteFeedback} = useContext(FeedbackContent)
    
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'><FaTimes color='purple' /></button>
      <button className="edit">
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>      
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem
