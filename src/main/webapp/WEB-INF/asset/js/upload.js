/**
 UploadAction
 Valudating and Form submit Action (with AJAX)
 */

 $(function(){
 
 	const Toast = Swal.mixin({
	    toast: true,
	    position: 'center',
	    showConfirmButton: false,
	    timer: 1500,
	    timerProgressBar: true,
	    didOpen: (toast) => {
	        toast.addEventListener('mouseenter', Swal.stopTimer)
	        toast.addEventListener('mouseleave', Swal.resumeTimer)
	    }
	})
 
	$('#uploadBtn').click(function(){
		if($('#imageName').val()==''){
			Toast.fire({
			    icon: 'warning',
			    title: '상품명을 입력해주세요.'
			})
		}else if($('#imageContent').val()==''){
			Toast.fire({
			    icon: 'warning',
			    title: '상품설명을 입력해주세요.'
			})
		}else{
			var formData = new FormData($('#uploadForm')[0]);
			$.ajax({
				type:'post',
				enctype: 'multipart/form-data',
				processData: false,
				contentType: false,
				url:'/TestMaven/board/upload',
				data:formData,
				dataType:'text',
				success: function(data){
					Swal.fire({
						title: '파일 업로드를 성공했습니다.',
						text: "추가로 파일을 업로드하시겠습니까?",
						icon: 'question',
						showDenyButton: true,
						confirmButtonText: '예',
						denyButtonText: '아니요',
					}).then((result) => {
						if (result.isConfirmed) {
							location.reload();
						}else if (result.isDenied) {
							location.href='/TestMaven/board/uploadList'
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
			});
		}
	});
});