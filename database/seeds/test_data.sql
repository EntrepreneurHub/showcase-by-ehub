-- Admin Users
INSERT INTO users (email, password_hash, full_name, role) VALUES 
('admin@showcase.com', '$2a$10$ZcvZbm/yr/SuHYR3/wTag.nPoKaXeoaWqN11vpcKVt39L2UY63LLq', 'Admin User', 'admin'),
('admin2@showcase.com', '$2a$10$ZcvZbm/yr/SuHYR3/wTag.nPoKaXeoaWqN11vpcKVt39L2UY63LLq', 'Second Admin', 'admin');

-- Event Organizers
INSERT INTO users (email, password_hash, full_name, role) VALUES 
('organizer@showcase.com', '$2a$10$YgJx5aC24tKhfubL3zVvFecgg23j0/9j5lc/rVMvIOalgyaC.C3Zm', 'Main Organizer', 'event_organizer'),
('organizer2@showcase.com', '$2a$10$YgJx5aC24tKhfubL3zVvFecgg23j0/9j5lc/rVMvIOalgyaC.C3Zm', 'Tech Track Organizer', 'event_organizer'),
('organizer3@showcase.com', '$2a$10$YgJx5aC24tKhfubL3zVvFecgg23j0/9j5lc/rVMvIOalgyaC.C3Zm', 'Business Track Organizer', 'event_organizer');

-- Judges
INSERT INTO users (email, password_hash, full_name, role) VALUES 
('judge@showcase.com', '$2a$10$3GhIomFCehINPiga.97Bq.XOW2xyqyxw0bQse14YyMSwpexpBl5J.', 'Technical Judge', 'judge'),
('judge2@showcase.com', '$2a$10$3GhIomFCehINPiga.97Bq.XOW2xyqyxw0bQse14YyMSwpexpBl5J.', 'UX Judge', 'judge'),
('judge3@showcase.com', '$2a$10$3GhIomFCehINPiga.97Bq.XOW2xyqyxw0bQse14YyMSwpexpBl5J.', 'Business Judge', 'judge'),
('judge4@showcase.com', '$2a$10$3GhIomFCehINPiga.97Bq.XOW2xyqyxw0bQse14YyMSwpexpBl5J.', 'Innovation Judge', 'judge');

-- Presenters
INSERT INTO users (email, password_hash, full_name, role) VALUES 
('presenter@showcase.com', '$2a$10$SzDMEyw3B7V5AE0uvYmRYOgLa41MuOgvpBIHUdpYiDmm3djiz4SSi', 'Next.js Presenter', 'presenter'),
('presenter2@showcase.com', '$2a$10$SzDMEyw3B7V5AE0uvYmRYOgLa41MuOgvpBIHUdpYiDmm3djiz4SSi', 'AI Project Presenter', 'presenter'),
('presenter3@showcase.com', '$2a$10$SzDMEyw3B7V5AE0uvYmRYOgLa41MuOgvpBIHUdpYiDmm3djiz4SSi', 'Blockchain Presenter', 'presenter'),
('presenter4@showcase.com', '$2a$10$SzDMEyw3B7V5AE0uvYmRYOgLa41MuOgvpBIHUdpYiDmm3djiz4SSi', 'UX Design Presenter', 'presenter'),
('presenter5@showcase.com', '$2a$10$SzDMEyw3B7V5AE0uvYmRYOgLa41MuOgvpBIHUdpYiDmm3djiz4SSi', 'Mobile App Presenter', 'presenter');

-- Attendees
INSERT INTO users (email, password_hash, full_name, role) VALUES 
('attendee@showcase.com', '$2a$10$nzMdUG4qy47tH52keCdDWecvFSjDeOos3iRwYGzszCtNRgOqH0rCy', 'Regular Attendee', 'attendee'),
('student@showcase.com', '$2a$10$nzMdUG4qy47tH52keCdDWecvFSjDeOos3iRwYGzszCtNRgOqH0rCy', 'Student Attendee', 'attendee'),
('professional@showcase.com', '$2a$10$nzMdUG4qy47tH52keCdDWecvFSjDeOos3iRwYGzszCtNRgOqH0rCy', 'Professional Attendee', 'attendee');

