import React, { useState, useEffect } from 'react';
import { groups } from '../mock/data';

type Profile = {
  name: string;
  role: string;
  grade: string;
  interests: string[];
  photo?: string; // data URL
  mutedGroupIds?: string[];
};

const SettingsPage: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('userProfile');
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  const saveProfile = (p: Profile) => {
    setProfile(p);
    localStorage.setItem('userProfile', JSON.stringify(p));
  };

  const handlePhoto: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (profile) saveProfile({ ...profile, photo: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const toggleMute = (groupId: string) => {
    if (!profile) return;
    const muted = profile.mutedGroupIds || [];
    const newMuted = muted.includes(groupId)
      ? muted.filter((id) => id !== groupId)
      : [...muted, groupId];
    saveProfile({ ...profile, mutedGroupIds: newMuted });
  };

  if (!profile) return <p className="p-6 text-gray-500">No profile found.</p>;

  return (
    <div className="p-6 pb-20 space-y-6">
      <h1 className="text-xl font-bold">Settings</h1>

      {/* Profile picture */}
      <div>
        <h2 className="font-semibold mb-2">Profile Picture</h2>
        {profile.photo ? (
          <img
            src={profile.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
        ) : (
          <p className="text-sm text-gray-500 mb-2">No photo set.</p>
        )}
        <input type="file" accept="image/*" onChange={handlePhoto} />
      </div>

      {/* Muted groups */}
      <div>
        <h2 className="font-semibold mb-2">Mute Groups</h2>
        <ul className="space-y-2">
          {groups.map((g) => (
            <li key={g.id} className="flex items-center justify-between border p-2 rounded">
              <span>{g.name}</span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={profile.mutedGroupIds?.includes(g.id) || false}
                  onChange={() => toggleMute(g.id)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SettingsPage; 