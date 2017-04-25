$(function(){
});
function accounting()
{
  var in_time = document.in_time.in_time.value;
  var in_min = document.in_min.in_min.value;
  in_time = Number(in_time);
  in_min = Number(in_min);
  checkTime(in_time,in_min);
 }

function checkTime(in_time,in_min)
{
  var time = new Date();
  var now_time,now_min;

  if(time.getHours() < 13 && in_time >= 13)
  {
    //now_time = time.getHours() - in_time; 
    console.log("FOO");
    var timet = time.getHours() + 24;
    now_time = timet - in_time;
  }
  else
  {
    now_time = time.getHours() - in_time;
  }

  if(time.getMinutes() < in_min)
  {
    console.log("in");
    var sub_min = in_min - time.getMinutes();
    now_min = 60 - in_min;
    now_time -= 1;
  }
  else
  {
    console.log("hoge");
    now_min = time.getMinutes() - in_min;
  }
  console.log(now_time);
  console.log(now_min);
  analysisPlan(now_time,now_min,in_time,in_min);
 
}

function analysisPlan(now_time,now_min,in_time,in_min)
{
  var plan_msg = ["1時間プラン","2時間プラン","3時間プラン","3時間プラン+延長1時間","5時間プラン"];
  var plan_plays = [1500,2500,3000,4000,4000];
  var msg_tmp,plays_tmp;

  if(now_min >= 30)
  {
    msg_tmp = plan_msg[now_time - 1] + " + 延長30分";
    plays_tmp = plan_plays[now_time - 1] + 500;
  }
  else
  {
    msg_tmp = plan_msg[now_time - 1];
    plays_tmp = plan_plays[now_time - 1];
  } 
  var disp_msg = msg_tmp + "<br>" + plays_tmp + "円";
  console.log(disp_msg);


}





