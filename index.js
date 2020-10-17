alert("You Just Need To Provide Some Details And The You Will Get You Cv Ready. Welcome");
//personal details recording
var personalDetailsTitle = "Personal Details";
document.getElementById('personal-details').innerHTML = "Personal Details";

const personalDetails = (fname, lname, phone, email, maritalStatus, address, town, religion) => {
    fname = prompt("Type Your First Name Please: ");
    lname = prompt("Type Your Last Name Please: ");
    phone = prompt("Type Your Phone Number Please: ");
    email = prompt("Type Your Email Please: ");
    maritalStatus = prompt("What Is Your Marital Status e.g single,married,divorced etc: ")
    address = prompt("Type Your Physical Address Please: ");
    town = prompt("From Which Town Do You Come From ? :")
    religion = prompt("What Is Your Religion Please (Christian, Muslim etc): ");
//validatin personal details to the DOM
    document.getElementById('name').innerHTML = `Name : ${fname} ${lname}`;
    document.getElementById('phone').innerHTML = `Phone : ${phone}`;
    document.getElementById('email').innerHTML = `Email : ${email}`;
    document.getElementById('address').innerHTML = `Address : ${address} , ${town}`;
    document.getElementById('maritalStatus').innerHTML = `Marital Status : ${maritalStatus}`;
    document.getElementById('religion').innerHTML = `Religion : ${religion}`;
}
personalDetails();

var secondarySchool
var primarySchool
var universityName
var collegeName
var highSchoolGrade
var highSchoolPoints
var primarySchoolMarks
var primarySchoolEndYear
var primaryStartYear
var highSchoolStartYear
var highSchoolEndYear
var graduationStatus
var joinYear
var graduationYear
var courseName
var courseLevel
var educationLevel

var educationTitle = "Education Background";
document.getElementById('education-details').innerHTML = educationTitle;

