'use client'

import { useState } from 'react'

export default function ProductPage() {
  const [step, setStep] = useState(0)
  const [paymentMode, setPaymentMode] = useState('')
  const [address, setAddress] = useState('')
  const [pin] = useState(() => Math.floor(100000 + Math.random() * 900000))
  const [returnPin] = useState(() => Math.floor(100000 + Math.random() * 900000))

  const nextStep = () => setStep((prev) => prev + 1)

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Product Name</h1>
      <img src="https://source.unsplash.com/600x400/?product" alt="Product" className="mb-4 rounded-lg shadow" />
      <p className="text-lg font-semibold mb-2">₱998</p>

      {step === 0 && (
        <button className="btn btn-primary" onClick={nextStep}>Buy</button>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <label className="block">
            <span className="font-medium">Choose Payment Mode:</span>
            <select
              className="select select-bordered w-full mt-2"
              onChange={(e) => setPaymentMode(e.target.value)}
              value={paymentMode}
            >
              <option disabled value="">Select...</option>
              <option value="Gcash">Gcash</option>
              <option value="COD">Cash on Delivery</option>
              <option value="Card">Credit/Debit Card</option>
            </select>
          </label>
          <button className="btn btn-primary" disabled={!paymentMode} onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <label className="block">
            <span className="font-medium">Shipping Address:</span>
            <input
              type="text"
              className="input input-bordered w-full mt-2"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <button className="btn btn-primary" disabled={!address} onClick={nextStep}>Place Order</button>
        </div>
      )}

      {step === 3 && (
        <div className="alert alert-info shadow-lg">
          ⏳ Waiting for seller confirmation...
        </div>
      )}

      {step === 4 && (
        <div className="alert alert-success shadow-lg">
          ✅ Seller confirmed! Product handed to shipper.
          <br />
          📦 Your delivery PIN: <strong>{pin}</strong>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-4">
          <div className="alert alert-warning shadow-lg">
            📬 Product received. Confirm action:
          </div>
          <div className="flex gap-4">
            <button className="btn btn-success" onClick={() => setStep(7)}>Accept</button>
            <button className="btn btn-error" onClick={() => setStep(6)}>Reject</button>
          </div>
        </div>
      )}

      {step === 6 && (
        <div className="alert alert-info shadow-lg">
          🔁 Product will be returned to seller.
          <br />
          🚚 Return shipping PIN: <strong>{returnPin}</strong>
        </div>
      )}

      {step === 7 && (
        <div className="alert alert-success shadow-lg">
          🎉 Transaction complete! Thank you for your purchase.
        </div>
      )}

      {/* Control for mocking seller confirmation */}
      {(step === 3 || step === 6) && (
        <button
          className="btn btn-secondary mt-4"
          onClick={nextStep}
        >
          (Mock) Continue to Next Step →
        </button>
      )}
    </div>
  )
}