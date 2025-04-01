🛍️ Products CRUD App

A simple and clean full-stack CRUD application built with Next.js (App Router), Tailwind CSS, Axios, Formik + Yup, and FakeStoreAPI.

This project was created as a technical task for a React/Next.js developer position.

🚀 Features

✅ Display all products with image, title, and price

🔍 View product details with description and category

✏️ Edit existing products (Formik form with validation)

➕ Add new products

❌ Delete products with confirmation

🔁 Loading indicators and client-side validation

🔔 Success/error notifications with react-hot-toast

📦 API handled via Axios with interceptors

⚡ SEO & performance optimized via generateMetadata and next/image

🧰 Tech Stack

Framework: Next.js (App Router)

Styling: Tailwind CSS

Forms: Formik + Yup

HTTP Client: Axios

Notifications: React Hot Toast

API: https://fakestoreapi.com

📁 Project Structure

/app
  /product
    /[id]         -> Product details page
    /edit/[id]    -> Edit product page
    /new          -> Add product page
/components
  ProductForm.js  -> Formik form used for create/edit
  DeleteButton.js -> Delete product logic
/lib
  axios.js        -> Axios instance with interceptors

🧪 Local Setup

# 1. Clone the repository
https://github.com/samx774/Aqtar-Task.git

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

Visit http://localhost:3000 to view the app.

🌐 Live Demo

You can try the app live here 👉 https://aqtar-task.vercel.app/

🙋‍♂️ Author

Built with ❤️ by [Your Name].

