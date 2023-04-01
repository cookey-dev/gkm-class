import GKM from './GKM.mjs';

const gkm = new GKM();

gkm.events.on('key.*', function(data) {
    console.log(this.event + ' ' + data);
});

setTimeout(() => {
    gkm.quit();
}, 10000);
