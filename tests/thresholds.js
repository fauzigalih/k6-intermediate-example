import http from 'k6/http';
import { sleep, check } from 'k6';
import { getPost, getAllPost, createPost } from '../helpers/post.js';
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

export const options = {
  vus: 5,
  duration: '5s',
  thresholds: {
    http_req_failed: ['rate<0.05'], // http errors should be less than 5%
    http_req_duration: ['p(95)<1500'], // 95% of requests should be below 1500ms
    http_reqs: ['rate>0.95'] // http success should be more than 95%
  },
};

export default function() {
  const responsePost =  getPost();
    check(responsePost, {
      'response post is status 200': (res) => res.status === 200,
      'response post verify title': (res) => 
        res.body.includes('sunt aut facere repellat provident occaecati excepturi optio reprehenderit'),
      'response post time < 2000ms': (res) => res.timings.duration < 2000,
    });
  
    const responseAllPost = getAllPost();
    check(responseAllPost, {
      'response all post is status 200': (res) => res.status === 200,
      'response all post verify title': (res) => 
        res.body.includes('qui est esse'),
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
    'results/thresholds.json': JSON.stringify(data), //the default data object
  };
}
