import { redirect } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '$env/static/private'

export async function handle({ event, resolve }) {
  try {
    if (event.url.pathname.includes('/edit')) {
      const token = event.cookies.get('token')
      const decoded = jwt.verify(token, JWT_SECRET_KEY)
      event.locals.user = decoded
    }
    const response = await resolve(event)
    return response
  } catch (error) {
    console.log('error', error)
  }

  redirect(302, '/')
}