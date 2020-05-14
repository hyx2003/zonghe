let maxtime = 60 * 2;  
let c = false;
let hit = 0;


console.log(hit);
    function CountDow() {
        if (maxtime >= 0) {
            minutes = Math.floor(maxtime / 60);
            seconds = Math.floor(maxtime % 60);
            msg = "距离结束还有" + minutes + "分" + seconds + "秒";
            document.all["timer"].innerHTML = msg;
            if (maxtime >= 0){
               if (maxtime == 1 * 60)alert("还剩1分钟");--maxtime;} 
                    else{
                  clearInterval(timer);
                  alert("时间到，结束!");
                }
                if(c === true){
                    clearInterval(timer);
                    alert("提前" + maxtime - seconds + "完成任务，恭喜！");
                } }
            }
            timer = setInterval("CountDow()", 1000);    
for(let i = 0; i < maxtime ; i++){
    hit ++;
     if (hit == 80){
         c =true;
           }
}           
           
