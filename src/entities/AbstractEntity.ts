import { PrimaryGeneratedColumn } from 'typeorm'

export interface IAbstractEntity {
  id: string | number
}

export abstract class AbstractSerialEntity implements IAbstractEntity {
  @PrimaryGeneratedColumn('increment')
  id: number
}

export abstract class AbstractUuidEntity implements IAbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string
}
