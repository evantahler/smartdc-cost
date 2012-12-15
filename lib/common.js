var joyent = require('smartdc');
var argv = require('optimist').argv;

var createClient = function(mode, opts){
  // options => {username: NAME, password: PASS} OR {key: pathToKey, keyId: nameOfKey}
  // options => {account: ACCOUNT}
  // mode => "key" or "password"

  if(opts == null)
    opts = {};

  if(mode == null){
    mode = "key";
  }

  if(opts.account == null){
    opts.account = process.env['SDC_CLI_ACCOUNT'];
  }

  if(opts["url"] == null)
    opts["url"] = "https://us-sw-1.api.joyentcloud.com"

  if(opts["version"] == null)
    opts["version"] = "~6.5";

  if(mode == "password"){
    if(opts.username == null){
      if(argv.username != null){
        opts.username = argv.username;
      }else{
        opts.username = process.env['SDC_CLI_ACCOUNT'];
      }
    }

    if(opts.password == null){
      if(argv.password != null){
        opts.password = argv.password;
      }else{
        opts.password = process.env['SDC_CLI_PASSWORD'];
      }
    }
  }else if(mode == "key"){
    if(opts.key == null){
      opts.key = process.env['SDC_CLI_IDENTITY'];
    }

    if(opts.keyId == null){
      opts.keyId = process.env['SDC_CLI_KEY_ID'];
    }
  }else{
    throw new Error("only 'password' or 'key' mode can be used for authentication")
  }
  return joyent.createClient(opts);
}

exports.common = {
  prices: require(__dirname + "/prices.js").prices;
  createClient: createClient;
}