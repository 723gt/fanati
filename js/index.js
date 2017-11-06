$(function(){
});
var plays_tmp = 0;
var msg_tmp = "";
function accounting()
{
  for(var i = 0;i < document.plan.plan.length;i++){
    console.log("plan:" + document.plan.plan[i]);
    if(document.plan.plan[i].checked){
      console.log("i" + i)
      switch (i){
        case 0:
          plays_tmp += 3000;
          msg_tmp += "昼のフリータイム\n";
          break;
        case 1:
          plays_tmp += 3500;
          msg_tmp += "夕方のフリータイム\n";
          break;
        case 2:
          plays_tmp += 3500;
          msg_tmp += "夜のフリータイム\n";
          break;
        case 3:
          var extension = Number(document.extension.extension.value);
          plays_tmp += (500 * extension);
          msg_tmp += `×${extension}回延長\n`
          break;
        case 4:
          var in_time = document.in_time.in_time.value;
          var in_min = document.in_min.in_min.value;
          in_time = Number(in_time);
          in_min = Number(in_min);
          checkTime(in_time,in_min);
          break;
      }
    }
  }
  resultDisp();
 }

function checkTime(in_time,in_min)
{
  var time = new Date();
  var now_time,now_min;

  if(time.getHours() < 13 && in_time >= 13)
  {
    console.log("FOO");
    var timet = time.getHours() + 24;
    now_time = timet - in_time;
  }
  else
  {
    now_time = time.getHours() - in_time;
  }
  console.log(now_time);
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
  analysisPlan(now_time,now_min,in_time,in_min,time);
 
}

function analysisPlan(now_time,now_min,in_time,in_min,time)
{
  var plan_msg = ["1時間プラン","2時間プラン","3時間プラン","3時間プラン+延長1時間","5時間プラン"];
  var plan_plays = [1500,2500,3000,4000,4000];
  if(now_time == 0){
    msg_tmp = "1時間プラン";
    plan_plays = 1500;
  }
  else{
    msg_tmp = plan_msg[now_time - 1];
    plays_tmp = plan_plays[now_time - 1];

    if(now_min >= 30)
    {
      msg_tmp = plan_msg[now_time - 1] + " + 延長30分";
      plays_tmp = plan_plays[now_time - 1] + 500;
   }
  }

}

function resultDisp(){
  var disp_msg = msg_tmp + "\n" + plays_tmp + "円";
  alert(disp_msg);
  location.reload();
}








