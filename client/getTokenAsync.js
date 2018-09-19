const https = require('https');
const querystring = require('querystring');

module.exports = function (host, clientId, clientSecret) {
    const paramDic = { grant_type: "client_credentials" };
    const postData = querystring.stringify(paramDic);
    const clientKeys = clientId + ':' + clientSecret;
    const credentials = Buffer.from(clientKeys).toString('base64');

    var options = {
        hostname: host,
        path: '/connect/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length,
            'Authorization': 'Basic ' + credentials
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            //console.log('statusCode:', res.statusCode);
            //console.log('headers:', res.headers);

            res.on('data', d => {
                data += d;
            });
            res.on('end', () => {
                const response = JSON.parse(data);
                const token = response.access_token;
                resolve(token)
            });
        });
        req.on('error', e => reject(e));
        req.write(postData);
        req.end();
    });
}