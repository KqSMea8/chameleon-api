require('../../vm/weex/index')
var cml = require('../../.api/weex/index')["default"];
var expect = require('chai').expect;

describe('单位转换', function () {
  it('px2cpx 375px', function () {
    const pxNumber = 375;
    const cpxNumber = 750;
    return cml.px2cpx(pxNumber, cpx => {
      expect(cpxNumber).to.equal(cpx);
    });
  })
  it('px2cpx 414px', function () {
    const pxNumber = 414;
    const cpxNumber = 828;
    return cml.px2cpx(pxNumber, cpx => {
      expect(cpxNumber).to.equal(cpx);
    });
  })
  it('cpx2px 750cpx', function () {
    const cpxNumber = 750;
    const pxNumber = 375;
    return cml.cpx2px(cpxNumber, px => {
      expect(pxNumber).to.equal(px);
    });
  })
  it('cpx2px 828cpx', function () {
    const cpxNumber = 828;
    const pxNumber = 414;
    return cml.cpx2px(cpxNumber, px => {
      expect(pxNumber).to.equal(px);
    });
  })
})
