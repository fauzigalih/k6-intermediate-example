import http from 'k6/http';
import { sleep, check } from 'k6';
import { getAllUsers, createUser, getUser } from '../helpers/user.js';
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

export const options = {
stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 20 },
    { duration: '20s', target: 0 },
  ],
};

export default function() {
  getAllUsers();
  createUser({
    "email": `user-${uuidv4()}`,
    "password": "secret"
  });
  getUser();
}
