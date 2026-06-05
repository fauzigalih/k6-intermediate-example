import http from 'k6/http';
import { sleep, check } from 'k6';
import { getPost, getAllPost, createPost } from '../helpers/post.js';
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

export const options = {
stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 20 },
    { duration: '20s', target: 0 },
  ],
};

export default function() {
  getPost();
  getAllPost();
  createPost({
    title: `title-${uuidv4()}`,
    body: `bar-${uuidv4()}`,
    userId: 1,
  });
  sleep(1);
}

export function handleSummary(data) {
  return {
    'results/stages.json': JSON.stringify(data), //the default data object
  };
}
