import axios from 'axios'

export const getListProducts = async () => {
  try {
    const response = await axios.get('https://n8n.comacpro.vn/webhook/3ca93579-8972-4540-b3fa-b50a3058f732')
    return response.data
  } catch (error) {
    console.error('Error fetching product list:', error)
    throw error
  }
}
