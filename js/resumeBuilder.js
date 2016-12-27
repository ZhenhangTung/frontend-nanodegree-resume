/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills = ["PHP", "Leadership"];

var bio = {
	"name" : "ZhenhangTung",
	"role" : "PHP Engineer, Team Leader",
	"contacts" : {
		"mobile": "+8615000000000",
		"email": "zhenhangtung@gmail.com",
		"github": "zhenhangtung",
		"location": "Shanghai",
		"twitter": "@ZhenhangTung"
	},
	"welcomeMessage": "Welcme!",
	"skills" : skills,
	"bioPic": "images/me.jpg"
};

var work = {
	"jobs": [
		{
			"employer": "Wallstretcn",
			"title": "PHP Engineer, Team Leader",
			"location": "Shanghai",
			"dates": "2016 - now",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ab expedita voluptate aperiam inventore reiciendis animi, nisi fuga id, labore, autem! Fugiat possimus nobis nemo adipisci dolore odit cupiditate recusandae."
		},
		{
			"employer": "Wallstretcn",
			"title": "PHP Engineer",
			"location": "Shanghai",
			"dates": "2015 - 2016",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, harum perspiciatis nostrum modi officiis incidunt atque corrupti odio. Voluptas explicabo quisquam aliquam incidunt eos excepturi enim obcaecati reprehenderit quidem expedita."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Wallstretcn",
			"dates": "2015 - now",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, dolor. Cumque, enim, hic! Illo libero expedita temporibus dolores consectetur modi dicta nam enim earum repellendus, ipsam neque autem, assumenda dolorem!",
			"images": [
				"images/Pikachu.gif"
			]
		}
	]
};


var education = {
	"schools": [
		{
			"name": "Udacity",
			"location": "US",
			"degree": "Nano",
			"dates": 2016,
			"url": "https://classroom.udacity.com/courses/ud804",
			"majors": [
				"Frontend"
			],
		}
	],
	"onlineCourses": [
		{
			"title": "Frontend",
			"school": "Udacity",
			"dates": 2016,
			"url": "https://classroom.udacity.com/courses/ud804",
		}
	]
};


var htmlHearder = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role);
$('#header').prepend(htmlHearder);

var htmlContacts = HTMLmobile.replace("%data%", bio.contacts.mobile)
				+ HTMLemail.replace("%data%", bio.contacts.email)
				+ HTMLtwitter.replace("%data%", bio.contacts.twitter)
				+ HTMLgithub.replace("%data%", bio.contacts.github)
				+ HTMLlocation.replace("%data%", bio.contacts.location);
$('#topContacts').append(htmlContacts);

var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$('#header').append(bioPic);
$('#header').append(welcomeMsg);





if (bio.skills.length > 0 === true) {
	$('#header').append(HTMLskillsStart);
	var skillsColumn = "";
	bio.skills.forEach(convertArrayToColumn);
	$('#skills').append(skillsColumn);
	
}

function convertArrayToColumn (element, index, array) {
	skillsColumn += HTMLskills.replace("%data%", element);

}


function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);


		var formattedDescriptions = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescriptions);


	}
}

displayWork();


function displayProjects() {
	var htmlProjects = "";
	projects.projects.forEach(function (project, index, projects) {
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
		var formattedProjectDates= HTMLprojectDates.replace("%data%", project.dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
		var images = project.images;
		// console.log(images);
		$('.project-entry:last').append(formattedProjectTitle);
		$('.project-entry:last').append(formattedProjectDates);
		$('.project-entry:last').append(formattedProjectDescription);9
		for (var j = 0; j < images.length; j++) {
			console.log(HTMLprojectImage.replace("%data%", images[j]));
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", images[j]));
		}
		
	});
}
displayProjects();



function inName() {
	var name = bio["name"];
	var nameArray = name.split(" ");
	nameArray[0] = formatFirstName(nameArray[0]);
	nameArray[1] = nameArray[1].toUpperCase();
	console.log(nameArray.join(" "));
	return nameArray.join(" ");
}

function formatFirstName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


function displayEducation() {
	var schools = education.schools;
	schools.forEach(function (school, index, schools) {
		$('#education').append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", schools.name);
		var formattedSschoolDegree = HTMLschoolDegree.replace("%data%", schools.degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", schools.dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schools.location);
		schools.majors.forEach(function (major, index, majors) {
			HTMLschoolMajor.replace("%data%", major);
		});
	});
	var onlineCourses = education.onlineCourses;
	$('#education').append(HTMLschoolStart);
	for (var i = 0; i < onlineCourses.length; i++) {
		onlineCourses[i];
	};
}



// function display() {
// 	var projects = projects["projects"];
// 	for (var i = 0; i < projects.length; i++) {
// 		$("#projects").append(HTMLprojectStart);
// 		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.title));
// 		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.dates));
// 		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.description));
// 		var images = projects["images"];
// 		for (var j = 0; j < images.length; j++) {
// 			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", images[j]));
// 		}
// 	}
// }

// projects.display = function() {
// 	var projects = projects["projects"];
// 	for (var i = 0; i < projects.length; i++) {
// 		$("#projects").append(HTMLprojectStart);
// 		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.title));
// 		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.dates));
// 		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.description));
// 		var images = projects["images"];
// 		for (var j = 0; j < images.length; j++) {
// 			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", images[j]));
// 		}
// 	}
// };

// $("#projects:last").append(projects.display);

