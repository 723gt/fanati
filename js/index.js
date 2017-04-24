$(function(){
});
function accounting()
{
  var in_time = document.in_time.in_time.value;
  var in_min = document.in_min.in_min.value;
  in_time = Number(in_time);
  in_min = Number(in_min);
  check_time(in_time,in_min);
 }

function check_time(in_time,in_min)
{
  var time = new Date();
  var now_time,now_min;

  if(time.getHours() < 13)
  {
    now_time = time.getHours() - in_time; 
  }
  else
  {
    now_time = time.getHours;
  }

  if(time.getMinutes() < in_min)
  {
    console.log("in");
    var sub_min = in_min - time.getMinutes();
    now_min = sub_min + (60 - (in_min - sub_min));
    now_time -= 1;
  }
  else
  {
    console.log("hoge");
    now_min = time.getMinutes() - in_min;
  }
  console.log(now_time);
  console.log(now_min);
 
}




