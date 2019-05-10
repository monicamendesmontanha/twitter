import React, { Component } from 'react'

class TwitterFeed extends Component {

    render() {
        const { author } = this.props
        return (
            <div>
                Hi, {author}!
            </div>
        )
    }
}

export default TwitterFeed