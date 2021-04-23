const seedrandom = require('seedrandom');

exports.generate = function(len, chars, pw, resource) {
    let rng = seedrandom(pw+resource);

    let index = 0;
    let newpw = "";
    let max = chars.length;

    for(let i=0; i<len; i++) {
        index = Math.floor(rng() * max);
        newpw += chars[index];
    }

    return newpw;
}
