import { User } from './user.js';
import { HttpClient } from './helpers/httpClient.js';

const form = document.querySelector('form');
const overlay = document.querySelector('.overlay');
const confirmationModal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-modal');

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

  form.reset();
  displayConfirmation(result);
  console.log('Result', result);
};

const displayConfirmation = (result) => {
  const issueNumber = document.querySelector('#issue-number');
  issueNumber.innerText = result.issueNumber;

  confirmationModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeConfirmation = () => {
  confirmationModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);
closeModalButton.addEventListener('click', closeConfirmation);
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    if (!confirmationModal.classList.contains('hidden')) closeConfirmation();
  }
});
