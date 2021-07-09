import { PrimaryGeneratedColumn } from 'typeorm'
import { EntityID } from '../types/EntityIDType'

export interface IAbstractEntity {
  id: EntityID
}

export abstract class AbstractSerialEntity implements IAbstractEntity {
  @PrimaryGeneratedColumn('increment')
  id: number
}

export abstract class AbstractUuidEntity implements IAbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string
}
