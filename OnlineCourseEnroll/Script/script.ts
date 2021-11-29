let UserAutoId = 1000;
let AutoCusId=101;
let tempId="";
class User{
    Name:string;
    Age:number;
    PhoneNumber:number;
    UserId:string;
    constructor(uName:string,uAge:number,uNumber:number){
        UserAutoId++;
        this.UserId="U"+UserAutoId;
        this.Name=uName;
        this.Age=uAge;
        this.PhoneNumber=uNumber;
        

    }
}
class Course{
    CusId:string;
    Cources:string;
    DueDays:number;
    UID:string;
    constructor(cources:string,dueDays:number,uid:string){

        this.Cources=cources;
        this.CusId="CU"+AutoCusId;
        this.DueDays=dueDays;
        this.UID=uid;

    }
}
let UserArrayList: Array<User> = new Array<User>();
let UserCourseList: Array<Course> = new Array<Course>();
function OldUser(){
    let homepage=document.getElementById('homepage') as HTMLDivElement;
    let exuser  = document.getElementById('exuser') as HTMLDivElement;
    let registration = document.getElementById('registration') as HTMLDivElement;
    let optionDiv  = document.getElementById('optionDiv') as HTMLDivElement;
    let aCourse  = document.getElementById('aCourse') as HTMLDivElement;
    let EnCourse  = document.getElementById('EnCourse') as HTMLDivElement;
    
    exuser.style.display="block";
    homepage.style.display="none";
    registration.style.display="none";
    
    optionDiv.style.display="none";
    aCourse.style.display="none";
    EnCourse.style.display="none";
    

}

function NewUser(){
    
    
    let homepage=document.getElementById('homepage') as HTMLDivElement;
        let exuser  = document.getElementById('exuser') as HTMLDivElement;
       let registration = document.getElementById('registration') as HTMLDivElement;
      let optionDiv  = document.getElementById('optionDiv') as HTMLDivElement;
      let aCourse  = document.getElementById('aCourse') as HTMLDivElement;
    let EnCourse  = document.getElementById('EnCourse') as HTMLDivElement;
    

    
    
    
    homepage.style.display="none";
    registration.style.display="block";
   
   
    exuser.style.display="none";
    optionDiv.style.display="none";
    aCourse.style.display="none";
    EnCourse.style.display="none";

}
function AddUser(){
    let homepage=document.getElementById('homepage') as HTMLDivElement;
    let exuser  = document.getElementById('exuser') as HTMLDivElement;
    let registration = document.getElementById('registration') as HTMLDivElement;
    let optionDiv  = document.getElementById('optionDiv') as HTMLDivElement;
    let aCourse  = document.getElementById('aCourse') as HTMLDivElement;
    let EnCourse  = document.getElementById('EnCourse') as HTMLDivElement;
    

            
            registration.style.display="none";
            exuser.style.display="none";
            optionDiv.style.display="none";
            aCourse.style.display="none";
            EnCourse.style.display="none";
    
    
            var valname=(document.getElementById('name') as HTMLInputElement).value;
    var valage=parseInt((document.getElementById('age') as HTMLInputElement).value);
    var valnumber=parseInt((document.getElementById('number') as HTMLInputElement).value);
    var NewDetail= new User(valname,valage,valnumber);
    UserArrayList.push(NewDetail);
    alert(`Hi! ${NewDetail.Name} your Account Added Successfully. Your User Id : ${NewDetail.UserId}`)
    homepage.style.display="block";
}

function Login(){
    let homepage=document.getElementById('homepage') as HTMLDivElement;
    let exuser  = document.getElementById('exuser') as HTMLDivElement;
    let registration = document.getElementById('registration') as HTMLDivElement;
    let optionDiv  = document.getElementById('optionDiv') as HTMLDivElement;
    let aCourse  = document.getElementById('aCourse') as HTMLDivElement;
    let EnCourse  = document.getElementById('EnCourse') as HTMLDivElement;
    

    homepage.style.display="none";
    registration.style.display="none";
    exuser.style.display="none";
    aCourse.style.display="none";
    EnCourse.style.display="none";

    var valID=(document.getElementById('uid') as HTMLInputElement).value;
    
    
    for(let i=0;i<Array.length;i++){
        if(UserArrayList[i].UserId==valID){
            tempId=UserArrayList[i].UserId;
            alert(`Welcome ! ${UserArrayList[i].Name}}`);
            optionDiv.style.display="block";

        }
    }
     
    

    


}

