import { getFullDirPath, getJsonFile } from '../../commands/init/init'

describe('tron init command', () => {
  it('should get full directory path without parameter', () => {
    const path = getFullDirPath()

    expect(path).not.toBeNull()
    expect(path).not.toBeUndefined()
    expect(path).toEqual(expect.stringContaining('tronconfig.json'))
  })

  it('should get full directory path with parameter', () => {
    const pathParam = 'src/test'
    const path = getFullDirPath(pathParam)

    expect(path).not.toBeNull()
    expect(path).not.toBeUndefined()
    expect(path).toEqual(expect.stringContaining('tronconfig.json'))
    expect(path).toEqual(expect.stringContaining(pathParam))
  })

  it('should return json string', () => {
    const obj = {
      id: 123,
      name: 'test',
      anything: [1, 2, 3]
    }

    const json = getJsonFile(obj)

    expect(json).not.toBeNull()
    expect(json).not.toBeUndefined()
    expect(json).toEqual(expect.stringContaining(JSON.stringify(obj, null, 2)))
  })
})
