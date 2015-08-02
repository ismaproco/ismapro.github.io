'use strict'

var app = angular.module('portfolio',[]);

app.controller('basicInformation',function() {
    this.bio = {
        name : 'Ismael Jimenez',
        role : 'Web Developer',
        contacts : {
              mobile: '+(506) 6051 1105',
              email: 'isma@ismapro.com',
              github: 'ismaproco',
              twitter: '@ismapro',
              location: 'Costa Rica',
              blog: 'http://ismapro.com'
              },
        welcomeMessage: 'Welcome to my Portfilo',
        welcomeDescription: 'In this portfolio you will find the my experience as Web Developer, the main projects I hed work on and some other details about me.',
        skills: ['C#','Javascript','jQuery', 'Ajax', 'SharePoint', 'Python' , 'node.js'],
        biopic: '/images/avatar.jpg'
    }
});

