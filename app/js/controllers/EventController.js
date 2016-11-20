/**
 * Created by nravic on 10.11.2016.
 */
'use strict'

eventsApp.controller('EventController',
    function ($scope, eventData) {
        $scope.event = eventData.event;
        $scope.upVoteSession= function (session) {
            session.upVoteCount++;
            $scope.notZero=true;
        }
        $scope.downVoteSession= function (session) {
            if(session.upVoteCount>0){
                $scope.notZero=true;
                session.upVoteCount--;
            }
            if(session.upVoteCount<1){
                $scope.notZero=false;
            }
        }
        $scope.snippet = '<span style="color:red">Hi there!</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color: 'red'};
        $scope.myclass = "blue";
        $scope.sortOrder = 'name';
    });