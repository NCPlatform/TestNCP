/**
when Click deleteBtn
btn is dynamic content
 */

$(function(){
	$('body').on('click','.deleteBtn',function(){
		Swal.fire({
		   title: '파일을 삭제합니다.',
		   text: '정말 삭제하시겠습니까?',
		   icon: 'warning',
		   
		   showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
		   confirmButtonText: '승인', // confirm 버튼 텍스트 지정
		   cancelButtonText: '취소', // cancel 버튼 텍스트 지정
		   
		   reverseButtons: true, // 버튼 순서 거꾸로
		   
		}).then(result => {
			if (result.isConfirmed) {
				var seq = $(this).closest('tr').find('#seq').text();
				$.ajax({
					type:'post',
					data:{
						seq: seq
						},
					url:'/TestMaven/board/delete',
					success:function(){
						Swal.fire('파일을 삭제했습니다.').then(result => {
						   if (result.isConfirmed) {
						      window.location.reload();
						   }
						});
					},
					error:function(e){
						console.log(e);
					}
				});
			}
		});
	});
});