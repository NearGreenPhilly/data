
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDM6H1NkKcMWB-EjWg0u52BuXKdGn6xAfc",
    authDomain: "fbchap8.firebaseapp.com",
    databaseURL: "https://fbchap8.firebaseio.com",
    projectId: "fbchap8",
    storageBucket: "fbchap8.appspot.com",
    //messagingSenderId: "959261246991"
  };
  firebase.initializeApp(config);

  var database = firebase.database()

  var reservationData = {};


$('.reservation-form').on('submit', function(e) {
  e.preventDefault();

  reservationData.name = $('.reservation-name').val();
  
  reservationData.number = $('.reservation-number').val();
  
  alert("See you soon!");
//maybe add the date, using the dropdown? 
  

var reservationsReference = database.ref('reservations');

reservationsReference.push(reservationData); 


  
});



//Now, to get the reservations data after new reservations have loaded so they can be displayed in the template ??How would I do it so it's more of a single response? 
function getReservations() {

		database.ref('reservations').on('value', function(results) {   //not sure where this comes from 
  
    var allReservations = results.val();
      $('.reservations').empty();      
        
      
      //loop through all 
      for(var reservation in allReservations){
        var context = {
          name: allReservations[reservation].name,
          number: allReservations[reservation].number,
          reservationID: reservation
        };
        
        var source = $("#template").html();
        
        var template = Handlebars.compile(source);
        
        var reservationListItem = template(context)
        
     $('.reservations').append(reservationListItem);
        
      }
      
    });
    
}
                                    
getReservations();  

function initMap() {
  
  var location = {
    lat: 41.0727,
    lng: -72.3398
  };
      
  var map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 10,
    scrollwheel: false
 
  });
  
  var marker = new google.maps.Marker ({
    position: location,
    map: map

  });
}
  

initMap();