/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import CartConnected from "../Cart/Cart";
import { useState } from "react";

function CheckOut({ cartItems }) {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    creditCardNumber: '',
    expirationDate: '',
    cvv: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        errors[key] = 'This field is required';
      }
    });
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log('Valid form, submitted:', formData);
    }
  };


  return (
    <div className="max-w-md mx-auto px-4">

      <form onSubmit={handleSubmit} className="mt-8">
        <label className="block mb-4">
          <span className="text-gray-700">Name:</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          {formErrors.name && <span className="text-red-500">{formErrors.name}</span>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email:</span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Phone:</span>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          {formErrors.phone && <span className="text-red-500">{formErrors.phone}</span>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Adress line 1:</span>
          <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          {formErrors.addressLine1 && <span className="text-red-500">{formErrors.addressLine1}</span>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Adress line 2:</span>
          <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          {formErrors.addressLine2 && <span className="text-red-500">{formErrors.addressLine2}</span>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">City:</span>
          <input type="text" name="city" value={formData.city} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          {formErrors.city && <span className="text-red-500">{formErrors.city}</span>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">State:</span>
          <input type="text" name="state" value={formData.state} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          {formErrors.state && <span className="text-red-500">{formErrors.state}</span>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">PO Box:</span>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          {formErrors.postalCode && <span className="text-red-500">{formErrors.postalCode}</span>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Country:</span>
          <input type="text" name="country" value={formData.country} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          {formErrors.country && <span className="text-red-500">{formErrors.country}</span>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Creditcard Number:</span>
          <input type="text" name="creditCardNumber" value={formData.creditCardNumber} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          {formErrors.creditCardNumber && <span className="text-red-500">{formErrors.creditCardNumber}</span>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Expiration Date:</span>
          <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          {formErrors.expirationDate && <span className="text-red-500">{formErrors.expirationDate}</span>}
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">CVV:</span>
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} className="block w-full mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          {formErrors.cvv && <span className="text-red-500">{formErrors.cvv}</span>}
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Pay</button>
      </form>
      <CartConnected cartItems={cartItems} />

    </div>
  );

}

export default CheckOut;
