import gql from 'graphql-tag'

export const TWITTER_FEED_QUERY =  gql`
  query allTweets {
    allTWeets {
      id
      message
      author
      createdAt
    }
  }
`