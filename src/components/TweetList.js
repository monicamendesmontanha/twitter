import React from 'react'

const TweetList = (props) => {
  // console.log('tweets:', props.tweets)
  if(props.loading) {
    return<div>We're loading...</div>
  }

  return props.tweets.map(tweet => (
    <div className="tweet-list__twee--container" key={`tweet_${tweet.id}`}>
      <h5 className="tweet-list__twee--author" >{tweet.author }</h5>
      <span className="tweet-list__twee--message" >{tweet.message }</span>
    </div>
    ))
}

export default TweetList;