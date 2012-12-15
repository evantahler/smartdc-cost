# smartdc-cost
Extensions to the Joyent Smart Datacenter API for the financialy minded.

## Install
`npm install smartdc-cost -g`

## Use 
`sdc-listmachines-cost` will return results like this:

  Devices:
   > Host1 @ 123.123.123.123 (Extra Small 512 MB) => $0.03/hr
   > Host2 @ 456.456.456.456 (Small 1GB) => $0.085/hr

  Total:
   > $0.12/hr
   > $82.80/month

## Notes
Currently, the binary package(s) assume you will be runnign the commands from bash, and have the following envrionment variables set for the normal smartdc API:

`export SDC_CLI_URL` url for the Joyent API (something like `https://us-sw-1.api.joyentcloud.com/`)
`export SDC_CLI_ACCOUNT` your joyent account name
`export SDC_CLI_KEY_ID` the name of the SSH/RSA Key registerd with Joyent
`export SDC_CLI_IDENTITY` path to the SSH/RSA key you have configured with your Joyent account