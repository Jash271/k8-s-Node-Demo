var axios = require('axios');
var data = JSON.stringify({
  query: `query MyQuery($is_completed: Boolean) {
  Users {
    Posts(where: {Is_Completed: {_eq: $is_completed}}) {
      Is_Completed
      Title
      _id
      created_at
    }
    Created_At
    Email
    Last_Seen
    Name
  }
}`,
  variables: { is_completed: true },
});

var config = {
  method: 'post',
  url: 'https://next-hermit-41.hasura.app/v1/graphql',
  headers: {
    'Content-Type': 'application/json',
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
