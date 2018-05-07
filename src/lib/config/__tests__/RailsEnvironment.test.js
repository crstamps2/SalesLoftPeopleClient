import RailsEnvironment from '../RailsEnvironment'

describe('#railsBaseUrl', () => {
  it('reads contracts api host from config', () => {
    // Value comes from .env.test file in project root
    const expected = 'https://test.example.com'

    expect(RailsEnvironment.railsBaseUrl).toEqual(expected)
  })
})
