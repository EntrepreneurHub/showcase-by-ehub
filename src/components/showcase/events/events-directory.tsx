'use client';

import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';

// Utility function for consistent date formatting
const formatEventDate = (dateString: string) => {
  // Using a fixed format that will be consistent between server and client
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  
  return `${month} ${day}, ${year} ${formattedHours}:${minutes} ${ampm}`;
};

// Temporary mock data - would come from API in real implementation
const mockEvents = [
  {
    id: 1,
    title: "Spring Startup Showcase 2024",
    isOfficial: true,
    host: "EntrepreneurHub",
    location: "San Francisco, CA",
    date: "2024-04-15T10:00:00",
    participants: 42,
    status: "OPEN"
  },
  {
    id: 2,
    title: "Tech Innovation Summit",
    isOfficial: false,
    host: "Stanford Entrepreneurship Club",
    location: "Virtual",
    date: "2024-04-20T09:00:00",
    participants: 156,
    status: "OPEN"
  },
  {
    id: 3,
    title: "Winter Demo Day 2024",
    isOfficial: true,
    host: "EntrepreneurHub",
    location: "Boston, MA",
    date: "2024-01-15T14:00:00",
    participants: 89,
    status: "PAST"
  }
];

const EventCard: React.FC<{
  event: typeof mockEvents[0]
}> = ({ event }) => {
  const isPast = event.status === "PAST";
  const formattedDate = formatEventDate(event.date);

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-200 ${
      !isPast ? 'hover:shadow-lg' : 'opacity-70'
    }`}>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          {event.isOfficial && (
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">
              OFFICIAL
            </span>
          )}
          {isPast && (
            <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">
              PAST
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-2">Hosted by {event.host}</p>
        
        <div className="flex items-center text-gray-500 mb-2">
          <FaMapMarkerAlt className="mr-2" />
          <span>{event.location}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-2">
          <FaCalendarAlt className="mr-2" />
          <span>{formattedDate}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-4">
          <FaUsers className="mr-2" />
          <span>{event.participants} Participants</span>
        </div>

        <div className="mt-auto">
          <span 
            className={`inline-block px-3 py-1 rounded text-sm ${
              event.status === 'OPEN' 
                ? 'bg-green-100 text-green-800' 
                : event.status === 'PAST'
                ? 'bg-gray-100 text-gray-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {event.status}
          </span>
        </div>
      </div>
    </div>
  );
};

const EventsDirectory: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex space-x-4 ml-4">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Filters
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed">
            Create Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockEvents.map((event) => (
          <Link 
            key={event.id}
            href={event.status !== 'PAST' ? `/showcase/events/${event.id}` : '#'}
            className={event.status === 'PAST' ? 'cursor-default' : 'cursor-pointer'}
            onClick={(e) => event.status === 'PAST' && e.preventDefault()}
          >
            <EventCard event={event} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsDirectory; 