import database from '../../db.json'
import axios from 'axios'

const randomToken = () =>
  Math.random()
    .toString(36)
    .substr(2)
    .toUpperCase()

export default function handle(req, res) {
  const { method, body, query } = req

  if (method === 'GET') {
    const user = database.users.find(value => value.token === query.token)
    if (user) {
      res.status(200).json({ user })
    } else {
      res.status(404).json({ error: 'user not found' })
    }
  }

  if (method === 'POST') {
    const user = database.users.find(
      value => value.email === body.email && value.password === body.password,
    )
    if (user) {
      const token = randomToken() + randomToken()
      const newUser = { ...user, token }
      axios.put(`http://localhost:3004/users/${user.id}`, newUser)
      res.status(200).json({ user: newUser })
    } else {
      res.status(401).json({ error: 'Unauthorized' })
    }
  }
}
