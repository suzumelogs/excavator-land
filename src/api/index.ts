import axios from 'axios'

export const getListProductsPreorder = async () => {
  try {
    const response = await axios.get(
      'https://n8n.comacpro.vn/webhook/3ca93579-8972-4540-b3fa-b50a3058f732?type=preorder'
    )
    return response.data
  } catch (error) {
    console.error('Error fetching product list:', error)
    throw error
  }
}

export const getListProducts = async () => {
  try {
    const response = await axios.get('https://n8n.comacpro.vn/webhook/3ca93579-8972-4540-b3fa-b50a3058f732')
    return response.data
  } catch (error) {
    console.error('Error fetching product list:', error)
    throw error
  }
}

export const sendMailContact = async (name: string, phone: string, message: string) => {
  try {
    const payload = {
      name,
      phone,
      message
    }

    const response = await axios.post('https://n8n.comacpro.vn/webhook/440ac0cb-8bbd-4cda-a22c-0de872ebe814', payload)
    return response.data
  } catch (error) {
    console.error('Error sending mail contact:', error)
    throw error
  }
}
