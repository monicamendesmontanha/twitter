import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Container, Row, Col } from 'react-bootstrap'
import { TWITTER_FEED_QUERY } from './data/queries'
import { NEW_TWEET_SUBSCRIPTION } from './data/subscriptions'
import TweetList from './components/TweetList'
import TweetForm from './components/TweetForm'

class TwitterFeed extends Component {

  componentDidMount() {
    this.props.tweets.subscribeToMore({
      document: NEW_TWEET_SUBSCRIPTION,
      updateQuery: (prevData, {subscriptionData }) => {
        if(!subscriptionData.data) {
          return prevData
        }
      const newTweetItem = subscriptionData.data.Tweet.node
      return {
        ...prevData,
        allTweets: [
          newTweetItem,
          ...prevData.allTweets
        ]
      }
    }
    })
  }

  handleSubmitSucess = () => {
    this.props.tweets.refetch()
  }

    render() {
      const { author, tweets } = this.props

      // console.log('tweets:', tweets)

      return (
          <div>
            <Container>
              <Row>
                <Col md={5}>
                  <TweetForm
                    handleSubmitSucess={ this.handleSubmitSucess }
                    author={author}
                  />
                </Col>
                <Col md={7}>
                  <TweetList tweets={tweets.allTweets}
                  loading={tweets.loading}
                  />
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