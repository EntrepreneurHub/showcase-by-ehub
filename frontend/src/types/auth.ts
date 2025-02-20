export type UserRole = 'admin' | 'event_organizer' | 'judge' | 'presenter' | 'attendee';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  isVerified: boolean;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  fullName: string;
  role?: UserRole;
}

export interface AuthError {
  message: string;
  errors?: Array<{
    msg: string;
    param: string;
  }>;
} 