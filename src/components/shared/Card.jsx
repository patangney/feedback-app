import PropTypes from 'prop-types';
function Card({children, reverse}) {
  //* setup conditional class */
  return (
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    <div className="card" style={{
      backgroundColor: reverse ? 'rgba(0,0,0,0.4' : '#ffffff',
      color: reverse ? '#ffffff' : '#000'
    }}>{children}</div>
  )
}

Card.defaultProps = {
  reverse: true
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card