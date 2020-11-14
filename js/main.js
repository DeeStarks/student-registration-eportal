$(function(){
    // sidebar display
    $(".navbar .nav_items .fa-bars").click(function(){
        $(".sidebar").css({"right": "0"})
    })
    $(".sidebar .side_in .side_profile i").click(function(){
        $(".sidebar").css({"right": "-100%"})
    })

    // Dashboard sidebar
    $(".side_nav .side_in .side_profile i").click(function(){
        $(".side_nav").css({"left": "-300px"})
        $(".main_body").css({"padding": "100px 50px 50px 90px"})
        $(".contact_bg h3").css({"margin-left": "150px"})
    })
    $(".open_side").click(function(){
        $(".side_nav").css({"left": "0"})
        $(".main_body").css({"padding": "100px 50px 50px 350px"})
        $(".contact_bg h3").css({"margin-left": "350px"})
    })

    // Avatar Upload
    document.querySelector('.main_body .profile .card #avatar-upload').addEventListener('change', readURL, true);
    function readURL(){
        var file = document.querySelector(".main_body .profile .card #avatar-upload").files[0];
        var reader = new FileReader();
        reader.onloadend = function(){ 
            document.querySelector('.main_body .profile .card .img_upload').style.backgroundImage = "url(" + reader.result + ");";       
        }
        if(file){
            reader.readAsDataURL(file);
        }
    }
})

// Attendance Charts
let semester01 = document.getElementById("semester01").getContext('2d');
let semester02 = document.getElementById("semester02").getContext('2d');
let complete_att01 = document.getElementById("complete_att01").getContext('2d');
let complete_att02 = document.getElementById("complete_att02").getContext('2d');


let chart01 = new Chart(semester01, {
    type: 'line',
    data: {
        labels: ['Sep', "Oct", "Nov", "Dec", "Jan"],
        datasets: [{
            label: 'Percentage',
            data: [96, 80, 80, 90, 60, 50, 100],
            fill: false,
            borderColor: '#ff03cd58',
            borderWidth: 2,
        }]
    },
    options: {}
})

let chart02 = new Chart(semester02, {
    type: 'line',
    data: {
        labels: ['Feb', "Mar", "Apr", "May", "June"],
        datasets: [{
            label: 'Percentage',
            data: [70, 80, 90, 55, 72, 50, 100],
            fill: false,
            borderColor: '#ff850358',
            borderWidth: 2
        }]
    },
    options: {}
})

let complete01 = new Chart(complete_att01, {
    type: 'pie',
    data: {
        labels: ["Presence (80%)", "Absence (20%)"],
        datasets: [{
            label: 'Percentage',
            data: [80, 20],
            backgroundColor: [
                '#00ff1e',
                '#ff6347'
            ],
            fill: false,
            borderColor: 'transparent',
            borderWidth: 2,
            weight: 2
        }]
    },
    options: {}
})

let complete02 = new Chart(complete_att02, {
    type: 'horizontalBar',
    data: {
        labels: ['1st Semester', "2nd Semester"],
        datasets: [{
            label: 'Percentage',
            data: [90, 82, 0, 100],
            backgroundColor: '#ff63479e',
            fill: false,
            borderColor: '#ff6347',
            borderWidth: 2
        }]
    },
    options: {}
})