-- Events
INSERT INTO events (title, description, start_date, end_date, organizer_id, status) VALUES 
('Tech Showcase 2024', 'Annual technology showcase event', 
 CURRENT_TIMESTAMP + INTERVAL '30 days', 
 CURRENT_TIMESTAMP + INTERVAL '31 days',
 (SELECT id FROM users WHERE email = 'organizer@showcase.com'),
 'upcoming'),
('AI Innovation Summit', 'Artificial Intelligence and Machine Learning Showcase',
 CURRENT_TIMESTAMP + INTERVAL '45 days',
 CURRENT_TIMESTAMP + INTERVAL '46 days',
 (SELECT id FROM users WHERE email = 'organizer2@showcase.com'),
 'draft'),
('Design & UX Symposium', 'User Experience and Design Thinking Exhibition',
 CURRENT_TIMESTAMP + INTERVAL '60 days',
 CURRENT_TIMESTAMP + INTERVAL '61 days',
 (SELECT id FROM users WHERE email = 'organizer3@showcase.com'),
 'planning');

-- Presentations for Tech Showcase 2024
INSERT INTO presentations (title, description, event_id, presenter_id, scheduled_time, duration_minutes, status) VALUES 
('Next.js 15 Features', 'Exploring the latest features in Next.js 15',
 (SELECT id FROM events WHERE title = 'Tech Showcase 2024'),
 (SELECT id FROM users WHERE email = 'presenter@showcase.com'),
 CURRENT_TIMESTAMP + INTERVAL '30 days' + INTERVAL '2 hours',
 45,
 'confirmed'),
('Building AI-Powered Apps', 'Practical guide to implementing AI in web applications',
 (SELECT id FROM events WHERE title = 'Tech Showcase 2024'),
 (SELECT id FROM users WHERE email = 'presenter2@showcase.com'),
 CURRENT_TIMESTAMP + INTERVAL '30 days' + INTERVAL '4 hours',
 60,
 'confirmed'),
('Blockchain in Practice', 'Real-world applications of blockchain technology',
 (SELECT id FROM events WHERE title = 'Tech Showcase 2024'),
 (SELECT id FROM users WHERE email = 'presenter3@showcase.com'),
 CURRENT_TIMESTAMP + INTERVAL '30 days' + INTERVAL '6 hours',
 45,
 'pending');

-- Scores for Next.js presentation
INSERT INTO scores (presentation_id, judge_id, score, feedback) VALUES 
((SELECT id FROM presentations WHERE title = 'Next.js 15 Features'),
 (SELECT id FROM users WHERE email = 'judge@showcase.com'),
 85.5,
 'Excellent technical depth and clear examples'),
((SELECT id FROM presentations WHERE title = 'Next.js 15 Features'),
 (SELECT id FROM users WHERE email = 'judge2@showcase.com'),
 92.0,
 'Outstanding presentation style and audience engagement'),
((SELECT id FROM presentations WHERE title = 'Next.js 15 Features'),
 (SELECT id FROM users WHERE email = 'judge3@showcase.com'),
 78.5,
 'Good technical content but could improve business impact explanation');

-- Scores for AI presentation
INSERT INTO scores (presentation_id, judge_id, score, feedback) VALUES 
((SELECT id FROM presentations WHERE title = 'Building AI-Powered Apps'),
 (SELECT id FROM users WHERE email = 'judge@showcase.com'),
 88.0,
 'Innovative use of AI technologies'),
((SELECT id FROM presentations WHERE title = 'Building AI-Powered Apps'),
 (SELECT id FROM users WHERE email = 'judge4@showcase.com'),
 95.0,
 'Exceptional innovation and practical applications'); 