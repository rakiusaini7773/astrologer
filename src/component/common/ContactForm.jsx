import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  // Initialize the useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    // You can handle form data here, e.g., send it to a server
    console.log(data);
  };

  return (
    <div className="relative w-full h-full bg-gray-800 text-white p-6 flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-4">GET IMMEDIATE SOLUTION NOW</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 mt-1 rounded text-black"
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm">E-mail Id</label>
          <input
            type="email"
            {...register('email', { required: 'E-mail is required' })}
            className="w-full p-2 mt-1 rounded text-black"
            placeholder="Your E-mail"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm">Phone Number</label>
          <input
            type="tel"
            {...register('phone', { required: 'Phone number is required' })}
            className="w-full p-2 mt-1 rounded text-black"
            placeholder="Your Phone Number"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm">City</label>
          <input
            type="text"
            {...register('city', { required: 'City is required' })}
            className="w-full p-2 mt-1 rounded text-black"
            placeholder="Your City"
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
        </div>
        <div>
          <label className="block text-sm">Your Query</label>
          <textarea
            {...register('query', { required: 'Query is required' })}
            className="w-full p-2 mt-1 rounded text-black"
            placeholder="Your Query"
            rows="4"
          />
          {errors.query && <p className="text-red-500 text-xs mt-1">{errors.query.message}</p>}
        </div>
        <div>
          <label className="block text-sm">Security Code</label>
          <input
            type="text"
            {...register('securityCode', { required: 'Security code is required' })}
            className="w-full p-2 mt-1 rounded text-black"
            placeholder="Security Code"
          />
          {errors.securityCode && <p className="text-red-500 text-xs mt-1">{errors.securityCode.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded mt-2 w-full"
        >
          SUBMIT NOW
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
