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
      welcomeDescription: 'In this resume you will find the my experience as Web Developer, and the main projects I hed work on and some other details about me.',
      skills: ['C#','Javascript','jQuery', 'Ajax', 'SharePoint', 'Python' , 'node.js'],
      biopic: '/images/avatar.jpg'
  };

  /* work json array */

  this.work = [{
      employer: 'Intertec International',
      title: 'Application Developer',
      location: 'Costa Rica',
      dates: '12/12/2012',
      description: 'Work as a Vendor for Wells Fargo Bank, at the Information Security Area, as SharePoint Developer for internal projects.The projects include, create business dashboard for the managers, build intelligent forms using jQuery and InfoPath, Administration of Lists and Libraries data, and maintaining the Teams environment.',
     },
     {
      employer: 'SharePoint Support Engineer',
      title: 'Quintec',
      location: 'Colombia',
      dates: '02/01/2011-12/01/2012',
      description: 'Build new characteristics and client based solutions for SharePoint 2010 enterprise sites and also bring support to current installations, some of the tools that have been created are auction sites with HTML5 and CSS3 combined with SharePoint Master Pages, to bring live results to the contestants, also was part of the team for the BI dashboard for the ETB (Primary Bogotá Telephone Company) in Bogotá Colombia.',
     },
     {
      employer: 'Software Developer' ,
      title: 'Rolsoft',
      location: 'Colombia',
      dates: '12/01/2008-01/01/2011',
      description: 'Java and .NET Web developer, working with technologies as ASP.NET 2.0 and greater, WCF and Winforms, using the latest Microsoft Practices and Good Data Base practices, focusing in the use of SQL Server 2005, SQL Server 2008, and SQL Server Compact Edition.',
  }];

});

