import { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'

export function ProfileScreen() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="space-y-6 pb-20">
      <h1 className="text-2xl font-display font-semibold text-text-primary">Profile</h1>

      <div className="card p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
            <UserCircleIcon className="w-12 h-12 text-primary-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-text-primary">Your Profile</h2>
            <p className="text-text-secondary">Manage your personal information</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="input"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="input"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-text-primary mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="input min-h-[100px] resize-none"
              placeholder="Tell us about yourself"
            />
          </div>
        </div>

        <button className="btn btn-primary w-full mt-6">
          Save Changes
        </button>
      </div>
    </div>
  )
} 