const education = () =>{
  educationLevel = prompt("What is the highest education institution you attended (e.g University, College, Secondary School), Type Just One Please: ");
if (educationLevel == "university" || educationLevel == "University" || educationLevel == "College" || educationLevel == "college") {
  graduationStatus = prompt("Have you graduated?, (Yes/No): ");
  if(graduationStatus == "Yes" || graduationStatus == "yes"){
     universityName = prompt("Which " + educationLevel + " Did You Attend ? : ");
     joinYear = prompt("Which Year Did You Join The " + educationLevel + " ? : ");
     graduationYear = prompt("Which Year Did You Graduate ? : ");
     courseLevel = prompt("What Was The Level Of Your Course ?  (e.g degree, certificate, diploma ,artisan), type only one: ");
     courseName = prompt ("What Was The Name Of Your Course ?  (e.g electrical engineering): ");

     var li = document.createElement("li");
     var node = document.createTextNode(`${universityName}`);
     li.appendChild(node);
     var div = document.getElementById("university");
     div.appendChild(li);

     var li = document.createElement("li");
     var node = document.createTextNode(`${joinYear} - ${graduationYear}`);
     li.appendChild(node);
     var div = document.getElementById("university");
     div.appendChild(li);

     var li = document.createElement("li");
     var node = document.createTextNode(`${courseLevel} in ${courseName}`);
     li.appendChild(node);
     var div = document.getElementById("university");
     div.appendChild(li);

  }
  else if (graduationStatus = "No" || graduationStatus ){
      universityName = prompt("Which " + educationLevel + " Are You Attending ? : ");
      joinYear = prompt("Which year did you join " + educationLevel + " ?: ");
      courseLevel = prompt("What is your course level (e.g Degree, diploma, certificate): ");
      courseName = prompt("Type the name of your course (e.g Computer Science): ");

      var li = document.createElement("li");
      var node = document.createTextNode(`${joinYear} - `);
      li.appendChild(node);
      var div = document.getElementById("university");
      div.appendChild(li);

      var li = document.createElement("li");
      var node = document.createTextNode(`${universityName}`);
      li.appendChild(node);
      var div = document.getElementById("university");
      div.appendChild(li);

      var li = document.createElement("li");
      var node = document.createTextNode(`${courseLevel} in ${courseName}`);
      li.appendChild(node);
      var div = document.getElementById("university");
      div.appendChild(li);

  }
  //Secondary School Eduacation
  secondarySchool = prompt("Which Secondary School did you attend");
  highSchoolStartYear = prompt ("When did you join Secondary School: ");
  highSchoolEndYear = prompt("Which year did you leave Secondary School");
  highSchoolGrade = prompt("What grade did you attain in Secondary School");
  highSchoolPoints = prompt("How many points did you attain in high school: ");

  var li = document.createElement("li");
  var node = document.createTextNode(`${highSchoolStartYear} - ${highSchoolEndYear}`);
  li.appendChild(node);
  var div = document.getElementById("secondary");
  div.appendChild(li);

  var li = document.createElement("li");
  var node = document.createTextNode(`${secondarySchool}`);
  li.appendChild(node);
  var div = document.getElementById("secondary");
  div.appendChild(li);

  var li = document.createElement("li");
  var node = document.createTextNode(`Grade : ${highSchoolGrade}`);
  li.appendChild(node);
  var div = document.getElementById("secondary");
  div.appendChild(li);

  var li = document.createElement("li");
  var node = document.createTextNode(`Points : ${highSchoolPoints}`);
  li.appendChild(node);
  var div = document.getElementById("secondary");
  div.appendChild(li);

  // Primary School Education
  primarySchool = prompt("Which primary school did you attend: ");
  primarySchoolStartYear = prompt("Which year did you join primary school: ");
  primarySchoolEndYear = prompt("Which year did you complete primary school education: ");
  primarySchoolMarks = prompt("How many marks did you score in primary school: ");

  var li = document.createElement("li");
  var node = document.createTextNode(`${primarySchoolStartYear} - ${primarySchoolEndYear}`);
  li.appendChild(node);
  var div = document.getElementById("primary");
  div.appendChild(li);

  var li = document.createElement("li");
  var node = document.createTextNode(`${primarySchool}`);
  li.appendChild(node);
  var div = document.getElementById("primary");
  div.appendChild(li);

  var li = document.createElement("li");
  var node = document.createTextNode(`Marks : ${primarySchoolMarks}`);
  li.appendChild(node);
  var div = document.getElementById("primary");
  div.appendChild(li);

}
else if (educationLevel == "high School" || educationLevel == "Secondary" || educationLevel == "Secondary School" || educationLevel == "secondary") {
   //Secondary School Eduacation
  secondarySchool = prompt("Which Secondary School did you attend");
  highSchoolStartYear = prompt ("When did you join Secondary School: ");
  highSchoolEndYear = prompt("Which year did you leave Secondary School");
  highSchoolGrade = prompt("What grade did you attain in Secondary School");
  highSchoolPoints = prompt("How many points did you attain in high school: ");

    var li = document.createElement("li");
    var node = document.createTextNode(`${highSchoolStartYear} - ${highSchoolEndYear}`);
    li.appendChild(node);
    var div = document.getElementById("secondary");
    div.appendChild(li);

    var li = document.createElement("li");
    var node = document.createTextNode(`${secondarySchool}`);
    li.appendChild(node);
    var div = document.getElementById("secondary");
    div.appendChild(li);

    var li = document.createElement("li");
    var node = document.createTextNode(`Grade : ${highSchoolGrade}`);
    li.appendChild(node);
    var div = document.getElementById("secondary");
    div.appendChild(li);

    var li = document.createElement("li");
    var node = document.createTextNode(`Points : ${highSchoolPoints}`);
    li.appendChild(node);
    var div = document.getElementById("secondary");
    div.appendChild(li);

    // Primary School Education
    primarySchool = prompt("Which primary school did you attend: ");
    primarySchoolStartYear = prompt("Which year did you join primary school: ");
    primarySchoolEndYear = prompt("Which year did you complete primary school education: ");
    primarySchoolMarks = prompt("How many marks did you score in primary school: ");

    var li = document.createElement("li");
    var node = document.createTextNode(`${primarySchoolStartYear} - ${primarySchoolEndYear}`);
    li.appendChild(node);
    var div = document.getElementById("primary");
    div.appendChild(li);

    var li = document.createElement("li");
    var node = document.createTextNode(`${primarySchool}`);
    li.appendChild(node);
    var div = document.getElementById("primary");
    div.appendChild(li);

    var li = document.createElement("li");
    var node = document.createTextNode(`Marks : ${primarySchoolMarks}`);
    li.appendChild(node);
    var div = document.getElementById("primary");
    div.appendChild(li);

} else {
  alert("The question asked you to state the highest education you have attended but you gave an answer that is not according to the instructions, so you have to answer the question again please");
educationLevel = prompt("What is the highest education institution you attended (e.g University, College, Secondary School), Type Just One Please: ");
 }
}
education ();

