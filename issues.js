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
  issueList.innerHTML = '';
  const table = document.createElement('table');
  const header = document.createElement('thead');
  const body = document.createElement('tbody');

  const captions = '<tr><th>Datum</th><th>Ämne</th><th>Avsändare</th></tr>';
  header.innerHTML = captions;
  table.appendChild(header);
  table.appendChild(body);

  for (let issue of issues) {
    const row = document.createElement('tr');
    const caption = document.createElement('td');
    const issueDate = document.createElement('td');
    const issuer = document.createElement('td');

    row.setAttribute('id', issue._id);

    caption.textContent = issue.caption;
    issueDate.textContent = issue.issueDate;
    issuer.textContent = issue.email;

    row.appendChild(issueDate);
    row.appendChild(caption);
    row.appendChild(issuer);
    table.appendChild(row);
  }

  issueList.appendChild(table);

  const rows = document.querySelectorAll('table tr');
  handleRowClick(rows);
  console.log(rows);
};

const handleRowClick = (rows) => {
  rows.forEach((row) => {
    row.addEventListener('click', () => {
      console.log(row.getAttribute('id'));
    });
  });
};

document.addEventListener('DOMContentLoaded', initApp);
