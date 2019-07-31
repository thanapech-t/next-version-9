import database from '../../db.json'
import axios from 'axios'

export default function handle(req, res) {
  const { method, body, query } = req
  console.log('method =>>>>>>>>>>>>>>>>>>>>>>>>>>>!!!', method, query)
  if (method === 'GET') {
    if (query.id) {
      axios.delete(`http://localhost:3004/comments/${query.id}`)
      res.status(200).json({ status: 'delete comment done' })
    } else {
      const comments = database.comments
      res.status(200).json(comments)
    }
  }

  if (method === 'POST') {
    if (body.id) {
      if (body.tweet) {
        const newComment = {
          tweet: body.tweet,
          name: body.name,
          surname: body.surname,
          avatar: body.avatar,
        }
        axios.post(`http://localhost:3004/comments/`, newComment)
        res.status(201).json({ status: 'Created comment', data: newComment })
      } else {
        res.status(401).json('Bad request')
      }
    } else {
      res.status(401).json('Bad request')
    }
  }
}
