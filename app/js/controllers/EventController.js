/**
 * Created by nravic on 10.11.2016.
 */
'use strict'

eventsApp.controller('EventController',
    function ($scope) {
        $scope.event = {
            name: 'Angular boot camp',
            date: 1359781015626,
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions:[
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives.',
                    upVoteCount: 0

                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Nikola Ravic',
                    duration: 2,
                    level: 'Beginner',
                    abstract: 'In this session you will learn the ins and outs of directives.',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Snovak',
                    duration: 3,
                    level: 'Intermediate',
                    abstract: 'In this session you will learn the ins and outs of directives.',
                    upVoteCount: 0
                }
            ]
        };
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