import { injectable, unmanaged } from 'inversify'
import { DeepPartial, DeleteResult, EntityTarget, FindConditions, getRepository, Repository } from 'typeorm'
import { IAbstractEntity } from '../entities/AbstractEntity'

@injectable()
export abstract class AbstractRepository<T extends IAbstractEntity> {
  protected readonly session: Repository<T>

  constructor (
    @unmanaged()
      entity: EntityTarget<T>
  ) { this.session = getRepository(entity) }

  select = async (where?: FindConditions<T>): Promise<T[]> => await this.session.find(where)

  selectById = async (id: number): Promise<T | undefined> => await this.session.findOne(id)

  insertOrUpdate = async (data: DeepPartial<T>): Promise<{ id: number | string }> => await this.session.save(data)

  delete = async (removeCriteria: string | number | FindConditions<T> | string[] | number[] | Date | Date[]): Promise<DeleteResult> => await this.session.delete(removeCriteria)
}
