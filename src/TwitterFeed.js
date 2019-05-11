import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Container, Row, Col } from 'react-bootstrap'
import { TWITTER_FEED_QUERY } from './data/queries'

class TwitterFeed extends Component {

    render() {
      const { author, tweets } = this.props
      return (
          <div>
            <Container>
              <Row>
                <Col md={5}>
                  Form will go here
                </Col>
                <Col md={7}>
                  Tweets will go here
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