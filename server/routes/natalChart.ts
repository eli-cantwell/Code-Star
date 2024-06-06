
import request from "superagent";
import express from 'express'
import { FormData } from "../../models/formData";
import { NatalChart } from "../../models/natalChart";

const router = express.Router()
const BEARER_ACCESS = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxNzY2ODQwNSwibmJmIjoxNzE3NjY4NDA1LCJqdGkiOiJ4alhBMjdIMFNsVnpGWmc3Iiwic3ViIjoiMTkzOCIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.lWjk91YFSbnkgdzrVG1YsD9U2g1heiCfHqbA9d4tuU0'

//ad4cc1fb9b068faecfb70914acc63395

// const {data } = useQuery
// //client
// react component
// useQuery({
//   return queryfn: () => {
//     request.post('api/v1/chart')
//     .send(form) // req.body (payload)
//   }
//  return (
// <p>{data.moon}</p>
// )
// })

router.post('/', async (req, res) => {
  try {
    const payload: FormData = req.body
    const data = await request.post('https://astroapi-4.divineapi.com/western-api/v1/planetary-positions')
    .auth(BEARER_ACCESS, {type: 'bearer'})
    .send(payload)
    res.json(data.body as NatalChart)
  } catch(err) {
    console.error(err)
    res.status(500).json({error: err})
  }
})

export default router

