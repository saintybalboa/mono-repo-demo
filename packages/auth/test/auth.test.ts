import * as AWSMock from 'aws-sdk-mock';
import * as AWS from 'aws-sdk';
import Auth from '../src/Auth';

describe('login', () => {
  it('should return the correct response when the user is authenticated', async () => {
    const mockResponse = {
      $response: {
        data: {},
        httpResponse: {
          statusCode: 200
        }
      }
    };

    AWSMock.setSDKInstance(AWS);
    AWSMock.mock('CognitoIdentityServiceProvider', 'adminInitiateAuth', (params: any, callback: any) => {
      callback(null, mockResponse);
    });

    const auth = new Auth({
      userPoolId: 'XXXX',
      clientId: 'XXXX'
    });

    const result = await auth.login('username', 'password');

    expect(result).toMatchObject({
      statusCode: 200,
      data: mockResponse.$response.data
    });

    AWSMock.restore('CognitoIdentityServiceProvider');
  });

  it('should return the correct response when the user authentication fails', async () => {
    const mockErrorResponse = {
      statusCode: 400,
      code: 'TEST_ERROR_CODE',
      message: 'Test error message'
    };

    AWSMock.setSDKInstance(AWS);
    AWSMock.mock('CognitoIdentityServiceProvider', 'adminInitiateAuth', (params: any, callback: any) => {
      callback(mockErrorResponse, new Error());
    });

    const auth = new Auth({
      userPoolId: 'XXXX',
      clientId: 'XXXX'
    });

    const result = await auth.login('username', 'password');

    expect(result).toMatchObject({
      statusCode: 400,
      error: {
        code: mockErrorResponse.code,
        message: mockErrorResponse.message
      }
    });

    AWSMock.restore('CognitoIdentityServiceProvider');
  });
});
