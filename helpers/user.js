import http from 'k6/http';
import { sleep, check } from 'k6';

const DEFAULT_API_KEY = 'reqres_6170f819c513492eb6559970ab3b06fa';

export function getAllUsers(apiKey = DEFAULT_API_KEY) {
  const response = http.get('https://reqres.in/api/users', {
      headers: {
          'x-api-key': apiKey,
      },
  });
  return response;
}

export function getUser(apiKey = DEFAULT_API_KEY) {
  const response = http.get('https://reqres.in/api/users/2', {
      headers: {
          'x-api-key': apiKey,
      },
  });
  return response;
}

export function createUser(userData, apiKey = DEFAULT_API_KEY) {
    const response = http.post(
        'https://reqres.in/api/users',
        JSON.stringify(userData),
        {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
        }
    );
    return response;
}