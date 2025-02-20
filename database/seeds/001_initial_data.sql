-- Insert admin user (password: admin123)
INSERT INTO users (email, password_hash, full_name, role) VALUES 
('admin@showcase.com', '$2a$10$xVfq0sCWqCPw.0EBGqUX6.0RwPnBY3Zgf0sPIqYXVTGqHdPGvN9Sm', 'Admin User', 'admin');

-- Insert event organizer (password: organizer123)
INSERT INTO users (email, password_hash, full_name, role) VALUES 
('organizer@showcase.com', '$2a$10$LKv0VqDRYgRyZX1f.wz7UeHYF0L9ZPqT5PuqT5zYwRzJ9YwGxK5.q', 'Event Organizer', 'event_organizer');

-- Insert judge (password: judge123)
INSERT INTO users (email, password_hash, full_name, role) VALUES 
('judge@showcase.com', '$2a$10$8KqM5YXv.P8EXYmgNgxRZeqE3RyPvkVQX1X5X5X5X5X5X5X5X5X5X', 'Judge User', 'judge');

-- Insert presenter (password: presenter123)
INSERT INTO users (email, password_hash, full_name, role) VALUES 
('presenter@showcase.com', '$2a$10$9KqM5YXv.P8EXYmgNgxRZeqE3RyPvkVQX1X5X5X5X5X5X5X5X5X5X', 'Presenter User', 'presenter');

-- Insert attendee (password: attendee123)
INSERT INTO users (email, password_hash, full_name, role) VALUES 
('attendee@showcase.com', '$2a$10$7KqM5YXv.P8EXYmgNgxRZeqE3RyPvkVQX1X5X5X5X5X5X5X5X5X5X', 'Attendee User', 'attendee');

-- Insert sample event
INSERT INTO events (title, description, start_date, end_date, organizer_id, status) VALUES 
('Tech Showcase 2024', 'Annual technology showcase event', 
 CURRENT_TIMESTAMP + INTERVAL '30 days', 
 CURRENT_TIMESTAMP + INTERVAL '31 days',
 (SELECT id FROM users WHERE email = 'organizer@showcase.com'),
 'upcoming');

-- Insert sample presentation
INSERT INTO presentations (title, description, event_id, presenter_id, scheduled_time, duration_minutes, status) VALUES 
('Next.js 15 Features', 'Exploring the latest features in Next.js 15',
 (SELECT id FROM events WHERE title = 'Tech Showcase 2024'),
 (SELECT id FROM users WHERE email = 'presenter@showcase.com'),
 CURRENT_TIMESTAMP + INTERVAL '30 days' + INTERVAL '2 hours',
 45,
 'confirmed');

-- Insert sample score
INSERT INTO scores (presentation_id, judge_id, score, feedback) VALUES 
((SELECT id FROM presentations WHERE title = 'Next.js 15 Features'),
 (SELECT id FROM users WHERE email = 'judge@showcase.com'),
 85.5,
 'Excellent presentation with clear examples and good audience engagement.'); 