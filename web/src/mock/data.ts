export const groups = [
  { id: 'grade9', name: 'Grade 9', type: 'Grades' },
  { id: 'football', name: 'Football Team', type: 'Sports' },
  { id: 'robotics', name: 'Robotics Club', type: 'Clubs' },
];

export const posts = [
  {
    id: 'p1',
    groupId: 'grade9',
    content: 'Welcome to Grade 9! First day of school is Aug 20.',
    author: 'Admin',
    role: 'Admin',
    createdAt: '2025-07-15T10:00:00Z',
    pinned: true,
    tags: ['Grades'],
  },
  {
    id: 'p2',
    groupId: 'football',
    content: 'Practice this Friday at 3pm on the main field.',
    author: 'Coach',
    role: 'Staff',
    createdAt: '2025-07-14T14:30:00Z',
    tags: ['Sports'],
  },
  {
    id: 'p3',
    groupId: 'robotics',
    content: 'Robotics kickoff meeting next Monday in Lab 2.',
    author: 'Teacher',
    role: 'Teacher',
    createdAt: '2025-07-13T09:15:00Z',
    tags: ['Clubs', 'STEM'],
  },
]; 