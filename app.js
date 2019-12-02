// Import mit require
const { get, set, unset } = require("./utils/cmds");

console.log("hallo password manager");
const userArgs = process.argv.slice(2);
const [cmd, key, value] = userArgs;

switch (cmd) {
  case "get":
    const result = get(key);
    console.log(result);
    break;

  case "set":
    passwords[key] = value;
    set(key, value);
    break;

  case "unset":
    unset(key);
    break;

  default:
    console.error("unknown commando");
    break;
}

console.log("done");
