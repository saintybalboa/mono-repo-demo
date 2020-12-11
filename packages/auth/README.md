# `auth`

> A library to manage user authentication against AWS Cognito.

## Usage

```js
import Auth from '@saintybalboa/auth';

const auth = new Auth({ userPoolId: 'XXXX', clientId: 'XXXX' });
```

### Login

```js
auth.login('username', 'password');
```
