// 获取地址栏参数
export function getSearch () {
  let loopS, params, reg, search;
  search = window.location.search;
  params = {};
  reg = /([\w\d]+)=([^&]*)/g;
  loopS = 10;
  while (reg.test(search) && loopS > 0) {
    params[RegExp.$1] = decodeURIComponent(RegExp.$2);
    loopS--;
  }
  return params;
}