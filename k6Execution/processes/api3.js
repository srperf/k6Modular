import http from 'k6/http';

//leandroFunc.js
export function leandroFunc() {
    console.log('Hola I am a function');
    http.get('https://www.google.com');
  }

export function login()
{
  var token;
  var res = http.post('https://test-api.k6.io/auth/token/login/',{
        "username": "Leo3",
        "password": "123456"
        }
      );

  token = res.json('access');
  return token;
}

export function getContent(url)
{
  var resp = http.get(url);
  return resp.body;
}

export function api3()
{
    login();
    leandroFunc();
}

export default function()
{
    api3();
}