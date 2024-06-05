import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 20 },
    { duration: '30s', target: 20 },
    { duration: '5s', target: 0 },
  ],
  ext: {
    loadimpact: {
      projectID: 3570421,
      // Test runs with the same name groups test runs together
      name: "PruebaStages"
    }
  }
};

export default function () {
  http.get('https://httpbin.org/');
  sleep(5);
}
