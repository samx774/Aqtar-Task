import Image from "next/image";
import styles from "./page.module.css";
import axios from './lib/axios'
import Link from "next/link";

export const metadata = {
  title: 'Products | Home',
  description: 'Browse all available products in our fake store.',
}

export default async function Home() {
  const res = await axios.get('/products')
  const products = res.data
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <Link
          href="/product/new"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Product
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="bg-white p-4 rounded shadow hover:shadow-md transition"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="mx-auto h-40 object-contain"
            />
            <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
            <p className="text-blue-600 font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
