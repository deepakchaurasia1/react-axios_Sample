//============================
// Define the functions that will be called
// when someone accesses the route on our
// api
//============================

exports.helloworld = function(req, res, next) {
  res.status(200).json({
    message: "Hello world!"
  })
}

exports.savePayload = function(req, res, next) {
  res.status(200).json({
    message: "DATA Received by Server"
  })
}

exports.helloNewers = function(req, res,next) {
  res.status(200).json({
    message: "Hello Newers!!!!!"
  })
}


