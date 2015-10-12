angular.module("ss.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("basic-table/basic-table.html","<div>\r\n    <table class=\"ui very basic table\">\r\n        <thead>\r\n            <tr>\r\n                <th ng-repeat=\"header in ssHeaders\">{{header}}</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr ng-repeat=\"data in ssDatas\">\r\n                <td ng-repeat=\"field in data\">\r\n                    <div ng-if=\"field.type==\'text\'\">{{field.label}}</div>\r\n                    <div ng-if=\"field.type==\'icon\'\">\r\n                        <i class=\"{{field.label}}\"></i>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div style=\"text-align: center;\">\r\n        <ss-pagination ss-total-page=\"25\"></ss-pagination>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("menu/menu.html","<div class=\"ui red segment\">\r\n  <div class=\"ui secondary six item menu\">\r\n    <a class=\"item\" ng-click=\"locateToSection(section)\" ng-repeat=\"section in ssItems\" ng-class=\"{\'active\': section.active}\">{{section.displayName}}</a>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("header-menu/header-menu.html","<div class=\"ui inverted vertical\">\r\n    <div class=\"item\" ng-repeat = \"item in headers\">\r\n        <div class=\"header\">\r\n            <i class=\"{{item.icon}}\"></i>\r\n            {{item.displayName}}\r\n        </div>\r\n        <div class=\"menu\" ng-repeat=\"subItem in item.children\">\r\n            <a class=\"item\" ng-click = \"locate(item, subItem)\" ng-class=\"{\'active\': subItem.active}\">\r\n                {{subItem.displayName}}\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
$templateCache.put("pagination/pagination.html","<div class=\"ss-pagination\">\r\n    <div class=\"ss-page-box\" ng-click=\"setCurrentPage(1)\">\r\n        <i class=\"angle double left icon\"></i>\r\n    </div>\r\n\r\n    <div class=\"ss-page-box\" ng-click=\"setCurrentPage(currentPage - 1)\">\r\n        <i class=\"angle left icon\"></i>\r\n    </div>\r\n\r\n    <div class=\"ss-page-content\">\r\n        <div class=\"ss-page-box\" ng-repeat=\"page in pages track by $index\" ng-click=\"setCurrentPage(page)\" ng-class=\"{\'ss-selected-page\': currentPage == page}\">\r\n            <span>{{page}}</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ss-page-box\" ng-click=\"setCurrentPage(currentPage + 1)\">\r\n        <i class=\"angle right icon\"></i>\r\n    </div>\r\n\r\n    <div class=\"ss-page-box\" ng-click=\"setCurrentPage(ssTotalPage)\">\r\n        <i class=\"angle double right icon\"></i>\r\n    </div>\r\n</div>\r\n");}]);