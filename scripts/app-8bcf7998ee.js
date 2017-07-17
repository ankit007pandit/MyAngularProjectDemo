!function(){"use strict";angular.module("myNewProject",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("myNewProject").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("myNewProject").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function t(t,a,n,o){var r,l=e(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){l.type(e).pause()["delete"]()}),r=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(e){l.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})}function a(e,t){function a(){return n().then(function(){e.info("Activated Contributors View")})}function n(){return t.getContributors(10).then(function(e){return o.contributors=e,o.contributors})}var o=this;o.contributors=[],a()}a.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return n}e.$inject=["malarkey"],angular.module("myNewProject").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,t){function a(a){function o(e){return e.data}function r(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return a||(a=30),t.get(n+"/contributors?per_page="+a).then(o)["catch"](r)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:n,getContributors:a};return o}e.$inject=["$log","$http"],angular.module("myNewProject").factory("githubContributor",e)}(),function(){"use strict";function e(e,t,a){function n(){r(),e(function(){l.classAnimation="rubberBand"},4e3)}function o(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function r(){l.awesomeThings=t.getTec(),angular.forEach(l.awesomeThings,function(e){e.rank=Math.random()})}var l=this;l.awesomeThings=[],l.classAnimation="",l.creationDate=1499948411653,l.showToastr=o,n()}e.$inject=["$timeout","webDevTec","toastr"],angular.module("myNewProject").controller("MainController",e)}(),function(){"use strict";function e(e,t,a,n){var o=this;o.leaveAddDetails={},o.leaveTypeArray=["PL","SL","CL"],o.showRecordsArray=["All",1,2,3,4],o.open=!0,o.addSelected=!1,o.leaveRecordsShowCount="All",o.weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o.toastrMessageOptions={timeOut:0,position:"toast-top-full-width",extendedTimeOut:0,closeButton:!0,tapToDismiss:!1},o.getLeaveServiceDefaults=function(){o.leaveDetails=a.getLeaveDefaultData,o.count=o.leaveDetails.length},o.getLeaveServiceDefaults(),o.countSelected=function(e){"All"==e?o.count=o.leaveDetails.length:o.count=e},o.addToCart=function(e){o.addSelected=!0;var a=angular.copy(e);a.day=o.weekday[a.startDate.getDay()],o.dateObj=new Date,"SL"==a.leaveType&&e.startDate>=o.dateObj?n.error("Sick leave should be current date or previous date",o.toastrMessageOptions):e.startDate>=e.endDate?n.error("End date should be greater than Start date",o.toastrMessageOptions):(a.endDate=t("date")(a.endDate,"dd/MM/yyyy"),a.startDate=t("date")(a.startDate,"dd/MM/yyyy"),o.leaveDetails.push(a),o.leaveRecordsShowCount="All",o.countSelected("All"),n.info("Leave getting added to cart")),o.leaveAddDetails={}},o.deleteFromCart=function(e,t){swal({title:"would you like to remove leave starting from "+e,text:"",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",closeOnConfirm:!0,html:!1},function(){o.deleteSelect(e,t)})},o.deleteSelect=function(t,a){e(function(){o.leaveDetails.splice(a,1)})},o.submitDataFromCart=function(){console.log("data to submit on post call"),console.log(o.leaveDetails)}}angular.module("myNewProject").controller("leaveController",e),e.$inject=["$timeout","$filter","leaveService","toastr"]}(),function(){"use strict";function e(e){var t=function(){return e({url:"../../assets/json/leaveData.json",method:"GET",cache:!1})},a=function(t){return e({method:"POST",data:t,cache:!1,headers:{"Content-Type":"application/json"}}).then(n,o)},n=function(e){return e.data},o=function(e){},r=[{startDate:"27/06/2016",endDate:"28/06/2016",day:"Monday",halfDay:!0,leaveType:"PL",reason:"",contactNumber:""},{startDate:"29/06/2016",endDate:"30/06/2016",day:"Tuesday",halfDay:!1,leaveType:"SL",reason:"",contactNumber:""},{startDate:"28/06/2016",endDate:"29/06/2016",day:"Thrusday",halfDay:!1,leaveType:"CL",reason:"",contactNumber:""},{startDate:"27/05/2016",endDate:"30/05/2016",day:"Saturday",halfDay:!1,leaveType:"PL",reason:"",contactNumber:""}];return{getLeaveServiceDefaults:t,sendLeaveData:a,getLeaveDefaultData:r}}angular.module("myNewProject").service("leaveService",["$http",e])}(),function(){"use strict";function e(e){}angular.module("myNewProject").controller("homeController",e),e.$inject=["$scope"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("myNewProject").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/home",templateUrl:"app/home/home.html",controller:"homeController",controllerAs:"home"}).state("leave",{url:"/leave",templateUrl:"app/leave/leave.html",controller:"leaveController",controllerAs:"leave"}),t.otherwise("/leave")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("myNewProject").config(e)}(),function(){"use strict";angular.module("myNewProject").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("myNewProject").config(e)}(),angular.module("myNewProject").run(["$templateCache",function(e){e.put("app/home/home.html",'<div class=applyLeaveDetails><div class="container bg"><div class=leaveForm><h3>homePage<h3></h3></h3></div></div></div>'),e.put("app/leave/leave.html",'<div class=applyLeaveDetails><div class="container bg"><div class=leaveForm><h3>Apply Leave</h3><form name=leaveForm novalidate><div class="col-sm-4 fieldset"><label>Leave type</label><div class="button dropdown"><select ng-model=leave.leaveAddDetails.leaveType ng-options="item for item in leave.leaveTypeArray" ng-focus="leave.addSelected=false"><option value="" style="display: none"></option></select></div></div><div class="col-sm-4 fieldset" ng-class="{ \'has-error\': leaveForm.startDate.$touched && leaveForm.startDate.$invalid }"><label>Start date<sup>*</sup></label><input type=date ng-model=leave.leaveAddDetails.startDate name=startDate required> <span ng-messages=leaveForm.startDate.$error ng-if=leaveForm.startDate.$touched><span ng-message=required>The start date is required.</span></span></div><div class="col-sm-4 fieldset" ng-class="{ \'has-error\': leaveForm.endDate.$touched && leaveForm.endDate.$invalid }"><label>End date<sup>*</sup></label><input type=date ng-model=leave.leaveAddDetails.endDate name=endDate required> <span ng-messages=leaveForm.endDate.$error ng-if=leaveForm.endDate.$touched><span ng-message=required>The end date is required.</span></span></div><div class="col-sm-8 fieldset" ng-class="{ \'has-error\': leaveForm.reason.$touched && leaveForm.reason.$invalid }"><label>Reason<sup>*</sup></label><input type=text ng-model=leave.leaveAddDetails.reason name=reason required> <span ng-messages=leaveForm.reason.$error ng-if=leaveForm.reason.$touched><span ng-message=required>The reason is required.</span></span></div><div class="col-sm-4 fieldset" ng-class="{ \'has-error\': leaveForm.contactNumber.$touched && leaveForm.contactNumber.$invalid }"><label>Contact details</label><input type=text ng-model=leave.leaveAddDetails.contactNumber ng-minlength=10 ng-maxlength=10 maxlength=10 ng-pattern=/^[0-9]*$/ name=contactNumber> <span ng-messages=leaveForm.contactNumber.$error><span ng-message=minlength>Number is too short.</span> <span ng-message=maxlength>Number is too long.</span> <span ng-message=pattern>Value should be number.</span></span></div><div class="col-sm-4 pull-right"><button ng-click=leave.addToCart(leave.leaveAddDetails) class=primary-btn name="">Add to Bucket</button></div></form></div></div></div><div class="container demo bg"><div class=panel-group id=accordion role=tablist aria-multiselectable=true><div class="panel panel-default"><div class=panel-heading role=tab id=headingOne><h4 class=panel-title><a role=button data-toggle=collapse data-parent=#accordion href="" aria-expanded=true aria-controls=collapseOne ng-click="leave.open = !leave.open"><i class="more-less glyphicon" ng-class="(leave.open)?\'glyphicon-minus\':\'glyphicon-plus\'"></i> Leave Bucket</a></h4></div><div id=collapseOne class="panel-collapse collapse" ng-class="(leave.open)?\'in\':\'\'" role=tabpanel aria-labelledby=headingOne aria-expanded=true style="height:auto !important"><div class=panel-body><div class=filter><div class="entries col-sm-3"><span>Show</span><div class="button dropdown"><select ng-model=leave.leaveRecordsShowCount ng-options="item for item in leave.showRecordsArray" ng-change=leave.countSelected(leave.leaveRecordsShowCount)><option value="" style="display: none"></option></select></div><span>entries</span></div><div class="col-sm-3 duration"><span>Duration: 2</span></div><div class="search col-sm-3 pull-right"><span>Search:</span> <input type=search ng-model=leave.by_day.day name=search></div></div><table class=leaveInformationtable><thead><tr><th>Date</th><th>Day</th><th>Half Day</th><th>Leave Type</th><th>Action</th></tr></thead><tbody><tr ng-repeat="item in leave.leaveDetails | limitTo : leave.count | filter:leave.by_day"><td>{{item.startDate}}</td><td>{{item.day}}</td><td><input ng-model=item.halfDay type=checkbox name=leave class=leaveCheckbox></td><td><select ng-model=item.leaveType class=leavetype ng-options="items for items in leave.leaveTypeArray"><option value="" style="display: none"></option></select></td><td><a href=javascript:; ng-click=leave.deleteFromCart(item.startDate,$index)><img src=../assets/images/delete.png alt="delete icon"></a></td></tr></tbody></table><div class="col-sm-3 pull-right no-pad"><button type=submit ng-click=leave.submitDataFromCart() class=primary-btn name="">Submit</button></div></div></div></div></div><!-- panel-group --></div>'),e.put("app/main/main.html","<div><div><acme-navbar></acme-navbar></div></div>"),e.put("app/components/navbar/navbar.html",'<header><div class=container><div class=logo><a href=index.html><img src=../assets/images/logo.png alt="tavant logo"></a></div><div class=personalInfoSection><div class=user>Hi <span class=name>ABCD</span> <span class=profilePicture><img src=../assets/images/user-img.png alt="user profile image"></span></div><div class=settings><ul class="nav pull-right"><li class=dropdown><a href=# class=dropdown-toggle data-toggle=dropdown><img src=../assets/images/setting.png alt="settings icon"></a><ul class=dropdown-menu><li><a href=#>Setting 1</a></li><li><a href=#>Setting 2</a></li><li><a href=#>Setting 3</a></li><li><a href=#>Setting 4</a></li></ul></li></ul></div><div class=logout><button type=button name=""><img src=../assets/images/logout.png alt="logout button"></button></div></div></div></header>')}]);
//# sourceMappingURL=../maps/scripts/app-8bcf7998ee.js.map
