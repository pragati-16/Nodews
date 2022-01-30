// controller is accessed by  router, router is accessed by browser. 
module.exports.profile=function(req,res) {
    return res.end('<h1>User Profile</h1>');
}