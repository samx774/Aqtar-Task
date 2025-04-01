import Image from 'next/image'
import Link from 'next/link'
import axios from '../../lib/axios'
import DeleteButton from '@/app/components/DeleteButton'

export async function generateMetadata({ params }) {
  const res = await axios.get(`/products/${params.id}`)
  const product = res.data

  return {
    title: `${product.title} | Product Details`,
    description: product.description,
  }
}

export default async function ProductDetails({ params }) {
  const { id } = params
  const res = await axios.get(`/products/${id}`)
  const product = res.data

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="mx-auto h-60 object-contain"
          />
          <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
          <p className="text-lg text-gray-600">{product.category}</p>
          <p className="mt-2 text-green-700 font-bold text-xl">${product.price}</p>
          <p className="mt-4 text-gray-800">{product.description}</p>

          <div className="mt-6 flex gap-4">
            <Link
              href={`/product/edit/${product.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Edit Product
            </Link>

            <DeleteButton productId={product.id} />
          </div>
        </div>
      </div>
    </>
  )
}
