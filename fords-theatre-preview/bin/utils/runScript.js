
const childProcess = require('child_process');

const runScript = (scriptPath, callback) => {
  // keep track of whether callback has been invoked to prevent multiple invocations
  let invoked = false;

  let process = childProcess.fork(scriptPath);
  // listen for errors as they may prevent the exit event from firing
  process.on('error', function(err) {
    if (invoked) return;
    invoked = true;
    callback(err);
  });

  // execute the callback once the process has finished running
  process.on('exit', function(code) {
    console.log(code)
    if (invoked) return;
    invoked = true;
    let err = code === 0 ? null : new Error('exit code ' + code);
    console.log(err)
    callback(err);
  });
};

module.exports = runScript;