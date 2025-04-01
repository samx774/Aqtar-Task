'use client'

import axios from '../lib/axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function DeleteButton({ productId }) {
  const router = useRouter()

  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this product?')
    if (!confirm) return

    try {
      await axios.delete(`products/${productId}`)
      toast.success('Product deleted successfully')
      router.push('/')
    } catch (err) {
      toast.error('Failed to delete product')
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Delete
    </button>
  )
}