//Skills
var skill1
var skill2
var skill3
var skill4
var skill5

var professionalSkillsTitle = "Professional Skills";
document.getElementById('professional-skills').innerHTML = professionalSkillsTitle;

const Skills = () => {
var numberOfSkills = prompt("How many professional skills do you have ? : ");
if (numberOfSkills ==1 ) {
  skill1 = prompt("Enter The Name Of Your First Professional Skill: ");
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill1}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);

} else if (numberOfSkills == 2) {
  skill1 = prompt("Enter The Name Of Your First Professional Skill: ")
  skill2 = prompt("Enter The Name Of Your Second Professional Skill: ")
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill1}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill2}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);

}else if (numberOfSkills == 3) {
  skill1 = prompt("Enter The Name Of Your First Professional Skill: ")
  skill2 = prompt("Enter The Name Of Your Second Professional Skill: ")
  skill3 = prompt("Enter The Name Of Your Third Professional Skill: ")
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill1}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill2}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill3}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);

}else if (numberOfSkills == 4) {
  skill1 = prompt("Enter The Name Of Your First Professional Skill: ")
  skill2 = prompt("Enter The Name Of Your Second Professional Skill: ")
  skill3 = prompt("Enter The Name Of Your Third Professional Skill: ")
  skill4 = prompt("Enter The Name Of Your Fourth Professional Skill: ")
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill1}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill2}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill3}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill4}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);

}else if (numberOfSkills == 5) {
  skill1 = prompt("Enter The Name Of Your First Professional Skill: ")
  skill2 = prompt("Enter The Name Of Your Second Professional Skill: ")
  skill3 = prompt("Enter The Name Of Your Third Professional Skill: ")
  skill4 = prompt("Enter The Name Of Your Fourth Professional Skill: ")
  skill5 = prompt("Enter The Name Of Your Fifth Professional Skill: ")
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill1}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill2}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill3}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill4}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);
  //manipulating the dom
  var li = document.createElement("li");
  var node = document.createTextNode(`${skill5}`);
  li.appendChild(node);
  var div = document.getElementById("skills");
  div.appendChild(li);

}else {
  console.log("get some skills please");
}

}
Skills();

//Professional Certificates
var certificatesTitle = "Professional Certificates";
document.getElementById('certificatesTitle').innerHTML = certificatesTitle;
//Certificates
class Certificate {
  constructor(name, organization, year) {
    this.name = name
    this.organization = organization
    this.year = year
  }
}

//instances of Certificate class
let certificate1 = new Certificate();
let certificate2 = new Certificate();
let certificate3 = new Certificate();
let certificate4 = new Certificate();
let certificate5 = new Certificate();


