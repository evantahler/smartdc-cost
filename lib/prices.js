// current prices for joyents' servers
// Prices are in dollars/hr
// memory is in MB

// updated from http://www.joyent.com/products/compute-service/pricing + `sdc-listpackages` on 2013-06-26

exports.prices = [

  {
    "name": "g3-highcpu-8-smartos",
    "memory": 8192,
    "disk": 1410048,
    "swap": 16384,
    "vcpus": null,
    "price": 0.508
  },
  {
    "name": "g3-highmemory-34.25-kvm",
    "memory": 35072,
    "disk": 863232,
    "swap": 70144,
    "vcpus": 4,
    "price": 0.817
  },
  {
    "name": "g3-highcpu-7-kvm",
    "memory": 7168,
    "disk": 1410048,
    "swap": 14336,
    "vcpus": 7,
    "price": 0.508,
  },
  {
    "name": "g3-highcpu-8-kvm",
    "memory": 8192,
    "disk": 1410048,
    "swap": 16384,
    "vcpus": 8,
    "price": 0.508,
  },
  {
    "name": "g3-standard-64-smartos",
    "memory": 65536,
    "disk": 2150400,
    "swap": 131072,
    "vcpus": null,
    "price": 2.048,
  },
  {
    "name": "g3-standard-0.5-kvm",
    "memory": 512,
    "disk": 16384,
    "swap": 1024,
    "vcpus": 1,
    "price": 0.020,
  },
  {
    "name": "g3-standard-1.75-kvm",
    "memory": 1792,
    "disk": 57344,
    "swap": 3584,
    "vcpus": 1,
    "price": 0.056,
  },
  {
    "name": "g3-standard-15-kvm",
    "memory": 15360,
    "disk": 1502208,
    "swap": 30720,
    "vcpus": 4,
    "price": 0.480,
  },
  {
    "name": "g3-highcpu-1.75-kvm",
    "memory": 1792,
    "disk": 344064,
    "swap": 3584,
    "vcpus": 2,
    "price": 0.127,
  },
  {
    "name": "g3-standard-7.5-smartos",
    "memory": 7680,
    "disk": 755712,
    "swap": 15360,
    "vcpus": null,
    "price": 0.240,
  },
  {
    "name": "g3-standard-1.75-smartos",
    "memory": 1792,
    "disk": 57344,
    "swap": 3584,
    "vcpus": null,
    "price": 0.056,
  },
  {
    "name": "g3-standard-30-smartos",
    "memory": 30720,
    "disk": 1723392,
    "swap": 61440,
    "vcpus": null,
    "price": 0.96,
  },
  {
    "name": "g3-highmemory-68.375-smartos",
    "memory": 70016,
    "disk": 1148928,
    "swap": 140032,
    "vcpus": null,
    "price": 1.630,
  },
  {
    "name": "g3-standard-80-smartos",
    "memory": 81920,
    "disk": 2688000,
    "swap": 163840,
    "vcpus": null,
    "price": 2.560,
  },
  {
    "name": "g3-highcpu-7-smartos",
    "memory": 7168,
    "disk": 1410048,
    "swap": 14336,
    "vcpus": null,
    "price": 0.508,
  },
  {
    "name": "g3-standard-0.5-smartos",
    "memory": 512,
    "disk": 16384,
    "swap": 1024,
    "vcpus": null,
    "price": 0.020,
  },
  {
    "name": "g3-highmemory-34.25-smartos",
    "memory": 35072,
    "disk": 863232,
    "swap": 70144,
    "vcpus": null,
    "price": 0.817,
  },
  {
    "name": "g3-standard-15-smartos",
    "memory": 15360,
    "disk": 1502208,
    "swap": 30720,
    "vcpus": null,
    "price": 0.480,
  },
  {
    "name": "g3-standard-3.75-smartos",
    "memory": 3840,
    "disk": 125952,
    "swap": 7680,
    "vcpus": null,
    "price": 0.120,
  },
  {
    "name": "g3-standard-0.25-kvm",
    "memory": 256,
    "disk": 16384,
    "swap": 512,
    "vcpus": 1,
    "price": 0.015,
  },
  {
    "name": "g3-standard-0.625-kvm",
    "memory": 640,
    "disk": 20480,
    "swap": 1280,
    "vcpus": 1,
    "price": 0.020,
  },
  {
    "name": "g3-standard-7.5-kvm",
    "memory": 7680,
    "disk": 755712,
    "swap": 15360,
    "vcpus": 2,
    "price": 0.240,
  },
  {
    "name": "g3-standard-0.25-smartos",
    "memory": 256,
    "disk": 16384,
    "swap": 512,
    "vcpus": null,
    "price": 0.015,
  },
  {
    "name": "g3-highmemory-17.125-smartos",
    "memory": 17536,
    "disk": 430080,
    "swap": 35072,
    "vcpus": null,
    "price": 0.409,
  },
  {
    "name": "g3-highcpu-24-smartos",
    "memory": 24576,
    "disk": 1612800,
    "swap": 49152,
    "vcpus": null,
    "price": 1.739,
  },
  {
    "name": "g3-highcpu-1.75-smartos",
    "memory": 1792,
    "disk": 344064,
    "swap": 3584,
    "vcpus": null,
    "price": 0.127,
  },
  {
    "name": "g3-standard-0.625-smartos",
    "memory": 640,
    "disk": 20480,
    "swap": 1280,
    "vcpus": null,
    "price": 0.020,
  },
  {
    "name": "g3-standard-3.75-kvm",
    "memory": 3840,
    "disk": 125952,
    "swap": 7680,
    "vcpus": 1,
    "price": 0.120,
  },
  {
    "name": "g3-highmemory-17.125-kvm",
    "memory": 17536,
    "disk": 430080,
    "swap": 35072,
    "vcpus": 2,
    "price": 0.409,
  },
  {
    "name": "g3-standard-30-kvm",
    "memory": 30720,
    "disk": 1723392,
    "swap": 61440,
    "vcpus": 8,
    "price": 0.960,
  },
  {
    "name": "g3-highmemory-68.375-kvm",
    "memory": 70016,
    "disk": 1148928,
    "swap": 140032,
    "vcpus": 8,
    "price": 1.630,
  },
  {
    "name": "g3-highcpu-16-smartos",
    "memory": 16384,
    "disk": 1410048,
    "swap": 32768,
    "vcpus": null,
    "price": 1.160,
  },
  {
    "name": "g3-standard-48-smartos",
    "memory": 49152,
    "disk": 1723392,
    "swap": 98304,
    "vcpus": null,
    "price": 1.536,
  },

  //////////////////
  // OLD PACKAGES //
  //////////////////

  // images will be removed soon by Joyent

  {
    name: "Extra Small 512 MB",
    price: 0.03,
    memory: 512
  },
  {
    name: "Small 1GB",
    price: 0.085,
    memory: 1024
  },
  {
    name: "Medium 2GB",
    price: 0.17,
    memory: 2048
  },
  {
    name: "Medium 4GB",
    price: 0.24,
    memory: 4096
  },
  {
    name: "Large 8GB",
    price: 0.36,
    memory: 8192
  },
  {
    name: "Large 16GB",
    price: 0.64,
    memory: 16384
  },
  {
    name: "XL 32GB",
    price: 1.12,
    memory: 32768
  },
  {
    name: "XXL 48GB",
    price: 1.68,
    memory: 49152
  },
  {
    name: "XXXL 64GB",
    price: 2.24,
    memory: 65536
  },
  {
    name: "XXXXL 80GB",
    price: 2.80,
    memory: 81920
  },

]