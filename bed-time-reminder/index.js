var axios = require('axios');
const cron = require('node-cron');


var config = {
  method: 'post',
  url: 'https://maker.ifttt.com/trigger/go_to_bed/json/with/key/dSycj8Mma-yWvr4C-39sE_',
  headers: { }
};

cron.schedule('* * * * *', function() {
    console.log('sensing notification every minute');
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  });



