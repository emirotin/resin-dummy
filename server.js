var i = 0;
function run() {
	console.log((++i) + '. Running...');
	setTimeout(run, 10000);
}

run();
