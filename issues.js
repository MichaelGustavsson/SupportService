import { HttpClient } from './helpers/httpClient.js';

const issueList = document.querySelector('#issueList');

const initApp = () => {
  listAllIssues();
};

const listAllIssues = async () => {
  // setInterval(fetchIssues, 2000);
  fetchIssues();
};

const fetchIssues = async () => {
  const httpClient = new HttpClient();
  const result = await httpClient.get('issues');
  displayIssues(result);
};

const displayIssues = (issues) => {
  for (let issue of issues) {
    const div = document.createElement('div');
    const caption = document.createElement('span');
    const issueDate = document.createElement('span');
    const issuer = document.createElement('span');

    caption.textContent = issue.caption;
    issueDate.textContent = issue.issueDate;
    issuer.textContent = issue.email;

    div.appendChild(issueDate);
    div.appendChild(caption);
    div.appendChild(issuer);

    issueList.appendChild(div);
  }
};

document.addEventListener('DOMContentLoaded', initApp);
