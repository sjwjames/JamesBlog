import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './sidebar.less'

export default class SidebarComponent extends Component {
    render() {
        const { } = this.props;

        return (
            <div className="ui vertical menu">
            {tags.map((tag, index) =>
                        <a key={tag.id} className={'item'+(tag.id===current)}>
                        {tag.name}
                        <div className="ui teal left pointing label">1</div>
                        </a>
                    )}
            </div>
        )
    }
}

SidebarComponent.propTypes = {

};