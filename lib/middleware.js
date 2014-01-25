var ips = {};

var objectSize = function (object) {
  var count = 0;
  for (var key in object)
    if (object.hasOwnProperty(key)) {
      count++;
    }
  return count;
};

module.exports = {
  
  // put it under express.static
  log: function (req, res, next) {
    var ip = req.ip;
    var path = req.path;

    if (ips[ip]) {
      ips[ip][path]++;
    } else {
      ips[ip] = {};
      ips[ip][path] = 1;
    }

    console.log(Date(), objectSize(ips), ip, ips[ip]);
    next();
  }
};