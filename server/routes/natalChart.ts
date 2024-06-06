.set('Content-Type', 'multipart/form-data')
.send(yourFormData)


var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://astroapi-4.divineapi.com/western-api/v1/planetary-positions',
  'headers': {
    'Authorization': 'Bearer {Your Auth Token}'
  },
  formData: {
    'api_key': '{ad4cc1fb9b068faecfb70914acc63395}',
    'full_name': 'Rahul Kumar',
    'day': '24',
    'month': '05',
    'year': '2023',
    'hour': '14',
    'min': '40',
    'sec': '43',
    'gender': 'male',
    'place': 'New Delhi, India',
    'lat': '28.7041',
    'lon': '77.1025',
    'tzone': '5.5'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


