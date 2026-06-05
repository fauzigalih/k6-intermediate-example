import http from 'k6/http';
import { sleep, check } from 'k6';
import { getPost, getAllPost, createPost } from '../helpers/post.js';
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

export const options = {
  vus: 5,
  duration: '5s',
};

export default function() {
  const responsePost =  getPost();
  check(responsePost, {
    'response post is status 200': (res) => res.status === 200,
    'response post has title field': (res) => JSON.parse(res.body).hasOwnProperty('title'),
    'response post has userId not undefined': (res) => JSON.parse(res.body).userId !== undefined,
    'response post time < 2000ms': (res) => res.timings.duration < 2000,
  });

  const responseAllPost = getAllPost();
  check(responseAllPost, {
    'response all post is status 200': (res) => res.status === 200,
    'response all post all fields exist': (res) => res.json().every(items => ['userId', 'id', 'title', 'body'].every(key => key in items)),
    'response all post time < 2000ms': (res) => res.timings.duration < 2000,
  });

  const responseCreatePost = createPost({
    title: `title-${uuidv4()}`,
    body: `bar-${uuidv4()}`,
    userId: 1,
  });
  check(responseCreatePost, {
    'response create post is status 201': (res) => res.status === 201,
    'response create post verify id': (res) => res.body.includes('101'),
    'response create post time < 2000ms': (res) => res.timings.duration < 2000,
  });
  sleep(1);
}

export function handleSummary(data) {
  return {
    'results/checks.json': JSON.stringify(data), //the default data object
  };
}