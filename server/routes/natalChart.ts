// .set('Content-Type', 'multipart/form-data')
// .send(yourFormData)
import request from 'superagent'

const API = async (req, res) => {
  const formData = req.body
  const api_key = '{ad4cc1fb9b068faecfb70914acc63395}'

  const response = await request
    .post('https://astroapi-4.divineapi.com/western-api/v1/planetary-positions')
    .set('Authorization', 'Bearer {Your Auth Token}')
    .set('Content-Type', 'multipart/form-data')
    .send(formData)

  res.json(response.body)
}

export default API
