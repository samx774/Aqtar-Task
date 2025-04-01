import ProductForm from '../../components/ProductForm'
import axios from '../../lib/axios'

export default function CreateProductPage() {
  const createProduct = async (formData) => {
    'use server'
    const res = await axios.post('products', formData)
    return res.data // لازم يرجّع id عشان نعمل redirect
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <ProductForm onSubmit={createProduct} />
    </div>
  )
}
export const metadata = {
    title: 'Add New Product',
    description: 'Create a new product and add it to the list.',
  }
  