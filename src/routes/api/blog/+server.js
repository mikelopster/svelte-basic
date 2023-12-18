import { json } from '@sveltejs/kit'
import axios from 'axios'
import { BASE_API_URL } from '$env/static/private'

export async function GET() {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/blogs`
    )
  
    if (response.data) {
      return json({
        post: response.data
      })
    }
  } catch (error) {
    console.log('error', error)
    return json([])
  }
}