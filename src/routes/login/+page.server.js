import { fail, redirect } from '@sveltejs/kit'
import { JWT_SECRET_KEY, BASE_API_URL } from '$env/static/private'

import jwt from 'jsonwebtoken'
import axios from 'axios'

export const actions = {
  login: async ({ cookies, request, params }) => {
    const data = await request.formData()
    try {
      // check user
      const response = await axios.get(`${BASE_API_URL}/users`)
      const seletedUser = response.data.find(d => d.email === data.get('email'))

      if (
        !seletedUser ||
        (seletedUser && (seletedUser.password !== data.get('password')))
      ) {
        throw new Error('User not Found')
      }


      const token = jwt.sign(
        {
          email: seletedUser.email,
          id: seletedUser.id
        },
        JWT_SECRET_KEY,
        { expiresIn: '1h' }
      )
      cookies.set('token', token, {
        path: '/',
        maxAge: 60 * 60 * 1,
        httpOnly: true
      })
    }  catch (error) {
			return fail(422, {
				error: error.message
			})
		}

    redirect(302, '/')
  }
}