const certificates = () => {
 let numberOfCerticates = prompt("How many professional certificates do you have ? : ");
 if (numberOfCerticates == 1) {
    certificate1.name = prompt("What Is The Name Of Your First Certificate ? : ");
    certificate1.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate1.name +" Certificate? : ");
    certificate1.year = prompt("In Which Year Where You Awarded by "+ certificate1.organization +" With " + certificate1.name + " Certificate ? : ");

   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate1.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate1.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate1.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);

 } else if (numberOfCerticates == 2) {
   certificate1.name = prompt("What Is The Name Of Your First Certificate ? : ");
   certificate1.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate1.name +" Certificate ? : ");
   certificate1.year = prompt("In Which Year Where You Awarded by "+ certificate1.organization +" With " + certificate1.name + " Certificate ? : ");

   certificate2.name = prompt("What Is The Name Of Your Second Certificate ? : ");
   certificate2.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate2.name +" Certificate ? : ");
   certificate2.year = prompt("In Which Year Where You Awarded by "+ certificate2.organization +" With " + certificate2.name + " Certificate ? : ");

   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate1.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate1.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate1.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate2.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate2.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate2.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);

 } else if (numberOfCerticates == 3) {
   certificate1.name = prompt("What Is The Name Of Your First Certificate ? : ");
   certificate1.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate1.name +" Certificate ? : ");
   certificate1.year = prompt("In Which Year Where You Awarded by "+ certificate1.organization +" With " + certificate1.name + " Certificate ? : ");

   certificate2.name = prompt("What Is The Name Of Your Second Certificate ? : ");
   certificate2.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate2.name +" Certificate ? : ");
   certificate2.year = prompt("In Which Year Where You Awarded by "+ certificate2.organization +" With " + certificate2.name + " Certificate ? : ");

   certificate3.name = prompt("What Is The Name Of Your Third Certificate ? : ");
   certificate3.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate3.name +" Certificate ? : ");
   certificate3.year = prompt("In Which Year Where You Awarded by "+ certificate3.organization +" With " + certificate3.name + " Certificate ? : ");

   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate1.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate1.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate1.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate2.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate2.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate2.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);
   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate3.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate3");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate3.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate3");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate3.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate3");
   div.appendChild(li);

 }else if (numberOfCerticates == 4) {
   certificate1.name = prompt("What Is The Name Of Your First Certificate ? : ");
   certificate1.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate1.name +" Certificate ? : ");
   certificate1.year = prompt("In Which Year Where You Awarded by "+ certificate1.organization +" With " + certificate1.name + " Certificate ? : ");

   certificate2.name = prompt("What Is The Name Of Your Second Certificate ? : ");
   certificate2.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate2.name +" Certificate ? : ");
   certificate2.year = prompt("In Which Year Where You Awarded by "+ certificate2.organization +" With " + certificate2.name + " Certificate ? : ");

   certificate3.name = prompt("What Is The Name Of Your Third Certificate ? : ");
   certificate3.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate3.name +" Certificate ? : ");
   certificate3.year = prompt("In Which Year Where You Awarded by "+ certificate3.organization +" With " + certificate3.name + " Certificate ? : ");

   certificate4.name = prompt("What Is The Name Of Your Fourth Certificate ? : ");
   certificate4.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate4.name +" Certificate ? : ");
   certificate4.year = prompt("In Which Year Where You Awarded by "+ certificate4.organization +" With " + certificate4.name + " Certificate ? : ");

   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate1.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate1.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate1.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate2.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate2.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate2.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);
   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate3.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate3");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate3.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate3");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate3.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate3");
   div.appendChild(li);
   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate4.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate4");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate4.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate4");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate4.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate4");
   div.appendChild(li);

 }
 else if (numberOfCerticates == 5) {
   certificate1.name = prompt("What Is The Name Of Your First Certificate ? : ");
   certificate1.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate1.name +" Certificate ? : ");
   certificate1.year = prompt("In Which Year Where You Awarded by "+ certificate1.organization +" With " + certificate1.name + " Certificate ? : ");

   certificate2.name = prompt("What Is The Name Of Your Second Certificate ? : ");
   certificate2.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate2.name +" Certificate ? : ");
   certificate2.year = prompt("In Which Year Where You Awarded by "+ certificate2.organization +" With " + certificate2.name + " Certificate ? : ");

   certificate3.name = prompt("What Is The Name Of Your Third Certificate ? : ");
   certificate3.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate3.name +" Certificate ? : ");
   certificate3.year = prompt("In Which Year Where You Awarded by "+ certificate3.organization +" With " + certificate3.name + " Certificate ? : ");

   certificate4.name = prompt("What Is The Name Of Your Fourth Certificate ? : ");
   certificate4.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate4.name +" Certificate ? : ");
   certificate4.year = prompt("In Which Year Where You Awarded by "+ certificate4.organization +" With " + certificate4.name + " Certificate ? : ");

   certificate5.name = prompt("What Is The Name Of Your Fifth Certificate ? : ");
   certificate5.organization = prompt("What Is The Name Of The Organization Which Granted You With "+ certificate5.name +" Certificate ? : ");
   certificate5.year = prompt("In Which Year Where You Awarded by "+ certificate5.organization +" With " + certificate5.name + " Certificate ? : ");

   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate1.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate1.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate1.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate1");
   div.appendChild(li);
   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate2.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate2.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate2.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate2");
   div.appendChild(li);
   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate3.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate3");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate3.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate3");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate3.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate3");
   div.appendChild(li);
   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate4.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate4");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate4.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate4");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate4.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate4");
   div.appendChild(li);
   //manipulating the dom
   var li = document.createElement("li");
   var node = document.createTextNode(`${certificate5.name}`);
   li.appendChild(node);
   var div = document.getElementById("certificate5");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded in the year ${certificate5.year}`);
   li.appendChild(node);
   var div = document.getElementById("certificate5");
   div.appendChild(li);
   var li = document.createElement("li");
   var node = document.createTextNode(`Awarded by ${certificate5.organization}`);
   li.appendChild(node);
   var div = document.getElementById("certificate5");
   div.appendChild(li);

 } else {
   console.log("Try to get some professional certificates please");
 }
}
certificates();

//Work Experience
var ExperienceTitle = "Work Experience";
document.getElementById("experienceTitle").innerHTML = ExperienceTitle;

var employer1
var employer2
var employer3
var employer4
var employer5
var jobTitle1
var jobTitle2
var jobTitle3
var jobTitle4
var jobTitle5
var workStart1
var workStart2
var workStart3
var workStart4
var workStart5
var workQuit1
var workQuit2
var workQuit3
var workQuit4
var workQuit5
function work() {
  let placesWorked = prompt("How Many Places Have You Worked ? : ")
  if (placesWorked == 1) {
    console.log("You have worked in one place");
    employer1 = prompt("Who is your current employer?: ");
    jobTitle1 = prompt ("What is your job position at "+employer1+ " ?: ");
    workStart1 = prompt("When did you start working for " +employer1+" ?: ");
    console.log(jobTitle1);
    console.log(workStart1);
    console.log(employer1);
  //manipulating the dom
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart1} - `);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer1}`);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle1}`);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);

  }
  else if (placesWorked == 2) {

      console.log("You have worked in two places");
      //first employer
      employer1 = prompt("Who is your current employer?: ");
      jobTitle1 = prompt ("What is your job position at "+employer1+ " ?: ");
      workStart1 = prompt("When did you start working for " +employer1 +" ?: ");
      //second employer
      employer2 = prompt("Before You Started Working For " +employer1 + " Where Were You Working ?: ");
      jobTitle2 = prompt ("What was your job position at "+employer2+ " ?: ");
      workStart2 = prompt("When did you start working for " +employer2 +" ?: ");
      workQuit2 = prompt("When did you stop working for " +employer2 + " ?: ")
      //manipulating the dom
      //first employer
      var li = document.createElement("li");
      var node = document.createTextNode(`${workStart1} - `);
      li.appendChild(node);
      var div = document.getElementById("work1");
      div.appendChild(li);
      var li = document.createElement("li");
      var node = document.createTextNode(`${employer1}`);
      li.appendChild(node);
      var div = document.getElementById("work1");
      div.appendChild(li);
      var li = document.createElement("li");
      var node = document.createTextNode(`${jobTitle1}`);
      li.appendChild(node);
      var div = document.getElementById("work1");
      div.appendChild(li);
    //second employer
      var li = document.createElement("li");
      var node = document.createTextNode(`${workStart2} - ${workQuit2}`);
      li.appendChild(node);
      var div = document.getElementById("work2");
      div.appendChild(li);
      var li = document.createElement("li");
      var node = document.createTextNode(`${employer2}`);
      li.appendChild(node);
      var div = document.getElementById("work2");
      div.appendChild(li);
      var li = document.createElement("li");
      var node = document.createTextNode(`${jobTitle2}`);
      li.appendChild(node);
      var div = document.getElementById("work2");
      div.appendChild(li);

  }
  else if (placesWorked == 3) {
    //first employer
    employer1 = prompt("Who is your current employer?: ");
    jobTitle1 = prompt ("What is your job position at "+employer1+ " ?: ");
    workStart1 = prompt("When did you start working for " +employer1 +" ?: ");
    //second employer
    employer2 = prompt("Before You Started Working For " +employer1 + " Where Were You Working ?: ");
    jobTitle2 = prompt ("What was your job position at "+employer2+ " ?: ");
    workStart2 = prompt("When did you start working for " +employer2 +" ?: ");
    workQuit2 = prompt("When did you stop working for " +employer2 + " ?: ")
    //third employer
    employer3 = prompt("Before You Started Working For " +employer2 + " Where Were You Working ?: ");
    jobTitle3 = prompt ("What was your job position at "+employer3+ " ?: ");
    workStart3 = prompt("When did you start working for " +employer3 +" ?: ");
    workQuit3 = prompt("When did you stop working for " +employer3 + " ?: ")

    //manipulating the dom
    //first employer
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart1} - `);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer1}`);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle1}`);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);
    //second employer
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart2} - ${workQuit2}`);
    li.appendChild(node);
    var div = document.getElementById("work2");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer2}`);
    li.appendChild(node);
    var div = document.getElementById("work2");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle2}`);
    li.appendChild(node);
    var div = document.getElementById("work2");
    div.appendChild(li);
    //third employer
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart3} - ${workQuit3}`);
    li.appendChild(node);
    var div = document.getElementById("work3");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer3}`);
    li.appendChild(node);
    var div = document.getElementById("work3");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle3}`);
    li.appendChild(node);
    var div = document.getElementById("work3");
    div.appendChild(li);


  }
  else if (placesWorked == 4) {
    //first employer
    employer1 = prompt("Who is your current employer?: ");
    jobTitle1 = prompt ("What is your job position at "+employer1+ " ?: ");
    workStart1 = prompt("When did you start working for " +employer1 +" ?: ");
    //second employer
    employer2 = prompt("Before You Started Working For " +employer1 + " Where Were You Working ?: ");
    jobTitle2 = prompt ("What was your job position at "+employer2+ " ?: ");
    workStart2 = prompt("When did you start working for " +employer2 +" ?: ");
    workQuit2 = prompt("When did you stop working for " +employer2 + " ?: ")
    //third employer
    employer3 = prompt("Before You Started Working For " +employer2 + " Where Were You Working ?: ");
    jobTitle3 = prompt ("What was your job position at "+employer3+ " ?: ");
    workStart3 = prompt("When did you start working for " +employer3 +" ?: ");
    workQuit3 = prompt("When did you stop working for " +employer3 + " ?: ")
    //fourth employer
    employer4 = prompt("Before You Started Working For " +employer3 + " Where Were You Working ?: ");
    jobTitle4 = prompt ("What was your job position at "+employer4+ " ?: ");
    workStart4 = prompt("When did you start working for " +employer4 +" ?: ");
    workQuit4 = prompt("When did you stop working for " +employer4 + " ?: ")
    //manipulating the dom
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart1} - `);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer1}`);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle1}`);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);
    //second employer
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart2} - ${workQuit2}`);
    li.appendChild(node);
    var div = document.getElementById("work2");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer2}`);
    li.appendChild(node);
    var div = document.getElementById("work2");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle2}`);
    li.appendChild(node);
    var div = document.getElementById("work2");
    div.appendChild(li);
    //third employer
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart3} - ${workQuit3}`);
    li.appendChild(node);
    var div = document.getElementById("work3");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer3}`);
    li.appendChild(node);
    var div = document.getElementById("work3");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle3}`);
    li.appendChild(node);
    var div = document.getElementById("work3");
    div.appendChild(li);
    //fourth employer
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart4} - ${workQuit4}`);
    li.appendChild(node);
    var div = document.getElementById("work4");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer4}`);
    li.appendChild(node);
    var div = document.getElementById("work4");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle4}`);
    li.appendChild(node);
    var div = document.getElementById("work4");
    div.appendChild(li);

  }
  else if (placesWorked == 5) {
    //first employer
    employer1 = prompt("Who is your current employer?: ");
    jobTitle1 = prompt ("What is your job position at "+employer1+ " ?: ");
    workStart1 = prompt("When did you start working for " +employer1 +" ?: ");
    //second employer
    employer2 = prompt("Before You Started Working For " +employer1 + " Where Were You Working ?: ");
    jobTitle2 = prompt ("What was your job position at "+employer2+ " ?: ");
    workStart2 = prompt("When did you start working for " +employer2 +" ?: ");
    workQuit2 = prompt("When did you stop working for " +employer2 + " ?: ")
    //third employer
    employer3 = prompt("Before You Started Working For " +employer2 + " Where Were You Working ?: ");
    jobTitle3 = prompt ("What was your job position at "+employer3+ " ?: ");
    workStart3 = prompt("When did you start working for " +employer3 +" ?: ");
    workQuit3 = prompt("When did you stop working for " +employer3 + " ?: ")
    //fourth employer
    employer4 = prompt("Before You Started Working For " +employer3 + " Where Were You Working ?: ");
    jobTitle4 = prompt ("What was your job position at "+employer4+ " ?: ");
    workStart4 = prompt("When did you start working for " +employer4 +" ?: ");
    workQuit4 = prompt("When did you stop working for " +employer4 + " ?: ")
    //fifth employer
    employer5 = prompt("Before You Started Working For " +employer4 + " Where Were You Working ?: ");
    jobTitle5 = prompt ("What was your job position at "+employer5+ " ?: ");
    workStart5 = prompt("When did you start working for " +employer5 +" ?: ");
    workQuit5 = prompt("When did you stop working for " +employer5 + " ?: ")
    //manipulating the dom
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart1} - `);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer1}`);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle1}`);
    li.appendChild(node);
    var div = document.getElementById("work1");
    div.appendChild(li);
    //second employer
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart2} - ${workQuit2}`);
    li.appendChild(node);
    var div = document.getElementById("work2");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer2}`);
    li.appendChild(node);
    var div = document.getElementById("work2");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle2}`);
    li.appendChild(node);
    var div = document.getElementById("work2");
    div.appendChild(li);
    //third employer
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart3} - ${workQuit3}`);
    li.appendChild(node);
    var div = document.getElementById("work3");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer3}`);
    li.appendChild(node);
    var div = document.getElementById("work3");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle3}`);
    li.appendChild(node);
    var div = document.getElementById("work3");
    div.appendChild(li);
    //fourth employer
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart4} - ${workQuit4}`);
    li.appendChild(node);
    var div = document.getElementById("work4");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer4}`);
    li.appendChild(node);
    var div = document.getElementById("work4");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle4}`);
    li.appendChild(node);
    var div = document.getElementById("work4");
    div.appendChild(li);
    //fifth employer
    var li = document.createElement("li");
    var node = document.createTextNode(`${workStart5} - ${workQuit5}`);
    li.appendChild(node);
    var div = document.getElementById("work5");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${employer5}`);
    li.appendChild(node);
    var div = document.getElementById("work5");
    div.appendChild(li);
    var li = document.createElement("li");
    var node = document.createTextNode(`${jobTitle5}`);
    li.appendChild(node);
    var div = document.getElementById("work5");
    div.appendChild(li);
  }
  else {
    console.log("looks like you have never worked anywhere");
  }
}
work();

