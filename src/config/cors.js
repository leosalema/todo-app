/**We create this middleware according to the next pattern that receives three parameters, response and next request
* Insert a series of headers that allow them to come from different sources
* Everyone has access to the methods described below
*/

module.exports = function(req, res, next) {
    res.header('Acces-Control-Allow-Origin', '*')
    res.header('Acces-Control.Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Orign, X-Requested-With, Content-Type, Accept')
    next()
}