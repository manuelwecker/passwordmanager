const passwords = {
  wifi: 1234,
  mac: "mac123"
};

function get(key) {
  return passwords[key];
}

function set(key) {
  passwords[key] = value;
}

function unset(key) {
  delete passwords[key];
  console.log("unset");
}

module.exports = {
  get,
  set,
  unset
};
// Alternative Schreibweise
// exports.get = get;
// exports.set = set;
// unset.set = set;
