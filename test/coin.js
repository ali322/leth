let Coin = artifacts.require('./Coin.sol')

contract('Coin', (accounts)=>{
  it('should put 35',async ()=>{
    let instance = await Coin.deployed()
    await instance.mint(accounts[0], 35)
    let amount = await instance.query.call(accounts[0])
    expect(amount.toNumber()).to.equal(35)
  })
})