//hobbies
const hobbies = () => {
  let hobby1 = prompt("What is your First hobby ? : ");
  let hobby2 = prompt("What is your Second hobby ? : ");
  let hobby3 = prompt("What is your Third hobby ? : ");
  let hobby4 = prompt("What is your Fourth hobby ? : ");

let hobbiesTitle = "Hobbies";
document.getElementById('hobbiesTitle').innerHTML = hobbiesTitle;
document.getElementById('hobby1').innerHTML = hobby1;
document.getElementById('hobby2').innerHTML = hobby2;
document.getElementById('hobby3').innerHTML = hobby3;
document.getElementById('hobby4').innerHTML = hobby4;
}
hobbies();
//Referees
class Referee {
  constructor(name, email, phone, designation, workplace, address, city) {
    this.name = name
    this.email = email
    this.phone = phone
    this.designation = designation
    this.workplace = workplace
    this.address = address
    this.city = city
  }
}
//First referee
let ref1 = new Referee();
ref1.name = prompt("What Is The Name Of Your First Referee: ")
ref1.email = prompt("What Is The Email Of Your First Referee: ")
ref1.phone = prompt("What Is The Phone Number Of Your First Referee: ")
ref1.designation = prompt("What Is The Profession Of Your First Referee ?: ")
ref1.workplace = prompt("Where Does Your First Referee Work ?: ")
ref1.address = prompt("What Is The Address Of Your First Referee? : ")
ref1.city = prompt("In Which City/Town Does Your First Referee Live ?: ")
console.log(ref1);

