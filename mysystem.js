var os = require('os');

var message = 'Here is some info of your system';

var sysarray = new Array('Type: ' + os.type(),
						'Node Version: ' + process.version,
						'Platform: ' + os.platform(),
						'Hostname: ' + os.hostname(),
						'Total memory: ' + os.totalmem(),
						'Free Memory: ' + os.freemem(),
						'Uptime: ' + os.uptime()
	);

console.log(message);

var arraylen = sysarray.length;
i=0;
while (i < sysarray.length) {
	console.log(sysarray[i]);
	i++;
}