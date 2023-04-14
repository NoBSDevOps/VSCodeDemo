https.request(request, function (res) {
    var data = '';
    res.on('data', function (chunk) {
     data += chunk;
    });
    res.on('end', function () {
     data = JSON.parse(data);
     resolve(data);
    });
   }).on('error', function () {
    reject('Failed to make an OAuth request');
   })