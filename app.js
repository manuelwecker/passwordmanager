console.log("hallo password manager");

const [cmd, key, value] = process.argv.slice(2);

const passwords = {
  wifi: 1234,
  mac: "sascha"
};

switch (cmd) {
  case "get":
    console.log(passwords[key]);
    break;

  case "set":
    console.log("set");
    passworts[key] = value;
    break;

  case "unset":
    console.log("unset");
    delete passworts[key];
    break;

  default:
    console.error("unknown commando");
    break;
}

console.log(passwords);
