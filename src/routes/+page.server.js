import { error } from '@sveltejs/kit'
import { BASE_API_URL } from '$env/static/private'
import axios from 'axios'

export async function load() {
	const response = await axios.get(`${BASE_API_URL}/blogs`)

	if (response.data) {
		return {
      posts: response.data
    }
	}

	error(404, 'Not found')
}