function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question1").style.display = "inline-block";
}
function endQuiz() {
   document.getElementById("results").style.display = "none";
  document.getElementById("intro").style.display = "inline-block";
  document.querySelector('input[name="quest1"]:checked').checked = false;
  document.querySelector('input[name="quest2"]:checked').checked = false;
  document.querySelector('input[name="quest3"]:checked').checked = false;
  document.querySelector('input[name="quest4"]:checked').checked = false;
  document.querySelector('input[name="quest5"]:checked').checked = false;

}
function question2() {
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "inline-block";
}
function question3() {
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "inline-block";
}
function question4() {
  document.getElementById("question3").style.display = "none";
  document.getElementById("question4").style.display = "inline-block";
}
function question5() {
  document.getElementById("question4").style.display = "none";
  document.getElementById("question5").style.display = "inline-block";
}
function results() {
  calculateResults()
  document.getElementById("question5").style.display = "none";
  document.getElementById("results").style.display = "inline-block";
}
  function calculateResults() {
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  let q1;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          break;
       
       }
       
       
  }
  if (q1Value==1){
       	q1=1;
        console.log(q1);}
       	else{
       		q1=0;
       		 console.log(q1);
       	}

   const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  let q2;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
         
          break;
       }
       
       
  }
  if (q2Value==2){
       	q2=1;
        console.log(q2);}
       	else{
       		q2=0;
       		 console.log(q2);
       	}
 const radios3 = document.querySelectorAll('input[name="quest3"]');
  let q3Value;
  let q3;
  for (const rb of radios3) {
      if (rb.checked) {
          q3Value = rb.value;
         
          break;
       }
       
       
  }
  if (q3Value==2){
       	q3=1;
        console.log(q3);}
       	else{
       		q3=0;
       		 console.log(q3);
       	}
 const radios4 = document.querySelectorAll('input[name="quest4"]');
  let q4Value;
  let q4;
  for (const rb of radios4) {
      if (rb.checked) {
          q4Value = rb.value;
         
          break;
       }
       
       
  }
  if (q4Value==3){
       	q4=1;
        console.log(q4);}
       	else{
       		q4=0;
       		 console.log(q4);
       	}
 const radios5 = document.querySelectorAll('input[name="quest5"]');
  let q5Value;
  let q5;
  for (const rb of radios5) {
      if (rb.checked) {
          q5Value = rb.value;
         
          break;
       }
       
       
  }
  if (q5Value==1){
       	q5=1;
        console.log(q5);}
       	else{
       		q5=0;
       		 console.log(q5);
       	}
  let total = q1+q2+q3+q4+q5;
  document.getElementById("Correct").innerHTML = total;
   document.getElementById("Worng").innerHTML = (5-total);
 document.getElementById("Percentage").innerHTML = ((total/5)*100) ;
 document.getElementById("total-score").innerHTML = total;

   }