import { api1 } from './processes/api1.js';
import { api2 } from './processes/api2.js';
import { api3 } from './processes/api3.js';

import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  scenarios: {
    ap1: {
      exec: 'Api1',
      executor: 'shared-iterations',
      vus: 3,
      iterations: 5,
      maxDuration: '10s',
    },
    ap2: {
      exec: 'Api2',
      executor: 'shared-iterations',
      vus: 2,
      iterations: 15,
      maxDuration: '10s',
    },
    ap3: {
      exec: 'Api3',
      executor: 'shared-iterations',
      vus: 5,
      iterations: 5,
      maxDuration: '10s',
    },
  },
};

export function Api1()
{
    api1();
}

export function Api2()
{
    api2();
}

export function Api3()
{
    api3();
}