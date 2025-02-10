const initApp = () => {
  listAllIssues();
};

const listAllIssues = async () => {
  const url = 'https://issuesdb-856d.restdb.io/rest/issues';

  const response = await fetch(url, {
    headers: {
      'x-apikey': '67a9efe4020c067b55e653b8',
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log(response.status, response.statusText);
  }
};

document.addEventListener('DOMContentLoaded', initApp);
