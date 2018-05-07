export const railsBaseUrl = (() => {
  const baseUrl = process.env.REACT_APP_SALESLOFT_API_HOST
  if (!baseUrl) {
    throw new Error("No REACT_APP_SALESLOFT_API_HOST property was set")
  }
  return baseUrl.replace(/\/+$/, '')
})()

export default {
  railsBaseUrl
}
