const form = document.querySelector('form');

const initApp = () => {};

const handleSubmit = (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const email = data.get('email');
  const caption = data.get('caption');
  const description = data.get('description');

  console.log(email, caption, description);
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);
