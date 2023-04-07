import { EventEmitter2 } from 'eventemitter2'
import path from 'path';
import { dirname } from 'desm';
import { spawn } from 'child_process';

class GKM extends EventEmitter2 {
	gkm;
	constructor() {
		super({wildcard: true});
		this.gkm = spawn('java', ['-jar', path.join(dirname(import.meta.url), 'lib/gkm.jar')]);
		this.gkm.stdout.on('data', (function(data) {
			data = data.toString().split(/\r\n|\r|\n/).filter(function(item) { return item; });
			for (var i in data) {
				var parts = data[i].split(':');
				this.emit(parts[0], parts.slice(1));
			}
		}).bind(this));
	}
	quit() {
		this.removeAllListeners('*');
		this.gkm.kill();
	}
}

export default GKM;
