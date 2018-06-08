import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TagComponent extends Component{
    
}

TagComponent.propTypes = {
    tags:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            category: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
}