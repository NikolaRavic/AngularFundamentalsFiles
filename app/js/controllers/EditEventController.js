/**
 * Created by Nikola on 11/13/2016.
 */
'use strict'
eventsApp.controller('EditEventController', function ($scope) {
    $scope.saveEvent = function(event, newEventForm){
        console.log(newEventForm)
        if(newEventForm.$valid){
            window.alert('event ' + event.name + ' saved!');
        }
    }
    $scope.cancelEdit = function () {
        window.location = "/EventDetails.html";
    }
})