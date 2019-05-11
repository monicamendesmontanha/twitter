import React from 'react'

const TweetList = (props) => {
  // console.log('tweets:', props.tweets)
  if(props.loading) {
    return<div>We're loading...</div>
  }

  return props.tweets.map(tweet => (
    <div key={tweet.id}>
      <h5>{tweet.author }</h5>
      <div>{tweet.message }</div>
    </div>
    ))
}

export default TweetList;