//second referee
let ref2 = new Referee();
ref2.name = prompt("What Is The Name Of Your Second Referee: ")
ref2.email = prompt("What Is The Email Of Your Second Referee: ")
ref2.phone = prompt("What Is The Phone Number Of Your Second Referee: ")
ref2.designation = prompt("What Is The Profession Of Your Second Referee ?: ")
ref2.workplace = prompt("Where Does Your Second Referee Work ?: ")
ref2.address = prompt("What Is The Address Of Your Second Referee? : ")
ref2.city = prompt("In Which City/Town Does Your Second Referee Live ?: ")
console.log(ref2);

//third referee
let ref3 = new Referee();
ref3.name = prompt("What Is The Name Of Your Third Referee: ")
ref3.email = prompt("What Is The Email Of Your Third Referee: ")
ref3.phone = prompt("What Is The Phone Number Of Your Third Referee: ")
ref3.designation = prompt("What Is The Profession Of Your Third Referee ?: ")
ref3.workplace = prompt("Where Does Your Third Referee Work ?: ")
ref3.address = prompt("What Is The Address Of Your Third Referee? : ")
ref3.city = prompt("In Which City/Town Does Your Third Referee Live ?: ")
console.log(ref3);

//html update
document.getElementById("refTitle").innerHTML = `Referees`;

