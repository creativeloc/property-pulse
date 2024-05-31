"use client"
import { useState, useEffect } from "react"
import PropertyCard from "@/components/PropertyCard"
import Spinner from "@/components/Spinner"
import { toast } from "react-toastify"

const SavedPropertiesPage = () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
      } catch (error) {}
    }
  }, [])

  return <div>SavedPropertiesPage</div>
}
export default SavedPropertiesPage
