import React from 'react'
import PropTypes from 'prop-types'
import './remoteController.scss'

const RemoteController = ({title,plusCallBack,minusCallBack}) => {
  // Common remote control component helps to increment and decrement the values
  return (
    <div className='controller'>
        <div className="title">{title}</div>
        <div className="plus" onClick={plusCallBack}>+</div>
        <div className="minus" onClick={minusCallBack}>-</div>
    </div>
  )
}

RemoteController.propTypes = {
    title: PropTypes.string,
    plusCallBack: PropTypes.func,
    minusCallBack: PropTypes.func
}

export default RemoteController