var common = require(__dirname + '/../node_modules/smartdc/lib/cli_common.js');
var prices = require(__dirname + "/prices.js").prices

var createClient = function(callback){
  common.parseArguments({}, {}, function(parsed){
    var client = common.newClient(parsed);
    callback(null, client);
  });
};

var findPrice = function(host){
  var size = host.memory;
  for(var i in prices){
    if(size == prices[i].memory){
      var priceBlock = prices[i];
      return priceBlock;
    }
  }
  return {
    name: "unknown machine type",
    price: 0.00,
    memory: null
  };
};

var listmachinesCost = function(callback){
  var client = createClient(function(err, client){
    client.listMachines({}, {}, function(err, hosts, done){
      if(err){
        console.log(err)
      }else{
        devices = [];
        total = 0;
        hosts.forEach(function(host){
          var priceBlock = findPrice(host);
          devices.push({
            name: host.name,
            ip: host.primaryIp,
            type: priceBlock.name,
            price: priceBlock.price,
          });
          total = total + priceBlock.price;
        });
        if(typeof callback == "function"){
          callback({
            total: total,
            devices: devices,
          });
        }
      }
    });
  });
};

exports.common = {
  prices: prices,
  createClient: createClient,
  findPrice: findPrice,
  listmachinesCost: listmachinesCost,
}