import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Card } from '../Card/Card'

export const AboutUs = () => {

    const [loading, setLoading] = useState(false)
    const [call, setCall] = useState(false)

    const url = "https://random-data-api.com/api/users/random_user?size=4"

    const llamadaAPI = async () => {
        setLoading(true)
        try {
            const call = await axios.get(url)
            const response = await call.data
            console.log(response)
            setCall(response)
        }catch(error){
            console.log("Error", error)
        }finally{
            setLoading(false)
        }
    }

  return (
    <>
    <button onClick={llamadaAPI}>Llamar API</button>
    {loading && <h2>Loading...</h2>}
    {call && call.map((user, index) => {
        return <Card key={index} user={user} />
    })}
    </>
  )
}
