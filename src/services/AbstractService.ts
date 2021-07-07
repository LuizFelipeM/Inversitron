import { AbstractRepository } from '../repositories/AbstractRepository'
import { injectable } from 'inversify'
import { AbstractSerialEntity } from '../entities/AbstractEntity'
import { DeepPartial, DeleteResult, FindConditions } from 'typeorm'

type Repository<T extends AbstractSerialEntity> = AbstractRepository<T>

@injectable()
export abstract class AbstractService<T extends AbstractSerialEntity, R extends Repository<T>> {
  constructor (private readonly repository: R) {}

  getAll = async (search?: FindConditions<T>): Promise<T[]> => await this.repository.select(search)

  getById = async (id: number): Promise<T | undefined> => await this.repository.selectById(id)

  saveOrUpdate = (data: DeepPartial<T>): Promise<{ id: number | string }> => this.repository.insertOrUpdate(data)

  remove = (data: T): Promise<DeleteResult> => this.repository.delete(data.id)
}
