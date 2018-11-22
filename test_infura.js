const Web3js = require('web3');

const getPastEvents = () => {
  const myWeb3 = new Web3js(new Web3js.providers.HttpProvider('https://rinkeby.infura.io/v3/47fe5f2d12c54b67922d13fc207c448b'));
  console.log('===========WEB33', myWeb3);
  myWeb3.eth.getTransaction('0xaf9e0b8ea76a35c04b55dbc864fff8741dee0aef1c0dd6ba722f53b3f9c8e75b').then(r => console.log('====RESULTWEB3TRANSACTION', r));
  // myWeb3.eth.getPastLogs({ fromBlock: 0, toBlock: 'latest' }).then(r => console.log('PASTLOGS', r));
  myWeb3.eth.getPastLogs({
    fromBlock: myWeb3.utils.toHex('0'),
    toBlock: myWeb3.utils.toHex('latest'),
    address: '0x2b60582e65b9bed7ea2112b48b521a7d8627f83f'
  }).then(r=> console.log('PASTLOG=======', r));
};
