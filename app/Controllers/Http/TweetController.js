'use strict'
const Tweet = use('App/Models/Tweet')

class TweetController {
    async index({ response }) {
    const tweets = await Tweet.all()

    response.status(200).json({
      message: 'Here are your tweets.',
      data: tweets
    })
  }
    
  async store({ request, response }) {
    const { tweet, tags } = request.post()

    const tweets = await Tweet.create({ tweet })

    if (tags && tags.length > 0) {
      await tweets.tags().attach(tags)
      tweets.tags = await tweet.tags().fetch()
    }
    tweets.save()
    response.status(201).json({
      message: 'Successfully created a new tweet.',
      data: tweets
    })
  }

}

module.exports = TweetController
