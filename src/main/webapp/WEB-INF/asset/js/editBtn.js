/**
when Click editBtn
btn is dynamic content
 */

$('body').on('click','.editBtn',function(){
	var check = $(this).closest('table').find('.checkedEdit');
	var cancleBtn = `<div class="btn btn-secondary cancleBtn">취소</div>
						<input id="fileInput" type="file" hidden/>							
						`;
		$(this).after(cancleBtn);
		$(this).addClass('checkedEdit');
		
		var imageName = $(this).closest('tr').find('#imageName').text();
		var imageContent = $(this).closest('tr').find('#imageContent').text();
	
		var inputImageName =`
			<input class="imageName" type="text" value="${imageName}" />
		`;
		var inputImageContent =`
			<input class="imageContent" type="text" value="${imageContent}" />
		`;
		
		$(this).closest('tr').find('#imageName').html(inputImageName);
		$(this).closest('tr').find('#imageContent').html(inputImageContent);
		$(this).closest('tr').find('img').addClass('clickImgBtn').addClass('opacity');
		
		
		$(this).removeClass('editBtn').addClass('editCompleteBtn').text('완료');
	

});//body


//만약 이미지를 클릭한다면, file인풋태그 클릭
$('body').on('click','.clickImgBtn',function(){
	$('#fileInput').trigger('click');
});


$('body').on('change', '#fileInput', function(event) {
    var file = event.target.files[0];
    var img = $(this).closest('tr').find('img');

    if (file) {
        var reader = new FileReader();


        reader.readAsDataURL(file);
        reader.onload = function(e) {
            img.attr('src', e.target.result);
            img.removeClass('opacity');
        }
    }//if
});

$('body').on('click','.editCompleteBtn',function(){
	
	var imageName = $(this).closest('tr').find('.imageName').val();
	var imageContent = $(this).closest('tr').find('.imageContent').val();
	var seq = $(this).closest('tr').find('#seq').text();
	var fileInput = $(this).closest('tr').find('#fileInput').val();
	
	var formData = new FormData();
	formData.append('imageName', imageName);
	formData.append('imageContent', imageContent);
	formData.append('seq', seq);
	formData.append('fileInput', $(this).closest('tr').find('#fileInput')[0].files[0]);
	
	$.ajax({
		type:'post',
		url:'/TestMaven/board/editComplete',
		data:formData,
		enctype: 'multipart/form-data',
		processData: false,
		contentType: false,
		success:function(){
			Swal.fire({
				text: '파일 수정을 완료했습니다.',
				icon: 'success',
			}).then((result) => {
				if (result.isConfirmed) {
					location.reload();
				}
			})
		},
		error:function(e){
			console.log(e);
			Swal.fire({
				title: '파일 업로드를 실패했습니다.',
				text: "관리자에게 문의해주세요.",
				icon: 'error',
			});
		}
	
	});//ajax

});

$('body').on('click','.cancleBtn',function(){
	window.location.reload();
});