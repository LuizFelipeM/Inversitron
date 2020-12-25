import { getJsonFile } from '../../commands/init/init'

describe('tron init command', () => {
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

  // it('should write file to path location', () => {
  //   const path = cwd()
  //   const fileName = 'mock.json'
  //   const mockFullPath = join(path, fileName)

  //   const mock = { id: 123, name: 'mock' }
  //   const mockJson = JSON.stringify(mock)

  //   writeFilesToPath(path)(mockJson, fileName)

  //   const json = readFileSync(mockFullPath, 'utf-8')

  //   expect(json).not.toBeNull()
  //   expect(json).not.toBeUndefined()
  //   expect(json).toEqual(mockJson)

  //   const file = JSON.parse(json)

  //   expect(file).toEqual(mock)
  // })
})
