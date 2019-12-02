const fs = require("fs");

const passwordFileName = ".password.json";

function readPasswords() {
  try {
    const passwordJSON = fs.readFileSync(passwordFileName, "utf-8");
    const passwords = JSON.parse(passwordJSON);
    return passwords;
  } catch (error) {
    return {};
  }
}

function writePasswords(passwords) {
  fs.writeFileSync(passwordFileName, JSON.stringify(passwords, null, 2));
}

function get(key) {
  const passwords = readPasswords();
  return passwords[key];
}

function set(key, value) {
  const passwords = readPasswords();
  passwords[key] = value;
  writePasswords(passwords);
}

function unset(key) {
  const passwords = readPasswords();
  delete passwords[key];
  writePasswords(passwords);
}

// module.exports = {
//   get,
//   set,
//   unset
// }

exports.get = get;
exports.set = set;
exports.unset = unset;
