import gql from 'graphql-tag'

export const TWITTER_FEED_QUERY =  gql`
  query allTweets {
    allTweets (
      orderBy: createdAt_DESC
    ) {
      id
      message
      author
      createdAt
    }
  }
`