document.getElementById("ref1Name").innerHTML = `Name : ${ref1.name}`;
document.getElementById("ref1Email").innerHTML = `Email : ${ref1.email}`;
document.getElementById("ref1Phone").innerHTML = `Phone : ${ref1.phone}`;
document.getElementById("ref1Designation").innerHTML = `Designation : ${ref1.designation}`;
document.getElementById("ref1Workplace").innerHTML = `Workplace : ${ref1.workplace}`;
document.getElementById("ref1Adress").innerHTML = `Address : ${ref1.address}`;
document.getElementById("ref1City").innerHTML = `City : ${ref1.city}`;

document.getElementById("ref2Name").innerHTML = `Name : ${ref2.name}`;
document.getElementById("ref2Email").innerHTML = `Email : ${ref2.email}`;
document.getElementById("ref2Phone").innerHTML = `Phone : ${ref2.phone}`;
document.getElementById("ref2Designation").innerHTML = `Designation : ${ref2.designation}`;
document.getElementById("ref2Workplace").innerHTML = `Workplace : ${ref2.workplace}`;
document.getElementById("ref2Adress").innerHTML = `Address : ${ref2.address}`;
document.getElementById("ref2City").innerHTML = `City : ${ref2.city}`;

document.getElementById("ref3Name").innerHTML = `Name : ${ref3.name}`;
document.getElementById("ref3Email").innerHTML = `Email : ${ref3.email}`;
document.getElementById("ref3Phone").innerHTML = `Phone : ${ref3.phone}`;
document.getElementById("ref3Designation").innerHTML = `Designation : ${ref3.designation}`;
document.getElementById("ref3Workplace").innerHTML = `Workplace : ${ref3.workplace}`;
document.getElementById("ref3Adress").innerHTML = `Address : ${ref3.address}`;
document.getElementById("ref3City").innerHTML = `City : ${ref3.city}`;

//print
print();
