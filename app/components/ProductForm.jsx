'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

export default function ProductForm({ initialData = {}, onSubmit, isEdit = false }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    image: Yup.string().url('Invalid image URL'),
  })

  const initialValues = {
    title: initialData.title || '',
    price: initialData.price || '',
    description: initialData.description || '',
    category: initialData.category || '',
    image: initialData.image || '',
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await onSubmit(values)

      toast.success(
        response.message ||
        (isEdit
          ? 'Product updated successfully!'
          : `Product "${response.title}" created successfully!`)
      )
      startTransition(() => {
        isEdit ? router.push(`/product/${response.id}`) : router.push('/')
      })
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {() => (
        <Form className="space-y-4">
          <div>
            <Field
              name="title"
              type="text"
              placeholder="Product Title"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              name="price"
              type="number"
              placeholder="Price"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="price"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              name="image"
              type="text"
              placeholder="Image URL"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="image"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              name="category"
              type="text"
              placeholder="Category"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="category"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              name="description"
              as="textarea"
              placeholder="Description"
              rows="4"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={`${isPending ? 'opacity-50 cursor-not-allowed' : ''
              } bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700`}
          >
            {isPending ? 'Loading...' : isEdit ? 'Update' : 'Create'}
          </button>
        </Form>
      )}
    </Formik>
  )
}
