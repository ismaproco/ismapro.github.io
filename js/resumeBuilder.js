/* bio json  */

var bio = {
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
    biopic: '/images/avatar.jpg',
    display: function() {
    	/* header title */
		$("#header").prepend( HTMLheaderName.replace("%data%", bio.name) + 
								HTMLheaderRole.replace("%data%", bio.role) );

		/* header contacts */

		Object.keys(bio.contacts).map(function(key){
			$('#topContacts').append( HTMLcontactGeneric.replace( '%contact%',key )
							.replace( '%data%' , bio.contacts[key] ) );
		});

		/* header image and welcome message */
		$('#header').prepend( HTMLbioPic.replace( '%data%', bio.biopic ) );


		/* header Skill section */
		$('#basicInformation').append( HTMLskillsStart );	

		bio.skills.map( function( skill ){
			$('#skills').append( HTMLskills.replace( '%data%', skill ) );
		});

		$('.header-name').append( 
					HTMLWelcomeMsg.replace( '%data%', bio.welcomeMessage ) );
    }
}

/* education json */
var education = {
	schools: [{
		name: 'Universidad Piloto de Colombia',
		location: 'Bogota, Colombia',
		degree: 'Bachelor´s Systems Engineer',
		majors: 'Software Development',
		dates: 2011,
		url: 'http://www.unipiloto.edu.co/'
	}],
	onlineCourses: [{
        title: 'Frontend Web Development',
        school: 'Team Three House',
        date: 2014,
        url: 'https://teamtreehouse.com/'
	}],
	display: function(){

		/* Education Schools */

		education.schools.map( function(school) {
			var entry = $( HTMLschoolStart );
			entry.append( HTMLschoolName.replace( '%data%' , school.name ) +
							HTMLschoolDegree.replace( '%data%' , school.degree ) );
			entry.append( HTMLschoolDates.replace( '%data%' , school.dates ) );
			entry.append( HTMLschoolLocation.replace( '%data%' , school.location ) );
			entry.append( HTMLschoolMajor.replace( '%data%' , school.majors ) );

			$('#education').append( entry );
		});

		/* Education online courses */

		education.onlineCourses.map( function(course) {
			var entry = $( HTMLschoolStart );
			entry.append( HTMLonlineClasses );
			entry.append( HTMLonlineTitle.replace( '%data%' , course.title ) +
							HTMLonlineSchool.replace( '%data%' , course.school ) );
			entry.append( HTMLonlineDates.replace( '%data%' , course.date ) );
			entry.append( HTMLonlineURL.replace( '%data%' , course.url ) );

			$('#education').append( entry );
		});

	}
}

/* work json*/

var work = {
	 jobs: [{
		employer: 'Intertec International',
		title: 'Web Developer',
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
	 }],
	 display: function () {
	 	work.jobs.map( function( job ) {

			var work = $( HTMLworkStart );
			work.append( HTMLworkEmployer.replace( '%data%', job.employer )  +
						 HTMLworkTitle.replace( '%data%', job.title ) 	);
			work.append( HTMLworkDates.replace( '%data%', job.dates ) );
			work.append( HTMLworkLocation.replace( '%data%', job.location ) );
			work.append( HTMLworkDescription.replace( '%data%', job.description ) );
			$('#workExperience').append(work);
		});
	 }
}

/* projects json */

var projects = {
	projects: [{
		title: 'Ismapro Blog',
        dates: '11/01/2011',
        description: 'Build the intranet for Vetra consulting, using SharePoint 2010',
        images: ['https://ismapro.files.wordpress.com/2015/01/ismapro-blog.png']
    },
    {
    	title: 'deberia ser festivo android app',
    	dates: '02/02/2013',
    	description: 'Images application of the Tumblr blog "deberia ser festivo" deberiaserfestivo.com',
    	images: ['https://lh4.ggpht.com/VK94Bpr0v6cNkxsESZamiLtouKOwjbAyNtWzHWibtgQ4bDPQ_OfzhbPTKC1-1XP04hk=h900-rw']
    }],
    display: function(){

    	projects.projects.map( function( project ) {
			var entry = $( HTMLprojectStart );
			entry.append( HTMLprojectTitle.replace( '%data%' , project.title ) );
			entry.append( HTMLprojectDates.replace( '%data%' , project.dates ) );
			entry.append( HTMLprojectDescription.replace( '%data%' , project.description ) );

			project.images.map( function( img ) {
				entry.append( HTMLprojectImage.replace( '%data%' , img ) );		
			});

			$('#projects').append( entry );
		});

    }
}


/*
	HEADER SECTIONS
*/

bio.display();

/*
	WORK EXPERIENCE SECTION
*/

work.display();

/*
	PROJECTS SECTION
*/

projects.display();

/*
	EDUCATION SECTION
*/

education.display();

/*
	GOOGLE MAP
*/

/* append the google map to the page */

$('#mapDiv').append( googleMap );
