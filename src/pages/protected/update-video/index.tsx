import React from 'react'
import PropTypes from 'prop-types'
import { useTokenValidation } from 'shared/hooks/usTokenValidation'

const UpdateVideo = props => {
    useTokenValidation()
  return (
    <div>UpdateVideo</div>
  )
}

UpdateVideo.propTypes = {}

export default UpdateVideo;