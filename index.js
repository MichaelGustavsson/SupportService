import { User } from './user.js';
import { HttpClient } from './helpers/httpClient.js';

const form = document.querySelector('form');

const initApp = () => {};

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const email = data.get('email');
  const caption = data.get('caption');
  const description = data.get('description');

  const user = new User(email, caption, description);

  const httpClient = new HttpClient();
  const result = await httpClient.post('issues', user);

  console.log('Result', result);
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);
