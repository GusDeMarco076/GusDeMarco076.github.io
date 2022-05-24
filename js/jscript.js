function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


function ValidateEmail() {

  var email = document.getElementById('Email');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    alert('La dirección de email ingresada es inválida, favor intente nuevamente...');
    email.focus;
    return false;
  }
}


$(function() {

new Slider({
      images: '.slider-2 img',
      btnPrev: '.slider-2 .buttons .prev',
      btnNext: '.slider-2 .buttons .next',
      auto: true,
      rate: 3000
  });
});
  
function Slider(obj) {
	this.images = $(obj.images);
	this.auto = obj.auto;
	this.btnPrev = obj.btnPrev;
	this.btnNext = obj.btnNext;
     this.rate = obj.rate || 3000;

	var i = 0;
     var slider = this;

	this.prev = function () {
		slider.images.eq(i).removeClass('shown');
		i--;

		if (i < 0) {
			i = slider.images.length - 1;
		}

		slider.images.eq(i).addClass('shown');
	}

	this.next = function () {
		slider.images.eq(i).removeClass('shown');
		i++;

		if (i >= slider.images.length) {
			i = 0;
		}

		slider.images.eq(i).addClass('shown');
	}

    $(slider.btnPrev).on('click', function(){ slider.prev();});
    $(slider.btnNext).on('click', function(){ slider.next();});

	if (slider.auto)	{
        setInterval(slider.next, slider.rate);
    }
};