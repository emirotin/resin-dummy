var name = process.env.NAME || '',
	log = '. Running'

if (name) {
	log += ' ' + name;
}
log += '...';

var i = 0;

function run() {
	console.log((++i) + log);
	setTimeout(run, 10000);
}

run();
