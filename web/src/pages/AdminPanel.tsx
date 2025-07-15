import React, { useState, useEffect } from 'react';
import { groups, posts as mockPosts } from '../mock/data';
import MediaPicker from '../components/MediaPicker';

type Scheduled = {
  id: string;
  groupId: string;
  content: string;
  at: string; // ISO
};

const AdminPanel: React.FC = () => {
  const [content, setContent] = useState('');
  const [groupId, setGroupId] = useState(groups[0].id);
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [scheduleAt, setScheduleAt] = useState('');
  const [sendNotification, setSendNotification] = useState(false);
  const [tab, setTab] = useState<'new' | 'scheduled'>('new');
  const [scheduled, setScheduled] = useState<Scheduled[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('scheduledPosts');
    if (stored) setScheduled(JSON.parse(stored));
  }, []);

  const saveScheduled = (list: Scheduled[]) => {
    setScheduled(list);
    localStorage.setItem('scheduledPosts', JSON.stringify(list));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (scheduleAt) {
      const newSch: Scheduled = {
        id: Date.now().toString(),
        groupId,
        content,
        at: scheduleAt,
      };
      const list = [...scheduled, newSch];
      saveScheduled(list);
      alert('Post scheduled locally');
    } else {
      alert('Post published immediately (mock)');
      mockPosts.push({
        id: Date.now().toString(),
        groupId,
        content,
        author: 'Admin',
        role: 'Admin',
        createdAt: new Date().toISOString(),
      });
    }

    // reset
    setContent('');
    setMediaFiles([]);
    setScheduleAt('');
    setSendNotification(false);
  };

  return (
    <div className="p-6 max-w-lg mx-auto pb-20">
      <div className="flex gap-4 mb-6 border-b">
        <button
          className={`pb-2 ${tab === 'new' ? 'border-b-2 border-blue-600 font-medium' : ''}`}
          onClick={() => setTab('new')}
        >
          New Post
        </button>
        <button
          className={`pb-2 ${tab === 'scheduled' ? 'border-b-2 border-blue-600 font-medium' : ''}`}
          onClick={() => setTab('scheduled')}
        >
          Scheduled ({scheduled.length})
        </button>
      </div>

      {tab === 'new' && (
        <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Group</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={groupId}
            onChange={(e) => setGroupId(e.target.value)}
          >
            {groups.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
 
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            className="w-full border rounded px-3 py-2 h-32"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Media</label>
          <MediaPicker onChange={setMediaFiles} />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="schedule"
            checked={Boolean(scheduleAt)}
            onChange={(e) => setScheduleAt(e.target.checked ? new Date().toISOString().slice(0, 16) : '')}
          />
          <label htmlFor="schedule" className="text-sm">Post later</label>
        </div>

        {scheduleAt && (
          <input
            type="datetime-local"
            className="border rounded px-3 py-2 w-full"
            value={scheduleAt}
            onChange={(e) => setScheduleAt(e.target.value)}
          />
        )}

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="notify"
            checked={sendNotification}
            onChange={(e) => setSendNotification(e.target.checked)}
          />
          <label htmlFor="notify" className="text-sm">Send as notification</label>
        </div>
 
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Post
        </button>
        </form>
      )}

      {tab === 'scheduled' && (
        <div className="space-y-4">
          {scheduled.length === 0 && <p className="text-gray-500">No scheduled posts.</p>}
          {scheduled.map((s) => (
            <div key={s.id} className="border rounded p-3 flex justify-between items-center">
              <div>
                <p className="font-medium mb-1">{s.content.slice(0, 40)}…</p>
                <p className="text-xs text-gray-500">{new Date(s.at).toLocaleString()}</p>
              </div>
              <button
                className="text-sm text-red-600"
                onClick={() => saveScheduled(scheduled.filter((p) => p.id !== s.id))}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
 
export default AdminPanel; 