import http from 'k6/http';
import { sleep, check } from 'k6';

export function getPost() {
  return http.get('https://jsonplaceholder.typicode.com/posts/1');
}

export function getAllPost() {
  return http.get('https://jsonplaceholder.typicode.com/posts');
}

export function createPost(userData) {
    return http.post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify(userData),
        {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        }
    );
}