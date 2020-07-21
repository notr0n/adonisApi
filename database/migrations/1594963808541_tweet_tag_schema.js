'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TweetTagSchema extends Schema {
  up () {
    this.create('tweet_tag', (table) => {
        table.increments()
        table.integer('tweet_id').unsigned().notNullable()
        table.integer('tag_id').unsigned().notNullable()
        table.timestamps()
    })
}

  down () {
    this.table('tweet_tag', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TweetTagSchema
