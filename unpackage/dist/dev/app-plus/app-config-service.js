
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/new/new","pages/new/detail","pages/hot/hot","pages/detail/detail","pages/tag/tag","pages/list/list","pages/center/center","pages/login/login","platforms/app-plus/about/about"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"看图","navigationBarBackgroundColor":"#FF80AB","backgroundColor":"#EFEFEF"},"tabBar":{"color":"#444444","selectedColor":"#FF80AB","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/new/new","iconPath":"static/index-0.png","selectedIconPath":"static/index-1.png","text":"最新"},{"pagePath":"pages/hot/hot","iconPath":"static/hot-0.png","selectedIconPath":"static/hot-1.png","text":"推荐"},{"pagePath":"pages/tag/tag","iconPath":"static/tag-0.png","selectedIconPath":"static/tag-1.png","text":"分类"},{"pagePath":"pages/center/center","iconPath":"static/center-0.png","selectedIconPath":"static/center-1.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"J_APP","compilerVersion":"2.9.8","entryPagePath":"pages/new/new","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/new/new","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"最新","enablePullDownRefresh":true,"titleNView":{"backButton":{"badgeText":"99","badgeColor":"#FF0000","badgeBackground":"#00FF00"}}}},{"path":"/pages/new/detail","meta":{},"window":{}},{"path":"/pages/hot/hot","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"最热","enablePullDownRefresh":true}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"详情","navigationBarBackgroundColor":"#000000","backgroundColor":"#000000","bounce":"none","titleNView":{"buttons":[{"type":"share"}]}}},{"path":"/pages/tag/tag","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类"}},{"path":"/pages/list/list","meta":{},"window":{"navigationBarTitleText":"专题","enablePullDownRefresh":true}},{"path":"/pages/center/center","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/platforms/app-plus/about/about","meta":{},"window":{"navigationBarTitleText":"关于"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
