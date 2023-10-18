import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
  const {date} = req.body

  if (req.headers['content-type']?.toLowerCase() !== "application/json" && !req.body.hasOwnProperty("data")) {
    res.status(400).end()
    return
}

  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

    let values = {
      nome: date.nome,
      sobrenome: date.sobrenome,
      region: date.region,
      city: date.city,
      date: date.date,
      time: date.time,
      pokemons:[date.pokemons]
    }
   

    res.status(200).json({date: values.date, time: values.time})
}