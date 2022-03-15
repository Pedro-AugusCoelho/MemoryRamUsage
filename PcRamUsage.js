const os = require('os');

setInterval(() => {
    const {arch , platform, totalmem , freemem } = os;
    const tRam = totalmem() / 1024 / 1024;
    const tFree = freemem() / 1024 / 1024;
    const usage = (tFree / tRam) * 100;

    const stats = {
        os:platform(),
        Arch:arch(),
        TotalRam:`${parseInt(tRam)} MB`,
        FreeRam: `${parseInt(tFree)} MB`,
        status:`${usage.toFixed(2)}%`,
    };
    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 2000);