'use strict'
const Tag = use('App/Models/Tag')


class TagController {
    async store({ request, response }) {
        const tag = await Tweet.create({ tag })

        return response.status(201).json({
          message: 'Successfully created a new tag.',
          data: tag
        })
      }

}

module.exports = TagController
