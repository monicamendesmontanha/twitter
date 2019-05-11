import gql from 'graphql-tag'

export const NEW_TWEET_SUBSCRIPTION = gql`
  subscription newtweets {
    Tweet(
      filter: {
        mutation_in: [CREATED]
      }
    ) {
      mutation
      node {
        id
        message
        author
        createdAt
      }
    }
  }
`