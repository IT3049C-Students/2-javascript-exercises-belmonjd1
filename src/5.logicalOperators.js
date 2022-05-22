// use the logical operator not if statements

// or: should return true if either a or b are truthy. False, if both are false
function or(a, b) {

  ret = false;

  if ((a == true) || (b == true)) {
    ret = true;
  }

  return ret;
}

//and: should return true only if both a and b are truthy
function and(a, b) {

  ret = true;

  if ((a == false) || (b == false)) {
    ret = false;
  }

  return ret;
}

module.exports = {
  or,
  and
};