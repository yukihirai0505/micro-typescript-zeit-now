import micro, { send } from 'micro'
import {router, get, ServerResponse, ServerRequest} from 'microrouter'

const hello = () => 'Hello World!'
const notFound = (_: ServerRequest, res: ServerResponse) => send(res, 404, 'Not found route')

const handler = router(
  get('/', hello),
  get('/*', notFound)
)

const server = micro(handler)

server.listen()
