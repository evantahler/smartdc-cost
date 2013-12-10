var common     = require(__dirname + '/../node_modules/smartdc/lib/cli_common.js');
var oldPrices  = require(__dirname + "/old-prices.json");
var request    = require("request");
var pricingURL = "http://www.joyent.com/assets/js/pricing.json";
var pricingMap = oldPrices;

var createClient = function(callback){
  common.parseArguments({}, {}, function(parsed){
    var client = common.newClient(parsed);
    callback(null, client);
  });
};


var buildPriceMap = function(callback){
  request.get(pricingURL, function(error, response, body){
    body = JSON.parse(body)
    if(body["Portfolio"] != null){
      body["Portfolio"].forEach(function(server){
        pricingMap[server["API Name"]] = server["Price"];
      });
      callback();
    }else{
      callback( new Error("Cannot get Joyent Pricing") );
    }
  });
}


var findPrice = function(host){
  if(pricingMap[host.package] != null){
    return pricingMap[host.package];
  }else{
    return 0.00;
  }
};

var listmachinesCost = function(callback){
  buildPriceMap(function(error){
    var client = createClient(function(err, client){
      client.listMachines({}, {}, function(err, hosts, done){
        if(err){
          console.log(err)
        }else{
          devices = [];
          total = 0;
          hosts.forEach(function(host){
            
            var price = findPrice(host);

            devices.push({
              name: host.name,
              ip: host.primaryIp,
              type: host.package,
              prices: {
                hour:  parseFloat( price.toFixed(2)),
                day:   parseFloat( (price * 24).toFixed(2)),
                month: parseFloat( (price * 24 * 31).toFixed(2)),
                year:  parseFloat( (price * 24 * 365).toFixed(2)),
              }
            });

            total = total + price;
          });
          totals = {
            hour:  parseFloat( total.toFixed(2)),
            day:   parseFloat( (total * 24).toFixed(2)),
            month: parseFloat( (total * 24 * 31).toFixed(2)),
            year:  parseFloat( (total * 24 * 365).toFixed(2)),
          };
          if(typeof callback == "function"){
            callback({
              totals: totals,
              devices: devices,
            });
          }
        }
      });
    });
  });
};

exports.common = {
  pricingMap: pricingMap,
  createClient: createClient,
  findPrice: findPrice,
  listmachinesCost: listmachinesCost,
}