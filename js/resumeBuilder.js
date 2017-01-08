/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = ["PHP", "Leadership"];

var bio = {
    "name": "ZhenhangTung",
    "role": "PHP Engineer, Team Leader",
    "contacts": {
        "mobile": "+8615000000000",
        "email": "zhenhangtung@gmail.com",
        "github": "zhenhangtung",
        "location": "Shanghai",
        "twitter": "@ZhenhangTung"
    },
    "welcomeMessage": "Welcme!",
    "skills": skills,
    "bioPic": "images/me.jpg"
};

var work = {
    "jobs": [{
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
    "projects": [{
        "title": "Wallstretcn",
        "dates": "2015 - now",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, dolor. Cumque, enim, hic! Illo libero expedita temporibus dolores consectetur modi dicta nam enim earum repellendus, ipsam neque autem, assumenda dolorem!",
        "images": [
            "images/Pikachu.gif"
        ]
    }]
};

var education = {
    "schools": [{
        "name": "Fudan University",
        "location": "Shanghai",
        "degree": "Bachelor",
        "dates": "2016 - now",
        "url": "http://www.fudan.edu.cn/2016/index.html",
        "majors": [
            "CS"
        ],
    }],
    "onlineCourses": [{
        "title": "Frontend",
        "school": "Udacity",
        "dates": "2016 - now",
        "url": "https://classroom.udacity.com/courses/ud804",
    }]
};

function displayBio() {
    var htmlHearder = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role);
    $('#header').prepend(htmlHearder);

    var htmlContacts = HTMLmobile.replace("%data%", bio.contacts.mobile) + HTMLemail.replace("%data%", bio.contacts.email) + HTMLtwitter.replace("%data%", bio.contacts.twitter) + HTMLgithub.replace("%data%", bio.contacts.github) + HTMLlocation.replace("%data%", bio.contacts.location);
    $('#topContacts').append(htmlContacts);

    var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $('#header').append(bioPic);
    $('#header').append(welcomeMsg);

    if (bio.skills.length > 0 === true) {
        $('#header').append(HTMLskillsStart);
        var skillsColumn = "";
        bio.skills.forEach(function(element, index, array) {
            skillsColumn += HTMLskills.replace("%data%", element);
        });
        $('#skills').append(skillsColumn);

    }
}
bio.display = displayBio();
$('#header:last').append(bio.display);

function displayWork() {
    var jobs = work.jobs;
    jobs.forEach(function(job, index, jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);


        var formattedDescriptions = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescriptions);
    });
}

work.display = displayWork();
$('#workExperience:last').append(work.display);

function displayProjects() {
    projects.projects.forEach(function(project, index, projects) {
        $('#projects').append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        var images = project.images;
        $('.project-entry:last').append(formattedProjectTitle);
        $('.project-entry:last').append(formattedProjectDates);
        $('.project-entry:last').append(formattedProjectDescription);
        for (var j = 0; j < images.length; j++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", images[j]));
        }

    });
}
projects.display = displayProjects();
$('#projects:last').append(projects.display);

function displayEducation() {
    var schools = education.schools;
    schools.forEach(function(school, index, schools) {
        $('#education').append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedSchoolLocation);
        school.majors.forEach(function(major, index, majors) {
            $('.education-entry:last').append(HTMLschoolMajor.replace("%data%", major));
        });
    });
    var onlineCourses = education.onlineCourses;
    $('#education').append(HTMLonlineClasses);
    for (var i = 0; i < onlineCourses.length; i++) {
        $('#education').append(HTMLonlineStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourses[i].dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourses[i].url);
        $('.onlineCourses-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
        $('.onlineCourses-entry:last').append(formattedOnlineDates);
        $('.onlineCourses-entry:last').append(formattedOnlineUrl);
    }
}
education.display = displayEducation();
$('#education:last').append(education.display);

$('#mapDiv').append(googleMap);