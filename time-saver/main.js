var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.track.toggl.com/reports/api/v2/summary?workspace_id=6194292&since=2022-04-01&user_agent=api_test',
  headers: { 
    'Authorization': 'Basic MTFiYTNiMTEwOGEyMGQ4Y2E2ZThjNDlhZjE4YmRjZGE6YXBpX3Rva2Vu'
  }
};

axios(config)
.then(function (response) {
  //  console.log(response.data);
  const project =JSON.parse(JSON.stringify(response.data.data))[0];
  const tasks = project.items;

  console.log(`there are ${tasks.length} tasks`);

  tasks.forEach((x=>console.log(x.title.time_entry)))
})
.catch(function (error) {
  console.log(error);
});
