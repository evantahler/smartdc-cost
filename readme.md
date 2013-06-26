# smartdc-cost
Extensions to the Joyent Smart Datacenter API for the financially minded.

## Install
`npm install smartdc-cost -g`

## Use 
`sdc-listmachines-cost`
 
 **Options**

- format: `human` or `json`
  - default: json
- sort: `alphabetical` or `price`
  - default: alphabetical
- period: `hour`, `day`, `month`, or `year` 
  - only valid if you are using the `--format=human` flag
  - default: hour

## Examples

*`sdc-listmachines-cost`*

```
  { 
    totals: { 
      hour: '0.12', 
      day: '3.12'
      month: '82.80', 
      year: '1051.20' 
    },
    devices: 
     [ { name: 'Host1',
         ip: '123.123.123.123',
         type: 'Extra Small 512 MB',
         prices: { 
           day: '0.72',
           year: '262.80',
           month: '22.32',
           hour: '0.03' }
        },
       { name: 'Host2',
         ip: '456.456.456.456',
         type: 'Small 1GB',
         prices: { 
           day: '2.04',
           year: '744.60',
           month: '61.20',
           hour: '0.085' }
         },
     ]
  }
```

*`sdc-listmachines-cost --format=human --sort=price --period=day`*

```
  Devices:
   > Host2 @ 456.456.456.456 (Small 1GB) => $2.04/day
   > Host1 @ 123.123.123.123 (Extra Small 512 MB) => $0.72/day

  Total:
   > $0.12/hr
   > $3.12/day
   > $82.80/month
   > $1051.20/year
```

## Notes
There are some packages which joyent no longer lists prices for.  These prices are either coppied from earlier data, or assumed based on the most similar current package.

All prices are for open-source servers (smartOS, Ubuntu, etc).  The prices of your induvidual machines *will* be higher than listed for licensed servers (windows, zeus, etc).

Currently, the binary package(s) assume you will be running the commands from bash, and have the following environment variables set for the normal smartdc API:

 - `SDC_URL` url for the Joyent API (something like `https://us-sw-1.api.joyentcloud.com/`)
 - `SDC_ACCOUNT` your joyent account name
 - `SDC_KEY_ID` the fingerprint of your SSH key

If you are upgrading from `smartdc` v6x, note the name change for the required ENV variables, and click visit https://npmjs.org/package/smartdc to learn how to generate your ssh fingerprint