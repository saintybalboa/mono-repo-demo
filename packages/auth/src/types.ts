import { AdminInitiateAuthResponse } from 'aws-sdk/clients/cognitoidentityserviceprovider';

export interface AuthConfig {
  userPoolId: string;
  clientId: string;
}

export interface AuthError {
  message: string;
  code: string;
}

export interface AuthResponse {
  statusCode: number;
  data?: AdminInitiateAuthResponse;
  error?: AuthError;
}
