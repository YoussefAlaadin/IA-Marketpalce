/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }) // Update state with the name of the input field
  }

  const handleSubmit = async (e) => {
    e.preventDefault()  // Prevent the default form submission behavior
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData) // Send form data to the server
      alert(res.data.message)   // Show success message
    } catch (err) {
      alert('Registration failed') // Show error message
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <select
          name="role"
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
        >
          <option value="customer">Customer</option>
          <option value="vendor">Vendor</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
