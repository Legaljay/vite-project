import PropTypes from 'prop-types'
import { PropTest } from './PropTest'


const Welcome = ({alert, message}) => {
  return (
    <div>
        Welcome
        <button onClick={alert} >click me</button>
        <p className='text-5xl'>{message}</p>
        <PropTest text = {message} />
    </div>
  )
}

Welcome.propTypes = {
  alert: PropTypes.string,
  message: PropTypes.string
}
export default Welcome
