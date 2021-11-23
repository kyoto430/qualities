import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import EditForm from '../components/ui/editForm'
import qualityService from '../services/quality.service'
import { toast } from 'react-toastify'

const EditQualityPage = () => {
  const id = useParams().id
  const [quality, setQuality] = useState(null)

  const updateQuality = async (content) => {
    try {
      const data = await qualityService.update(id, content)
      return data.content
    } catch (error) {
      const { message } = error.response.data
      toast.error(message)
    }
  }

  const getQuality = async (id) => {
    try {
      const data = await qualityService.get(id)
      console.log(data)
      return data.content
    } catch (error) {
      const { message } = error.response.data
      toast.error(message)
    }
  }

  const handleSubmit = (data) => {
    updateQuality(data)
  }

  useEffect(() => {
    getQuality(id).then((data) => setQuality(data))
  }, [])

  return (
    <>
      <h1>Edit Quality Page</h1>{' '}
      {quality !== null ? (
        <EditForm data={quality} onSubmit={handleSubmit} />
      ) : (
        'Loading...'
      )}
    </>
  )
}

export default EditQualityPage
