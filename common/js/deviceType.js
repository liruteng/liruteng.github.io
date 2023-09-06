// 获取设备类型
var isMobile = /iPhone|Android/i.test(navigator.userAgent);
let oldPageUrl = window.location.href;
if(!isMobile && oldPageUrl.includes('/h5/')){
  window.location.href = oldPageUrl.replace('/h5/', '/');
}else if(isMobile && !oldPageUrl.includes('/h5/')){
  let pathname=window.location.pathname;
  if(pathname == "/"){
    window.location.href = window.location.origin+"/h5"+window.location.pathname+"index.html";
  }else{
    window.location.href = window.location.origin+"/h5"+window.location.pathname;
  }
  
}

