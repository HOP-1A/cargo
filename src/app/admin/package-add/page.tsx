'use client';

import React, { useState } from 'react';

type FormData = {
  packageNumber: string;
  senderName: string;
  senderPhoneNumber: string;
  receiverName: string;
  receiverPhoneNumber: string;
  quantity: number;
  weight: number;
  volume: number;
  cost: number;
  destination: string;
};

const PackageForm = () => {
  const [formData, setFormData] = useState<FormData>({
    packageNumber: '',
    senderName: '',
    senderPhoneNumber: '',
    receiverName: '',
    receiverPhoneNumber: '',
    quantity: 0,
    weight: 0,
    volume: 0,
    cost: 0,
    destination: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'packageNumber' && value.length <= 4) {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    else if (name === 'senderPhoneNumber' || name === 'receiverPhoneNumber') {
      if (value.length <= 8) {
        const formattedPhone = value.replace(/(\d{4})(\d{4})/, "$1-$2");
        setFormData(prev => ({ ...prev, [name]: formattedPhone }));
      }
    }
    else if (name === 'quantity' || name === 'weight' || name === 'volume' || name === 'cost') {
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue) && numericValue >= 0) {
        setFormData(prev => ({ ...prev, [name]: numericValue }));
      }
    } 
    else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.packageNumber || formData.packageNumber.length !== 4 || isNaN(Number(formData.packageNumber))) {
      newErrors.packageNumber = 'Package number must be exactly 4 digits.';
    }
    if (!formData.senderPhoneNumber || formData.senderPhoneNumber.replace(/-/g, '').length !== 8) {
      newErrors.senderPhoneNumber = 'Sender phone number must be exactly 8 digits.';
    }
    if (!formData.receiverPhoneNumber || formData.receiverPhoneNumber.replace(/-/g, '').length !== 8) {
      newErrors.receiverPhoneNumber = 'Receiver phone number must be exactly 8 digits.';
    }
    if (!formData.destination) {
      newErrors.destination = 'Destination is required.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      const sanitizedData = {
        packages: 
          {
            ...formData, 
            senderPhoneNumber: formData.senderPhoneNumber.replace(/-/g, ''),
            receiverPhoneNumber: formData.receiverPhoneNumber.replace(/-/g, ''),
            status: "Pending"
          }
      };

      const response = await fetch("/api/admin/package", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData)
      })

      if (response.ok) {
        setFormData({
          packageNumber: '',
          senderName: '',
          senderPhoneNumber: '',
          receiverName: '',
          receiverPhoneNumber: '',
          quantity: 0,
          weight: 0,
          volume: 0,
          cost: 0,
          destination: '',
        })
        alert('Package created')
      }
      setIsSubmitting(false)
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Package Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label htmlFor="packageNumber" className="block text-sm font-semibold">Package Number (4 digits)</label>
            <input
              id="packageNumber"
              name="packageNumber"
              type="text"
              value={formData.packageNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
              maxLength={4}
            />
            {errors.packageNumber && <p className="text-red-500 text-xs mt-1">{errors.packageNumber}</p>}
          </div>

          <div>
            <label htmlFor="senderName" className="block text-sm font-semibold">Sender Name</label>
            <input
              id="senderName"
              name="senderName"
              type="text"
              value={formData.senderName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
            />
          </div>

          <div>
            <label htmlFor="senderPhoneNumber" className="block text-sm font-semibold">Sender Phone Number (8 digits)</label>
            <input
              id="senderPhoneNumber"
              name="senderPhoneNumber"
              type="text"
              value={formData.senderPhoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
              maxLength={9}
            />
            {errors.senderPhoneNumber && <p className="text-red-500 text-xs mt-1">{errors.senderPhoneNumber}</p>}
          </div>

          <div>
            <label htmlFor="receiverName" className="block text-sm font-semibold">Receiver Name</label>
            <input
              id="receiverName"
              name="receiverName"
              type="text"
              value={formData.receiverName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
            />
          </div>

          <div>
            <label htmlFor="receiverPhoneNumber" className="block text-sm font-semibold">Receiver Phone Number (8 digits)</label>
            <input
              id="receiverPhoneNumber"
              name="receiverPhoneNumber"
              type="text"
              value={formData.receiverPhoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
              maxLength={9}
            />
            {errors.receiverPhoneNumber && <p className="text-red-500 text-xs mt-1">{errors.receiverPhoneNumber}</p>}
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-semibold">Quantity</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              min={0}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
            />
            {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
          </div>

          <div>
            <label htmlFor="weight" className="block text-sm font-semibold">Weight</label>
            <input
              id="weight"
              name="weight"
              type="number"
              step="0.1"
              value={formData.weight}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
            />
            {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight}</p>}
          </div>

          <div>
            <label htmlFor="volume" className="block text-sm font-semibold">Volume</label>
            <input
              id="volume"
              name="volume"
              type="number"
              step="0.1"
              value={formData.volume}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
            />
            {errors.volume && <p className="text-red-500 text-xs mt-1">{errors.volume}</p>}
          </div>

          <div>
            <label htmlFor="cost" className="block text-sm font-semibold">Cost</label>
            <input
              id="cost"
              name="cost"
              type="number"
              value={formData.cost}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
            />
            {errors.cost && <p className="text-red-500 text-xs mt-1">{errors.cost}</p>}
          </div>

          <div>
            <label htmlFor="destination" className="block text-sm font-semibold">Destination</label>
            <input
              id="destination"
              name="destination"
              type="text"
              value={formData.destination}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mt-1"
            />
            {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
              disabled={isSubmitting}
            >
            {isSubmitting ? 'Submitting...' : 'Submit Package Information'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default PackageForm
