import { useState } from 'react'

const ChangePassword = ({ onBack }) => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleChangePassword = (e) => {
    e.preventDefault()
    
    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match')
      return
    }
    
    // Get current password from localStorage
    const storedPassword = localStorage.getItem('adminPassword') || 'admin123'
    
    if (currentPassword !== storedPassword) {
      setMessage('Current password is incorrect')
      return
    }
    
    // Save new password
    localStorage.setItem('adminPassword', newPassword)
    setMessage('Password changed successfully!')
    setTimeout(() => onBack(), 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-navy mb-6">Change Password</h2>
        
        {message && (
          <div className={`p-2 rounded mb-4 text-center ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}
        
        <form onSubmit={handleChangePassword}>
          <input
            type="password"
            placeholder="Current Password"
            className="w-full border p-2 rounded mb-3"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full border p-2 rounded mb-3"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full border p-2 rounded mb-4"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-gold text-navy py-2 rounded font-semibold">
            Update Password
          </button>
          <button
            type="button"
            onClick={onBack}
            className="w-full mt-2 text-gray-500 py-2 rounded"
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword