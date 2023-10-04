import PropTypes from 'prop-types'

export const PropTest = ({text}) => {
  return (
    <div className='text-2xl text-gray-50'>{text}</div>
  )
}

PropTest.propTypes = {
  text: PropTypes.string
}