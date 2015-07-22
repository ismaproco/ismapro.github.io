'use strict'

var app = angular.module('portfolio',[]);

app.controller('basicInformation',function() {
    this.bio = {
        name : 'Ismael Jimenez',
        role : 'Software Developer',
        contacts : {
              mobile: '+(506) 6051 1105',
              email: 'isma@ismapro.com',
              github: 'ismaproco',
              twitter: '@ismapro',
              location: 'Costa Rica'
              },
        welcomeMessage: 'This is my Application Development Portfolio',
        skills: ['C#','Javascript','jQuery', 'Ajax', 'SharePoint', 'Python' , 'node.js'],
        biopic: '/images/avatar.jpg'
    }
});