import { runInversitronApp } from '../../commands/dev/dev'

describe('tron dev command', () => {
  it('should not run dev environment', () => {
    expect(runInversitronApp).toThrow()
  })
})
