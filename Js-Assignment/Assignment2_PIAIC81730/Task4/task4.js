var h1 = document.createElement("h1");
h1.innerHTML = "Marks Sheet";
document.body.appendChild(h1);

var h2 = document.createElement("h2");
h2.innerHTML = name + " " + "your marksheet";
document.body.appendChild(h2);
document.body.style.textAlign = "center";

var name = prompt("Enter your name");
var marks = 300;
var english = prompt("Enter your english marks");
var urdu = prompt("Enter your urdu marks");
var maths = prompt("Enter your maths marks");

var total = Number(english) + Number(urdu) + Number(maths);
console.log(total);
var percent = ((total * 100) / marks).toFixed(2);
console.log(percent);
if (Number(english) > 100 || Number(urdu) > 100 || Number(maths) > 100) {
  alert("please" + " " + name + " " + "enter correct marks within 100");
}
else if (percent >= 80){
    var total_marks = document.createElement("p");
    total_marks.innerHTML = "TOTAL MARKS";
    document.body.appendChild(total_marks);
    total_marks.style.float = "left"
    total_marks.style.marginLeft = "40%"
    var total_val = document.createElement("p");
    total_val.innerHTML = marks;
    document.body.appendChild(total_val);
    total_val.style.float = "right"
    total_val.style.marginRight = "40%";


    var nxt_line = document.createElement("br");
    document.body.appendChild(nxt_line)

    var obtain_marks = document.createElement("p");
    obtain_marks.innerHTML = "OBTAIN MARKS";
    document.body.appendChild(obtain_marks);
    obtain_marks.style.float = "left"
    obtain_marks.style.marginLeft = "40%";

    var obtain_val = document.createElement("p");
    obtain_val.innerHTML = total;
    document.body.appendChild(obtain_val);
    obtain_val.style.float = "right"
    obtain_val.style.marginRight = "40%";

    
    document.body.appendChild(nxt_line)

    var per = document.createElement("p")
    per.innerHTML = "Percentage";
    document.body.appendChild(per)
    per.style.float = "left"
    per.style.marginLeft = "40%"
    var per_val = document.createElement("p");
    per_val.innerHTML = percent;
    document.body.appendChild(per_val)
    per_val.style.float = "right"
    per_val.style.marginRight = "40%";

    document.body.appendChild(nxt_line)

    var grade = document.createElement("p");
    grade.innerHTML = "GRADE";
    document.body.appendChild(grade);
    grade.style.float = "left"
    grade.style.marginLeft = "40%"

    var grade_val = document.createElement("p");
    grade_val.innerHTML = "A-One"
    document.body.appendChild(grade_val);
    grade_val.style.float = "right"
    grade_val.style.marginRight = "40%";
    
    document.body.appendChild(nxt_line)

    var remarks = document.createElement("p");
    remarks.innerHTML = "REMARKS";
    document.body.appendChild(remarks);
    remarks.style.float = "left"
    remarks.style.marginLeft = "40%"

    var remarks_val = document.createElement("p");
    remarks_val.innerHTML = "Excellent";
    document.body.appendChild(remarks_val);
    remarks_val.style.float = "right"
    remarks_val.style.marginRight = "40%";
    
    
}
else if (percent >= 70) {
    var total_marks = document.createElement("p");
    total_marks.innerHTML = "TOTAL MARKS";
    document.body.appendChild(total_marks);
    total_marks.style.float = "left"
    total_marks.style.marginLeft = "40%"
    var total_val = document.createElement("p");
    total_val.innerHTML = marks;
    document.body.appendChild(total_val);
    total_val.style.float = "right"
    total_val.style.marginRight = "40%";


    var nxt_line = document.createElement("br");
    document.body.appendChild(nxt_line)

    var obtain_marks = document.createElement("p");
    obtain_marks.innerHTML = "OBTAIN MARKS";
    document.body.appendChild(obtain_marks);
    obtain_marks.style.float = "left"
    obtain_marks.style.marginLeft = "40%";

    var obtain_val = document.createElement("p");
    obtain_val.innerHTML = total;
    document.body.appendChild(obtain_val);
    obtain_val.style.float = "right"
    obtain_val.style.marginRight = "40%";

    
    document.body.appendChild(nxt_line)

    var per = document.createElement("p")
    per.innerHTML = "Percentage";
    document.body.appendChild(per)
    per.style.float = "left"
    per.style.marginLeft = "40%"
    var per_val = document.createElement("p");
    per_val.innerHTML = percent;
    document.body.appendChild(per_val)
    per_val.style.float = "right"
    per_val.style.marginRight = "40%";

    document.body.appendChild(nxt_line)

    var grade = document.createElement("p");
    grade.innerHTML = "GRADE";
    document.body.appendChild(grade);
    grade.style.float = "left"
    grade.style.marginLeft = "40%"

    var grade_val = document.createElement("p");
    grade_val.innerHTML = "A"
    document.body.appendChild(grade_val);
    grade_val.style.float = "right"
    grade_val.style.marginRight = "40%";
    
    document.body.appendChild(nxt_line)

    var remarks = document.createElement("p");
    remarks.innerHTML = "REMARKS";
    document.body.appendChild(remarks);
    remarks.style.float = "left"
    remarks.style.marginLeft = "40%"

    var remarks_val = document.createElement("p");
    remarks_val.innerHTML = "Good";
    document.body.appendChild(remarks_val);
    remarks_val.style.float = "right"
    remarks_val.style.marginRight = "40%";
}
else if(percent >= 60){
    var total_marks = document.createElement("p");
    total_marks.innerHTML = "TOTAL MARKS";
    document.body.appendChild(total_marks);
    total_marks.style.float = "left"
    total_marks.style.marginLeft = "40%"
    var total_val = document.createElement("p");
    total_val.innerHTML = marks;
    document.body.appendChild(total_val);
    total_val.style.float = "right"
    total_val.style.marginRight = "40%";


    var nxt_line = document.createElement("br");
    document.body.appendChild(nxt_line)

    var obtain_marks = document.createElement("p");
    obtain_marks.innerHTML = "OBTAIN MARKS";
    document.body.appendChild(obtain_marks);
    obtain_marks.style.float = "left"
    obtain_marks.style.marginLeft = "40%";

    var obtain_val = document.createElement("p");
    obtain_val.innerHTML = total;
    document.body.appendChild(obtain_val);
    obtain_val.style.float = "right"
    obtain_val.style.marginRight = "40%";

    
    document.body.appendChild(nxt_line)

    var per = document.createElement("p")
    per.innerHTML = "Percentage";
    document.body.appendChild(per)
    per.style.float = "left"
    per.style.marginLeft = "40%"
    var per_val = document.createElement("p");
    per_val.innerHTML = percent;
    document.body.appendChild(per_val)
    per_val.style.float = "right"
    per_val.style.marginRight = "40%";

    document.body.appendChild(nxt_line)

    var grade = document.createElement("p");
    grade.innerHTML = "GRADE";
    document.body.appendChild(grade);
    grade.style.float = "left"
    grade.style.marginLeft = "40%"

    var grade_val = document.createElement("p");
    grade_val.innerHTML = "B"
    document.body.appendChild(grade_val);
    grade_val.style.float = "right"
    grade_val.style.marginRight = "40%";
    
    document.body.appendChild(nxt_line)

    var remarks = document.createElement("p");
    remarks.innerHTML = "REMARKS";
    document.body.appendChild(remarks);
    remarks.style.float = "left"
    remarks.style.marginLeft = "40%"

    var remarks_val = document.createElement("p");
    remarks_val.innerHTML = "You need to improve";
    document.body.appendChild(remarks_val);
    remarks_val.style.float = "right"
    remarks_val.style.marginRight = "40%";
}
else if(percent < 60 ) {
    var total_marks = document.createElement("p");
    total_marks.innerHTML = "TOTAL MARKS";
    document.body.appendChild(total_marks);
    total_marks.style.float = "left"
    total_marks.style.marginLeft = "40%"
    var total_val = document.createElement("p");
    total_val.innerHTML = marks;
    document.body.appendChild(total_val);
    total_val.style.float = "right"
    total_val.style.marginRight = "40%";


    var nxt_line = document.createElement("br");
    document.body.appendChild(nxt_line)

    var obtain_marks = document.createElement("p");
    obtain_marks.innerHTML = "OBTAIN MARKS";
    document.body.appendChild(obtain_marks);
    obtain_marks.style.float = "left"
    obtain_marks.style.marginLeft = "40%";

    var obtain_val = document.createElement("p");
    obtain_val.innerHTML = total;
    document.body.appendChild(obtain_val);
    obtain_val.style.float = "right"
    obtain_val.style.marginRight = "40%";

    
    document.body.appendChild(nxt_line)

    var per = document.createElement("p")
    per.innerHTML = "Percentage";
    document.body.appendChild(per)
    per.style.float = "left"
    per.style.marginLeft = "40%"
    var per_val = document.createElement("p");
    per_val.innerHTML = percent;
    document.body.appendChild(per_val)
    per_val.style.float = "right"
    per_val.style.marginRight = "40%";

    document.body.appendChild(nxt_line)

    var grade = document.createElement("p");
    grade.innerHTML = "GRADE";
    document.body.appendChild(grade);
    grade.style.float = "left"
    grade.style.marginLeft = "40%"

    var grade_val = document.createElement("p");
    grade_val.innerHTML = "Fail"
    document.body.appendChild(grade_val);
    grade_val.style.float = "right"
    grade_val.style.marginRight = "40%";
    
    document.body.appendChild(nxt_line)

    var remarks = document.createElement("p");
    remarks.innerHTML = "REMARKS";
    document.body.appendChild(remarks);
    remarks.style.float = "left"
    remarks.style.marginLeft = "40%"

    var remarks_val = document.createElement("p");
    remarks_val.innerHTML = "Sorry Get Out";
    document.body.appendChild(remarks_val);
    remarks_val.style.float = "right"
    remarks_val.style.marginRight = "40%";
}