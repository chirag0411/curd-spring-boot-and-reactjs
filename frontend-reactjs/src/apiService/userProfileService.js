import request from 'request-promise';
//import cookie from 'react-cookie';
import axios from 'axios';

const utils = {
    getAllUsers: () => {
        console.log("hello")

        axios.get('http://localhost:8080/users')
            .then(function (response) {
                // handle success
                console.log(response);
                return response
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                return error
            })

        /* return request({
            url: 'localhost:8080/users',
            method: 'GET',
            json: true,
            contentType: "application/json; characterset=utf-8",
        }); */
    },


    /* axios({
      method: 'get',
      url: 'http://bit.ly/2mTM3nY',
      responseType: 'stream'
    })
      .then(function (response) {
        response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      });

    axios.get('/user?ID=12345')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.finally(function () {
  // always executed
}); */
};

export default utils;