import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Invitation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare senderId: number

  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'sender_id',
  })
  declare user: BelongsTo<typeof User>

  @column()
  declare receiverId: number

  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'receiver_id',
  })
  declare userr: BelongsTo<typeof User>

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
