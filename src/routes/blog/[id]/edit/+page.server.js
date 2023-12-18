import { fail, error } from '@sveltejs/kit'
import { BASE_API_URL } from '$env/static/private'
import axios from 'axios'

export async function load({ params, locals }) {
  console.log('user', locals.user)
  const response = await axios.get(
    `${BASE_API_URL}/blogs/${params.id}`
  )

	if (response.data) {
		return {
      post: response.data
    }
	}

	error(404, 'Not found')
}

export const actions = {
	update: async ({ cookies, request, params }) => {
    const data = await request.formData()

    try {
      await axios.put(
        `${BASE_API_URL}/blogs/${params.id}`,
        {
          name: data.get('post-name')
        }
      )
		} catch (error) {
			return fail(422, {
				description: data.get('post-name'),
				error: error.message
			})
		}
	},
};