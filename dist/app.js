function openNav() {
  document.getElementById("navbar").classList.toggle("!left-[0%]");
  document.body.classList.toggle("overflow-hidden");
}

$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  button:false,
  slidesToShow: 1,
  nextArrow:'.next-btn',
  prevArrow:'.prev-btn',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
             }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});
	
function navtabs(tabs) {
  const tabshow = document.querySelectorAll('.tabshow')
  const tabbtn = document.querySelectorAll('.tabs button')
  tabshow.forEach(content => {
      content.style.display = 'none'
  })

  const selecttoshow = document.getElementById(tabs)
  selecttoshow.style.display = 'block'

  tabbtn.forEach(content => {
    content.classList.remove('bg-blue-800')
    content.classList.remove('text-white')
  })
  
  
  const activetab = document.querySelector(`button[onclick = "navtabs('${tabs}')"]`)
  activetab.classList.add("bg-blue-800")
  activetab.classList.add("text-white")
  activetab.classList.add("duration-300")
}
navtabs('tab1');
