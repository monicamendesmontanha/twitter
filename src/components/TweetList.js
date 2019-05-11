import React from 'react'

const TweetList = (props) => {
  // console.log('tweets:', props.tweets)
  if(props.loading) {
    return<div>We're loading...</div>
  }

  return props.tweets.map(tweet => (
    <div className="tweet-list__tweet--container" key={`tweet_${tweet.id}`}>
      <h5 className="tweet-list__tweet--author" >{tweet.author }</h5>
      <span className="tweet-list__tweet--message" >{tweet.message }</span>
      <div className="tweet-list__tweet--createdAt" >{tweet.createdAt }</div>
    </div>
    ))
}

export default TweetList;