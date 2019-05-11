import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Container, Row, Col } from 'react-bootstrap'
import { TWITTER_FEED_QUERY } from './data/queries'
import TweetList from './components/TweetList'

class TwitterFeed extends Component {

    render() {
      const { author, tweets } = this.props

      console.log('tweets:', tweets)

      return (
          <div>
            <Container>
              <Row>
                <Col md={5}>
                  Form will go here
                </Col>
                <Col md={7}>
                  <TweetList tweets={tweets.allTweets} />
                </Col>
              </Row>
            </Container>
          </div>
      )
    }

}

export default compose(
  graphql(TWITTER_FEED_QUERY, {
    name: 'tweets'
  })

)(TwitterFeed)