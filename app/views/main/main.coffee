"use strict"

angular.module "ss.views"

.controller "ss.views.main", ["$rootScope", "$scope",(rootScope, $scope)->
    $scope.visible = true
    $scope.firstLoad = true

    $scope.$on "ss.components.header-menu.changed", (scope, item, subItem)->
        $scope.item = item
        $scope.subItem = subItem

    $scope.requests = requests

    ###
    $scope.requests = {
        header: "You have 2 requests"
        content:[
                img: "elliot.jpg"
                datetime: "3 hours ago"
                summary: "Elliot added jenny to group Cowarker"
            ,
                img: "jenny.jpg"
                datetime: "23 hours ago"
                summary: "Jenny added sissy to group A"
        ]
    }
    ###
    $scope.headers = [
                name: "home"
                displayName: "Home"
                icon: "home icon"
                expanded: false
                children:[
                    name: "summer"
                    displayName: "summer lu"
                    icon: "home icon"
                    active: false
                ,
                    name: "sissy"
                    displayName: "sissy li"
                    icon: "home icon"
                    active: false
                ]
            ,
                name: "users"
                displayName: "Users"
                icon: "users icon"
                expanded: false
                children:[
                    name: "alex"
                    displayName: "Alex lu"
                    icon: "home icon"
                    active: false
                ,
                    name: "jimmy"
                    displayName: "Jimmy li"
                    icon: "home icon"
                    active: false
                ]
            ]

    $scope.mailNotifications = {
        header: "You have 4 messages"
        content: [
                img: "elliot.jpg"
                datetime: "12 minutes ago"
                summary: "Imrich sent you a message"
            ,
                img: "jenny.jpg"
                datetime: "46 minutes ago"
                summary: "Bill sent you a message"
            ,
                img: "jenny.jpg"
                datetime: "46 minutes ago"
                summary: "Bill sent you a message"
            ,
                img: "jenny.jpg"
                datetime: "46 minutes ago"
                summary: "Bill sent you a message"
        ]
    }

    $scope.notifications = {
        header: "You have 3 notifications"
        content: [
                img: "elliot.jpg"
                datetime: "12 minutes ago"
                summary: "Imrich sent you a message"
            ,
                img: "jenny.jpg"
                datetime: "46 minutes ago"
                summary: "Bill sent you a message"
            ,
                img: "jenny.jpg"
                datetime: "46 minutes ago"
                summary: "Bill sent you a message"
        ]
    }

    $scope.setNotePanelVisible = (isRequestNote, isMailNote, isNotificationNote)->
        $scope.requestNote = isRequestNote
        if $scope.requestNote
            $scope.pannelData = $scope.requests
        $scope.mailNote = isMailNote
        if $scope.mailNote
            $scope.pannelData = $scope.mailNotifications
        $scope.notificationNote = isNotificationNote
        if $scope.notificationNote
            $scope.pannelData = $scope.notifications

]