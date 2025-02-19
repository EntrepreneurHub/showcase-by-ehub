'use client';

import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaClock, FaDownload, FaQuestionCircle, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

// This would come from an API in real implementation
interface EventDetails {
  id: number;
  title: string;
  isOfficial: boolean;
  host: string;
  location: string;
  date: string;
  endTime: string;
  participants: number;
  status: 'OPEN' | 'CLOSED' | 'PAST';
  description: string;
  schedule: Array<{
    time: string;
    activity: string;
  }>;
  requirements: string[];
  maxParticipants: number;
  venueDetails: {
    address: string;
    directions: string;
    parking?: string;
  };
  contactInfo: {
    email: string;
    coordinator: string;
  };
  resources: Array<{
    title: string;
    description: string;
    link: string;
  }>;
}

const mockEventDetails: EventDetails = {
  id: 1,
  title: "Spring Startup Showcase 2024",
  isOfficial: true,
  host: "EntrepreneurHub",
  location: "San Francisco, CA",
  date: "2024-04-15T10:00:00",
  endTime: "2024-04-15T17:00:00",
  participants: 42,
  status: "OPEN",
  description: "Join us for our flagship spring event where innovative startups showcase their groundbreaking ideas. This day-long event features live presentations, interactive Q&A sessions, and real-time judging. Perfect for entrepreneurs looking to gain visibility and receive valuable feedback from industry experts.",
  schedule: [
    { time: "10:00 AM", activity: "Registration & Morning Coffee" },
    { time: "10:30 AM", activity: "Opening Ceremony" },
    { time: "11:00 AM", activity: "First Round Presentations" },
    { time: "01:00 PM", activity: "Lunch Break & Networking" },
    { time: "02:00 PM", activity: "Second Round Presentations" },
    { time: "04:00 PM", activity: "Judges Deliberation" },
    { time: "04:30 PM", activity: "Awards Ceremony" },
    { time: "05:00 PM", activity: "Closing Remarks & Networking" }
  ],
  requirements: [
    "Prepared 10-minute presentation",
    "Demo-ready product or prototype",
    "Team representative must be present",
    "Submission of pitch deck 24h before event"
  ],
  maxParticipants: 50,
  venueDetails: {
    address: "123 Innovation Center, San Francisco, CA 94105",
    directions: "Located in SoMa district, 2 blocks from Montgomery BART station",
    parking: "Paid parking available at 145 Innovation Center Garage"
  },
  contactInfo: {
    email: "events@entrepreneurhub.com",
    coordinator: "Sarah Chen"
  },
  resources: [
    {
      title: "Presentation Guidelines",
      description: "Detailed guide for preparing your pitch",
      link: "/resources/pitch-guidelines.pdf"
    },
    {
      title: "Technical Requirements",
      description: "Setup instructions for demo day",
      link: "/resources/tech-requirements.pdf"
    },
    {
      title: "Event FAQ",
      description: "Common questions and answers",
      link: "/resources/faq.pdf"
    }
  ]
};

const formatEventDate = (dateString: string) => {
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

const EventScheduleItem: React.FC<{
  time: string;
  activity: string;
}> = ({ time, activity }) => {
  // Split time into value and period (AM/PM)
  const [timeValue, period] = time.split(' ');
  
  return (
    <div className="flex items-baseline gap-6">
      <div className="w-32 text-gray-500 text-lg">
        {timeValue}
        <span className="text-sm ml-1">{period}</span>
      </div>
      <div className="text-gray-700 text-lg">{activity}</div>
    </div>
  );
};

const EventDetails: React.FC<{ eventId: number }> = ({ eventId }) => {
  const event = mockEventDetails;
  const startDate = formatEventDate(event.date);
  const endDate = formatEventDate(event.endTime);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Event info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              {event.isOfficial && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">
                  OFFICIAL
                </span>
              )}
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
            <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
            <p className="text-gray-600 mb-4">Hosted by {event.host}</p>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2" />
                <span>{startDate}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaClock className="mr-2" />
                <span>Until {endDate}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaUsers className="mr-2" />
                <span>{event.participants} / {event.maxParticipants} Participants</span>
              </div>
            </div>
          </div>

          {/* Middle - Venue and Contact Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Venue Information</h3>
              <div className="flex items-start gap-3">
                <FaMapMarkedAlt className="mt-1 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-800">{event.venueDetails.address}</p>
                  <p className="text-gray-600 text-sm mt-1">{event.venueDetails.directions}</p>
                  {event.venueDetails.parking && (
                    <p className="text-gray-600 text-sm mt-1">{event.venueDetails.parking}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-800">Event Coordinator</p>
                    <p className="text-gray-600">{event.contactInfo.coordinator}</p>
                    <a 
                      href={`mailto:${event.contactInfo.email}`}
                      className="text-red-600 hover:text-red-700"
                    >
                      {event.contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaQuestionCircle className="mt-1 text-gray-500" />
                  <div>
                    <p className="text-gray-600">Check our <a href="#" className="text-red-600 hover:text-red-700">FAQ section</a> or contact support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Registration */}
          <div className="lg:col-span-1 flex flex-col items-start justify-start">
            {event.status === 'OPEN' && (
              <button className="w-full md:w-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors mb-4">
                Register Now
              </button>
            )}
            <div className="w-full md:w-auto px-6 py-3 bg-gray-100 rounded-lg text-center">
              <div className="text-sm text-gray-600">Spots Remaining</div>
              <div className="text-2xl font-bold text-gray-800">
                {event.maxParticipants - event.participants}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Description and Requirements */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
          <p className="text-gray-600 whitespace-pre-line mb-8">{event.description}</p>
          
          <h3 className="text-xl font-semibold mb-4">Requirements</h3>
          <ul className="list-disc list-inside text-gray-600">
            {event.requirements.map((req, index) => (
              <li key={index} className="mb-2">{req}</li>
            ))}
          </ul>
        </div>

        {/* Middle Column - Schedule */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Event Schedule</h2>
          <div className="space-y-5">
            {event.schedule.map((item, index) => (
              <EventScheduleItem 
                key={index}
                time={item.time}
                activity={item.activity}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Resources */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Event Resources</h2>
          <div className="space-y-4">
            {event.resources.map((resource, index) => (
              <a 
                key={index}
                href={resource.link}
                className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FaDownload className="text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-800">{resource.title}</p>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails; 