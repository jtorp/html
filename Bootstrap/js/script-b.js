'use strict';

/*------------------
Enter competition modal
------------------*/
document.getElementById('winBtn').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display= 'flex';
});

document.querySelector('.modal-content-close').addEventListener('click', function() {
	document.querySelector('.bg-modal').style.display = "none";
});



