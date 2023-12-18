import { error } from '@sveltejs/kit'
import { PUBLIC_BASE_API_URL } from '$env/static/public'
import axios from 'axios'

export async function load({ params }) {
  const response = await axios.get(
    `${PUBLIC_BASE_API_URL}/blogs/${params.id}`
  )

	if (response.data) {
		return {
      post: response.data
    }
	}

	error(404, 'Not found')
}