function AvailCourse(){
    let homepage=document.getElementById('homepage') as HTMLDivElement;
    let exuser  = document.getElementById('exuser') as HTMLDivElement;
    let registration = document.getElementById('registration') as HTMLDivElement;
    let optionDiv  = document.getElementById('optionDiv') as HTMLDivElement;
    let aCourse  = document.getElementById('aCourse') as HTMLDivElement;
    let EnCourse  = document.getElementById('EnCourse') as HTMLDivElement;
    

    
    
    homepage.style.display="none";
    registration.style.display="none";
    exuser.style.display="none";
    optionDiv.style.display="none";
    aCourse.style.display="block";
    EnCourse.style.display="none";


}
function EnrolledCourse(){
    let EnCourse  = document.getElementById('EnCourse') as HTMLDivElement;
    EnCourse.style.display="block";
    let homepage=document.getElementById('homepage') as HTMLDivElement;
    let exuser  = document.getElementById('exuser') as HTMLDivElement;
    let registration = document.getElementById('registration') as HTMLDivElement;
    let optionDiv  = document.getElementById('optionDiv') as HTMLDivElement;
    let aCourse  = document.getElementById('aCourse') as HTMLDivElement;
    
    

    homepage.style.display="none";
    registration.style.display="none";
    exuser.style.display="none";
    optionDiv.style.display="none";
    aCourse.style.display="none";
    let CourseCount=0;
    let due:number=0;
    let DetailCore:string="";

    for(let i=0;i<UserCourseList.length;i++)
    {

        if(tempId==UserCourseList[i].UID)
        {
            due=due+UserCourseList[i].DueDays;
            DetailCore+=UserCourseList[i].Cources+",";
            CourseCount++
            
        }
    }
    
    let v:string="Total Courses are : "+DetailCore+" and the count is"+CourseCount.toString()+" total due days are:"+due.toString();

    
    document.getElementById("EnCourseList").style.color="red";
    document.getElementById("EnCourseList").innerHTML=v;
}
function Enroll(){

    let homepage=document.getElementById('homepage') as HTMLDivElement;
    let exuser  = document.getElementById('exuser') as HTMLDivElement;
    let registration = document.getElementById('registration') as HTMLDivElement;
    let optionDiv  = document.getElementById('optionDiv') as HTMLDivElement;
    let aCourse  = document.getElementById('aCourse') as HTMLDivElement;
    let EnCourse  = document.getElementById('EnCourse') as HTMLDivElement;
    

    homepage.style.display="none";
    registration.style.display="none";
    exuser.style.display="none";
    
    aCourse.style.display="none";
    EnCourse.style.display="none";
    var valCourse=(document.getElementById('Cdetails') as HTMLInputElement).value;
    var valDue=parseInt((document.getElementById('Cduration') as HTMLInputElement).value);
    var newdetail= new Course(valCourse,valDue,tempId)
    UserCourseList.push(newdetail)
    
    alert(`Course Added SuccessFully ! your Course Id is:${newdetail.CusId}`);
    optionDiv.style.display="block";


}
function GoHome(){
    let homepage=document.getElementById('homepage') as HTMLDivElement;
    let exuser  = document.getElementById('exuser') as HTMLDivElement;
    let registration = document.getElementById('registration') as HTMLDivElement;
    let optionDiv  = document.getElementById('optionDiv') as HTMLDivElement;
    let aCourse  = document.getElementById('aCourse') as HTMLDivElement;
    let EnCourse  = document.getElementById('EnCourse') as HTMLDivElement;
    

    homepage.style.display="block";
    registration.style.display="none";
    exuser.style.display="none";
    optionDiv.style.display="none";
    aCourse.style.display="none";
    EnCourse.style.display="none";

}

