const os = require("os");

const hostname = os.hostname();
console.log(hostname);

const cpus = os.cpus();
console.log(cpus[0]);
console.log(cpus[0].times.user);

// for (const cpu of cpus) {
//     console.log(cpu.model);
// }

const totalMemory = os.totalmem();
console.log("memory: ", Math.trunc(totalMemory / (2 ** 10) / (2 ** 10) / (2 ** 10)), "GB");