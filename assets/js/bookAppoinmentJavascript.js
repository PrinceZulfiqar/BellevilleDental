
    const date = new Date();
    const renderCalendar = () =>{

    date.setDate(1);
    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    const firstDaysIndex = date.getDay();
    const lastDaysIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
    const nextDays = 7 - lastDaysIndex - 1;
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "Jun",
        "July",
        "August",
        "September",
        "Octuber",
        "November",
        "December"
    ]

    document.querySelector('.date h1').innerHTML = month[date.getMonth()];
    document.querySelector('.date p').innerHTML = new Date().toDateString();

    var GET_MONTH = month[date.getMonth()];
    var GET_YEAR = new Date().getFullYear();
    // console.log(GET_YEAR);
    let days = "";

    for(let x=firstDaysIndex; x>0; x--){
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for(let i = 1; i <= lastDay; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){

            days += `<div class="today" data-month="`+GET_MONTH+`" data-year="`+GET_YEAR+`">${i}</div>`;
        
        }
        else{

            days += `<div  data-month="`+GET_MONTH+`" data-year="`+GET_YEAR+`" >${i}</div>`;

        }
    }

    for(let j = 1; j <= nextDays; j++){
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
    };

    document.querySelector(".prev").addEventListener("click",()=>{
        date.setMonth(date.getMonth()-1);
        renderCalendar();
    });
    document.querySelector(".next").addEventListener("click",()=>{
        date.setMonth(date.getMonth()+1);
        renderCalendar();
    });

    renderCalendar();

    $('.days div').css('pointer-events','auto');

    $('.days div').click(function(){ 
        
        var get_day  = $(this).text();
        var get_mon = $(this).data('month');
        var get_year =  $(this).data('year');
        
        $('.today').removeClass('today');
        $(this).addClass('today');

        // console.log(get_mon);
        // console.log(get_year);

        $('#booking-date').val(get_day+"-"+get_mon+"-"+get_year);

            
        // var dateObj = new Date();
        // var month = dateObj.getUTCMonth() + 1; //months from 1-12
        // var day = dateObj.getUTCDate();
        // var year = dateObj.getUTCFullYear();
   
        // $('#booking-date').val(newdate = year + "-" + month + "-" + day);
    });
    
    
 