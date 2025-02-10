import { HttpClient } from './helpers/httpClient.js';

const initApp = () => {
  listAllIssues();
};

const listAllIssues = async () => {
  const httpClient = new HttpClient();

  const result = await httpClient.get('issues');
  console.log(result);
};

document.addEventListener('DOMContentLoaded', initApp);
