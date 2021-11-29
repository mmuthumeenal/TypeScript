var UserAutoId = 1000;
var AutoCusId = 101;
var tempId = "";
var User = /** @class */ (function () {
    function User(uName, uAge, uNumber) {
        UserAutoId++;
        this.UserId = "U" + UserAutoId;
        this.Name = uName;
        this.Age = uAge;
        this.PhoneNumber = uNumber;
    }
    return User;
}());
var Course = /** @class */ (function () {
    function Course(cources, dueDays, uid) {
        this.Cources = cources;
        this.CusId = "CU" + AutoCusId;
        this.DueDays = dueDays;
        this.UID = uid;
    }
    return Course;
}());
var UserArrayList = new Array();
var UserCourseList = new Array();
function OldUser() {
    var homepage = document.getElementById('homepage');
    var exuser = document.getElementById('exuser');
    var registration = document.getElementById('registration');
    var optionDiv = document.getElementById('optionDiv');
    var aCourse = document.getElementById('aCourse');
    var EnCourse = document.getElementById('EnCourse');
    exuser.style.display = "block";
    homepage.style.display = "none";
    registration.style.display = "none";
    optionDiv.style.display = "none";
    aCourse.style.display = "none";
    EnCourse.style.display = "none";
}
function NewUser() {
    var homepage = document.getElementById('homepage');
    var exuser = document.getElementById('exuser');
    var registration = document.getElementById('registration');
    var optionDiv = document.getElementById('optionDiv');
    var aCourse = document.getElementById('aCourse');
    var EnCourse = document.getElementById('EnCourse');
    homepage.style.display = "none";
    registration.style.display = "block";
    exuser.style.display = "none";
    optionDiv.style.display = "none";
    aCourse.style.display = "none";
    EnCourse.style.display = "none";
}
function AddUser() {
    var homepage = document.getElementById('homepage');
    var exuser = document.getElementById('exuser');
    var registration = document.getElementById('registration');
    var optionDiv = document.getElementById('optionDiv');
    var aCourse = document.getElementById('aCourse');
    var EnCourse = document.getElementById('EnCourse');
    registration.style.display = "none";
    exuser.style.display = "none";
    optionDiv.style.display = "none";
    aCourse.style.display = "none";
    EnCourse.style.display = "none";
    var valname = document.getElementById('name').value;
    var valage = parseInt(document.getElementById('age').value);
    var valnumber = parseInt(document.getElementById('number').value);
    var NewDetail = new User(valname, valage, valnumber);
    UserArrayList.push(NewDetail);
    alert("Hi! ".concat(NewDetail.Name, " your Account Added Successfully. Your User Id : ").concat(NewDetail.UserId));
    homepage.style.display = "block";
}
function Login() {
    var homepage = document.getElementById('homepage');
    var exuser = document.getElementById('exuser');
    var registration = document.getElementById('registration');
    var optionDiv = document.getElementById('optionDiv');
    var aCourse = document.getElementById('aCourse');
    var EnCourse = document.getElementById('EnCourse');
    homepage.style.display = "none";
    registration.style.display = "none";
    exuser.style.display = "none";
    aCourse.style.display = "none";
    EnCourse.style.display = "none";
    var valID = document.getElementById('uid').value;
    for (var i = 0; i < Array.length; i++) {
        if (UserArrayList[i].UserId == valID) {
            tempId = UserArrayList[i].UserId;
            alert("Welcome ! ".concat(UserArrayList[i].Name, "}"));
            optionDiv.style.display = "block";
        }
    }
}
function AvailCourse() {
    var homepage = document.getElementById('homepage');
    var exuser = document.getElementById('exuser');
    var registration = document.getElementById('registration');
    var optionDiv = document.getElementById('optionDiv');
    var aCourse = document.getElementById('aCourse');
    var EnCourse = document.getElementById('EnCourse');
    homepage.style.display = "none";
    registration.style.display = "none";
    exuser.style.display = "none";
    optionDiv.style.display = "none";
    aCourse.style.display = "block";
    EnCourse.style.display = "none";
}
function EnrolledCourse() {
    var EnCourse = document.getElementById('EnCourse');
    EnCourse.style.display = "block";
    var homepage = document.getElementById('homepage');
    var exuser = document.getElementById('exuser');
    var registration = document.getElementById('registration');
    var optionDiv = document.getElementById('optionDiv');
    var aCourse = document.getElementById('aCourse');
    homepage.style.display = "none";
    registration.style.display = "none";
    exuser.style.display = "none";
    optionDiv.style.display = "none";
    aCourse.style.display = "none";
    var CourseCount = 0;
    var due = 0;
    var DetailCore = "";
    for (var i = 0; i < UserCourseList.length; i++) {
        if (tempId == UserCourseList[i].UID) {
            due = due + UserCourseList[i].DueDays;
            DetailCore += UserCourseList[i].Cources + ",";
            CourseCount++;
        }
    }
    var v = "Total Courses are : " + DetailCore + " and the count is" + CourseCount.toString() + " total due days are:" + due.toString();
    document.getElementById("EnCourseList").style.color = "red";
    document.getElementById("EnCourseList").innerHTML = v;
}
function Enroll() {
    var homepage = document.getElementById('homepage');
    var exuser = document.getElementById('exuser');
    var registration = document.getElementById('registration');
    var optionDiv = document.getElementById('optionDiv');
    var aCourse = document.getElementById('aCourse');
    var EnCourse = document.getElementById('EnCourse');
    homepage.style.display = "none";
    registration.style.display = "none";
    exuser.style.display = "none";
    aCourse.style.display = "none";
    EnCourse.style.display = "none";
    var valCourse = document.getElementById('Cdetails').value;
    var valDue = parseInt(document.getElementById('Cduration').value);
    var newdetail = new Course(valCourse, valDue, tempId);
    UserCourseList.push(newdetail);
    alert("Course Added SuccessFully ! your Course Id is:".concat(newdetail.CusId));
    optionDiv.style.display = "block";
}
function GoHome() {
    var homepage = document.getElementById('homepage');
    var exuser = document.getElementById('exuser');
    var registration = document.getElementById('registration');
    var optionDiv = document.getElementById('optionDiv');
    var aCourse = document.getElementById('aCourse');
    var EnCourse = document.getElementById('EnCourse');
    homepage.style.display = "block";
    registration.style.display = "none";
    exuser.style.display = "none";
    optionDiv.style.display = "none";
    aCourse.style.display = "none";
    EnCourse.style.display = "none";
}
