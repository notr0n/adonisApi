'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tweet extends Model {
    tags() {
        return this.belongsToMany('App/Models/Tag').pivotTable('tweet_tag')
      }
}

module.exports = Tweet
