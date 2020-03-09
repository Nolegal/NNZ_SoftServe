




var about = document.getElementById("about");
var btn = document.querySelector('.linka');

function handleNavClick1(event) {
event.preventDefault();
   
   about.scrollIntoView({block: "start", behavior: "smooth"});
}

btn.addEventListener('click',handleNavClick1);



var stock = document.getElementById("stock");
var btn = document.querySelector('.linkst');

function handleNavClick2(event) {
  event.preventDefault();
   stock.scrollIntoView({block: "start", behavior: "smooth"});
}

btn.addEventListener('click',handleNavClick2);


var bet = document.getElementById("bet");
var btn = document.querySelector('.linkbet');

function handleNavClick3(event) {
  event.preventDefault();
   bet.scrollIntoView({block: "start", behavior: "smooth"});
}

btn.addEventListener('click',handleNavClick3);

var shop = document.getElementById("shop");
var btn = document.querySelector('.linksh');

function handleNavClick4(event) {
  event.preventDefault();
   shop.scrollIntoView({block: "start", behavior: "smooth"});
}

btn.addEventListener('click',handleNavClick4);


var contact = document.getElementById("contact");
var btn = document.querySelector('.linkon');

function handleNavClick5(event) {
  event.preventDefault();
   contact.scrollIntoView({block: "start", behavior: "smooth"});
}

btn.addEventListener('click',handleNavClick5);



/* Menu nav toggle*/


$("#nav_toggle").on("click", function(event) {
	event.preventDefault();


	$("#nav").toggleClass("active");

   });

var login = document.getElementById("formElem");
var link = document.querySelector('loginlink');
var show = function (state) {
 
 document.getElementById('formElem').style.display = state;
 document.getElementById('loginlink').style.display = state;
    
}





// new Chartist.Line('.ct-chart', {
//   labels: ['Mar', 'May', 'Jul', 'Sep', 'Nov', 'Jan 2020','Mar2020'],
//   series: [
//     [1.30, 1.26, 1.24, 1.23, 1.27, 1.30, 1.32]
//   ]
// }, {
//   low: 1.23,
//   showArea: true
// }

// );


// new Chartist.Line('.ct-chart',showArea);

// var data = {
//   // A labels array that can contain any sort of values
//   labels: ['Mar', 'May', 'Jul', 'Sep', 'Nov', 'Jan 2020','Mar2020'],
//   // Our series array that contains series objects or in this case series data arrays
//   series: [
//     [1.30, 1.26, 1.24, 1.23, 1.27, 1.30, 1.32]
//   ]
// };

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
// new Chartist.Line('.ct-chart1', data );

// new Chartist.Line('.ct-chart1', {
//   labels: ['Mar', 'May', 'Jul', 'Sep', 'Nov', 'Jan 2020','Mar2020'],
//   series: [
//     [3000, 5000, 13000, 11000, 9000, 7000, 1000]
//   ]
// }, {
//   low: 1.23,
//   showArea1: true
// }
// );


// new Chartist.Line('.ct-chart1', showArea1, );






var ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.width = 435;
ctx.canvas.height = 292;
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Mar', 'May', 'Jul', 'Sep', 'Nov', 'Jan 2020','Mar2020'],
        datasets: [{
            
            backgroundColor: 'rgb(255, 179, 255)',
            borderColor: 'rgb(230, 0, 0)',
            data: [1.30, 1.26, 1.24, 1.23, 1.27, 1.30, 1.32]
        }]
    },

    // Configuration options go here
    options: {
        responsive: false
    }
});



var ctx = document.getElementById('myChart2').getContext('2d');
ctx.canvas.width = 435;
ctx.canvas.height = 292;
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Mar', 'May', 'Jul', 'Sep', 'Nov', 'Jan 2020','Mar2020'],
        datasets: [{
            
            backgroundColor: 'rgb(128, 159, 255)',
            borderColor: 'rgb(0, 0, 128)',
            data: [3000, 5000, 13000, 11000, 9000, 7000, 10000]
        }]
    },

    // Configuration options go here
    options: {
        responsive: false
    }
});



var ctx = document.getElementById('myChart3').getContext('2d');
ctx.canvas.width = 435;
ctx.canvas.height = 292;
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Mar', 'May', 'Jul', 'Sep', 'Nov', 'Jan 2020','Mar2020'],
        datasets: [{
            
            backgroundColor: 'rgb(255, 255, 153)',
            borderColor: 'rgb(255, 102, 0)',
            data: [1.125, 1.135, 1.115, 1.090, 1.080, 1.065, 1.050]
        }]
    },

    // Configuration options go here
    options: {
        responsive: false
    }
});


var ctx = document.getElementById('myChart4').getContext('2d');
ctx.canvas.width = 435;
ctx.canvas.height = 292;
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Mar', 'May', 'Jul', 'Sep', 'Nov', 'Jan 2020','Mar2020'],
        datasets: [{
            
            backgroundColor: 'rgb(128, 255, 229)',
            borderColor: 'rgb(0, 179, 0)',
            data: [2.5, 3.7, 7, 7.97, 6.83, 4.81, 5.5]
        }]
    },

    // Configuration options go here
    options: {
        responsive: false
    }
});







formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(/*'/article/formdata/post/user'*/'/Public/index',
    {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json',
        },
      body: JSON.stringify({password: password.value, name: name1.value})
    });

    let result = await response.json();

    alert(result.message);
  };