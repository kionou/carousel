
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

function plus(){
    $('.image').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    
  })
};
$('.slider2').slick();

  
let slider1 = document.querySelector('.image')
let text = document.querySelector('.texte')

function btn() {
    let next = document.querySelectorAll('.slick-next') 
for (let i = 0; i < next.length; i++) {
     next[i];
    next[i].innerHTML= `<i class="fas fa-chevron-right"></i>`
}


let prev = document.querySelectorAll('.slick-prev')
for (let i = 0; i < prev.length; i++) {
     prev[i];
     prev[i].innerHTML= `<i class="fas fa-chevron-left"></i>`
} 
    
}



let apikey = "6c5b4f0066b10cd4b57cf6b6571c0ade";


fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`)
.then(res => res.json())
.then(film => {
    let films = film.results
   
   affichage(films)
   mgs()
   plus();
   btn();
} );

function affichage(films) {
    for (let i = 0; i < films.length; i++) { 
        
    slider1.innerHTML+= `
        
        <div class="card col-lg-3 col-md-3" >
            <img src="https://image.tmdb.org/t/p/w500${films[i].backdrop_path || films[i].poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Izuku Midoriya</h5>
              <p class="card-text">Izuku Midoriya, alias Deku, est le personnage principal du manga
                   My Hero Academia paru le 7 juillet 2014.</p>
              
            </div>
        </div>
        `;
    }   
   
}


function mgs() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(message => {
        for (let i = 0; i < message.length - 80 ;  i++) {
            const  messages = message[i];
              console.log(messages);
               text.innerHTML+= `
               
               <div class="card col-lg-3 col-md-3" >
                   <div class="card-body">
                     <h5 class="card-title">data-rr = ${messages.title}</h5>
                     <p class="card-text">${messages.body}</p>
                     
                   </div>
               </div>
               `;
       
               // console.log(message[i].title);
               // console.log(message[i].body)  
              
           } 
       
    });
    
}





    

