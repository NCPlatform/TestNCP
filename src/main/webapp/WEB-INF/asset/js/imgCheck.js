/**
 when Image select
 */
 
$('#camera').on('click',function(){
	$('#img').trigger('click');
});

$('#img').change(function(){
	
	
		$('#showImgList').empty();
		for(var i=0; i<this.files.length; i++){
			readURL(this.files[i]);
		}
});

function readURL(file){
	var reader = new FileReader();
	
	reader.onload = function(e){
		var img = document.createElement('img');
		img.src = e.target.result
		img.style = 'width:150px; height: 120px; object-fit:cover'
		img.classList.add('img-thumbnail')
		$('#showImgList').append(img);
	}
	reader.readAsDataURL(file);
}