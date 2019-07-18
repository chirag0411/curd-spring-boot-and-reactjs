import axios from 'axios';

/* import cookie from 'react-cookie';

export function JqueryAJaxCall(apiCallData) {
    return new Promise(function (resolve, reject) {
        var apiRequestCall = {
            "async": true,
            "crossDomain": true,
            "url": apiCallData.url,
            "method": apiCallData.method,
            "headers": {
                "content-type": "application/json",
                "Authorization": cookie.load('userToken') ? cookie.load('userToken') : '',
            },
            "processData": false,
            "data": apiCallData.body ? JSON.stringify(apiCallData.body) : null
        };
        $.ajax(apiRequestCall).done(function (response) {
            cookie.save("userToken", cookie.load('userToken'), { maxAge: 1800 });
            cookie.save("userID", cookie.load('userID'), { maxAge: 1800 });
            if(cookie.load('loggedInRoleId') !== undefined)
            {
                cookie.save("loggedInRoleId",cookie.load('loggedInRoleId'),{ maxAge: 1800});
            }
            
            resolve(response);
        }).fail(function (err) {
            if (!cookie.load('userToken')) {
                location.reload();
            } else {
                if (err.status == 404 || err.status == 406) {
                    resolve(err.responseJSON)
                } else {
                    reject();
                }
            }
        });
    });
} */


/* //import request from 'request-promise';
import cookie from 'react-cookie';
import { JqueryAJaxCall as request } from './CommonAjaxCall';

const utils = {
    /**
    * for the fetch all User Detlies
    */
   getAllUser: (userId) => {
    return request({
        url: SERVER_ADDR + "api/user/all/" + userId,
        method: 'GET',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
* for the add User Detlies
*/
addUser: (userData) => {
    return request({
        url: SERVER_ADDR + "api/user/add",
        method: 'POST',
        body: userData,
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
* for the Delete User Detlies
*/
deleteUser: (id) => {
    return request({
        url: SERVER_ADDR + "api/user/" + parseInt(id),
        method: 'DELETE',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
* for the add SMTP Detlies
*/
addSmtpData: (smtpData) => {
    return request({
        url: SERVER_ADDR + "api/smtp/addSmtpData",
        method: 'POST',
        body: smtpData,
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},
/**
* for the fetch smtp Detlies
*/
getSmtpData: () => {
    return request({
        url: SERVER_ADDR + "api/smtp/getSmtpData",
        method: 'GET',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
 * for send mail
 */
sendTestMail: (receiverData) => {
    return request({
        url: SERVER_ADDR + "api/smtp/sendMail",
        method: 'POST',
        body: receiverData,
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

deleteRate: (id) => {
    return request({
        url: SERVER_ADDR + "api/rate_plan/" + parseInt(id),
        method: 'DELETE',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

addRate: (rateData) => {
    return request({
        url: SERVER_ADDR + "api/rate_plan/add",
        method: 'POST',
        body: rateData,
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

getAllRates: () => {
    return request({
        url: SERVER_ADDR + "api/rate_plan/all",
        method: 'GET',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
* for the add Role Details
*/
addRole: (roleData) => {
    return request({
        url: SERVER_ADDR + "api/role/add",
        method: 'POST',
        body: roleData,
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
* for the fetch all role Details
*/
getAllRole: () => {
    return request({
        url: SERVER_ADDR + "api/role/all",
        method: 'GET',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
* for the delete role Details
*/
deleteRole: (id) => {
    return request({
        url: SERVER_ADDR + "api/role/" + parseInt(id),
        method: 'DELETE',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
* for the fetch all category Details
*/
getAllCategory: () => {
    return request({
        url: SERVER_ADDR + "api/category/all",
        method: 'GET',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
* for the add Cattle category Details
*/
addCategory: (categoryData) => {
    return request({
        url: SERVER_ADDR + "api/category/add",
        method: 'POST',
        body: categoryData,
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
* for the delete category Details
*/
deleteCategory: (id) => {
    return request({
        url: SERVER_ADDR + "api/category/" + parseInt(id),
        method: 'DELETE',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
* for the all menu with feature Details
*/
allMenuWithFeature: () => {
    return request({
        url: SERVER_ADDR + "api/role_feature_config/allRoleAndallFeature",
        method: 'GET',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},
/**
* for the add role with feature Details
*/
addMenuWithFeature: (roleData) => {
    return request({
        url: SERVER_ADDR + "api/role_feature_config/setRoleWithFeature",
        method: 'POST',
        body: roleData,
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

/**
*fot the fetch details using mobile number
*/
getUserDataBasedOnMobileNo: (mobileNo) => {
    return request({
        url: SERVER_ADDR + "api/user/search/" + mobileNo,
        method: 'GET',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},

getUserDataBasedOnEmail:(email)=>
{
    return request({
        url:SERVER_ADDR+"api/user/searchemail/"+email,
        method:'GET',
        json:true,
        headers:{"Authorization":cookie.load('userToken')}
    });
},
allUserTypes:()=>
{
    return request({
        url:SERVER_ADDR+"api/user/getUserTypes",
        method:'GET',
        json:true,
        headers:{"Authorization":cookie.load('userToken')}
    });
},
addBulkUserList:(userData) => {
    return request({
        url: SERVER_ADDR + "api/user/addUserList",
        method: 'POST',
        body: userData,
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},
getReportingManagerList: (userroles) => {
    return request({
        url: SERVER_ADDR + "api/user/getreportingmanagerlist",
        method: 'POST',
        body: userroles,
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    });
},
getAllDistrictTelsiaiPincode: (userid) => {
    return request({
        url: SERVER_ADDR + "api/user/getReportingUserMappedTehsil/" + userid,
        method: 'GET',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    })
},
getUserMappedTehsil: (userId) => {
    return request({
        url: SERVER_ADDR + "api/user/getUserMappedTehsil/"+userId,
        method: 'GET',
        json: true,
        headers: { "Authorization": cookie.load('userToken') }
    })
}
}

export default utils; */