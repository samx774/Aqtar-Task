import ProductForm from '@/app/components/ProductForm'
import axios from '../../../lib/axios'
export default async function EditProduct({ params }) {
    const { id } = params
    const res = await axios.get(`products/${id}`)
    const product = res.data
  
    const updateProduct = async (formData) => {
      'use server'
      const res = await axios.put(`products/${id}`, formData)
      return res.data // لازم نرجع الـ ID علشان نعمل redirect
    }
  
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
        <ProductForm initialData={product} onSubmit={updateProduct} isEdit />
      </div>
    )
  }
  export const metadata = {
    title: 'Edit Product',
    description: 'Update product details.',
  }
  