# smartdc-cost
Extensions to the Joyent Smart Datacenter API for the financialy minded.

## Install
`npm install smartdc-cost -g`

## Use 
`sdc-listmachines-cost`

you can pass `--format` to define the type of output. Options are:
### `sdc-listmachines-cost --format=JSON`  (default)

```
  { 
    totals: { 
      hourly: '0.12', 
      monthly: '82.80', 
      yearly: '1051.20' 
    },
    devices: 
     [ { name: 'Host1',
         ip: '123.123.123.123',
         type: 'Extra Small 512 MB',
         price: 0.03 },
       { name: 'Host2',
         ip: '456.456.456.456',
         type: 'Small 1GB',
         price: 0.085 },
     ]
  }
```

### `sdc-listmachines-cost --format=human`

```
  Devices:
   > Host1 @ 123.123.123.123 (Extra Small 512 MB) => $0.03/hr
   > Host2 @ 456.456.456.456 (Small 1GB) => $0.085/hr

  Total:
   > $0.12/hr
   > $82.80/month
   > $1051.20/year
```

## Notes
Currently, the binary package(s) assume you will be runnign the commands from bash, and have the following envrionment variables set for the normal smartdc API:

 - `SDC_CLI_URL` url for the Joyent API (something like `https://us-sw-1.api.joyentcloud.com/`)
 - `SDC_CLI_ACCOUNT` your joyent account name
 - `SDC_CLI_KEY_ID` the name of the SSH/RSA Key registerd with Joyent
 - `SDC_CLI_IDENTITY` path to the SSH/RSA key you have configured with your Joyent account