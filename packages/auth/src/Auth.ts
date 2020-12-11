import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { AdminInitiateAuthRequest, AdminInitiateAuthResponse } from 'aws-sdk/clients/cognitoidentityserviceprovider';
import { AWSError } from 'aws-sdk/lib/error';
import { PromiseResult } from 'aws-sdk/lib/request';
import { AuthConfig, AuthResponse } from './types';

class Auth {
  private config: AuthConfig;
  private cognito;
  private authFlow = 'ADMIN_USER_PASSWORD_AUTH';

  constructor(config: AuthConfig) {
    this.config = config;
    this.cognito = new CognitoIdentityServiceProvider();
  }

  public async login(username: string, password: string): Promise<AuthResponse> {
    const authRequestParams: AdminInitiateAuthRequest = {
      UserPoolId: this.config.userPoolId,
      ClientId: this.config.clientId,
      AuthFlow: this.authFlow,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password
      }
    };

    try {
      const result: PromiseResult<AdminInitiateAuthResponse, AWSError> = await this.cognito
        .adminInitiateAuth(authRequestParams)
        .promise();

      return {
        statusCode: result.$response.httpResponse.statusCode,
        data: result.$response.data as AdminInitiateAuthResponse
      };
    } catch (e) {
      return {
        statusCode: e.statusCode,
        error: {
          message: e.message,
          code: e.code
        }
      };
    }
  }
}

export default Auth;
