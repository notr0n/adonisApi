'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tag extends Model {
    tweets() {
        return this.belongsToMany('App/Models/Tweet').pivotTable('tweet_tag')
      }
}

module.exports = Tag
