const curDate = document.getElementById("date");

let whethercon=document.getElementById("whethercon");

const tempStatus="clouds";
const getCurrentDay=()=>{
    var weekday=new Array(7);
    weekday[0]="sunday";
    weekday[1]="monday";
    weekday[2]="sunday";
    weekday[3]="sunday";
    weekday[4]="sunday";
    weekday[5]="sunday";
    weekday[6]="sunday";

    let currentTime =new Date();
    let day=(weekday[currentTime.getDay()]);
    return day;
};

const getCurrentTime =()=>{
    var  months =["Jan","Feb","mar","apr","may","june","july","aug","sept","octo","nov","dec"];
    var now=new Date();
    var month=now.getMonth()+1;
    var day=now.getDate();
    var year=now.getFullYear();

    let hours=now.getHours();
    let mins=now.getMinutes();
    let periios="AM";

    if(hours >11){
        periios ="PM";
        if(hours>12) hours -+12;
    }

    if(mins<10)
    mins="0"+mins;

    return ` ${months[month]} ${day}  | ${hours}:${mins}${periios}`;

    // console.log(periios);
    // console.log( +'/'+day);
}




curDate.innerHTML=  getCurrentDay()+" | "+getCurrentTime();