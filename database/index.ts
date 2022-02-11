import * as auth from './src/auth.query'
import * as post from './src/post.query'

export const Query = {
  ...auth,
  ...post,
}
