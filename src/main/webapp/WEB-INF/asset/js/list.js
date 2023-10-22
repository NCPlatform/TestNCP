/**
 * getList
 */
 
 $(function(){

	$.ajax({
		type:'post',
		url:'/TestMaven/board/getUploadList',
		dataType:'json',
		success: function(data){
		
			$('#tbody').html("");
		
			$.each(data, function(index , item){
				
					result = `
							<tr>
								<td id="seq">${item.seq}</td>
								<td>
									<div class="card bg-transparent border-0">
										<img class='card-img-top' src="https://kr.object.ncloudstorage.com/testmavenstorage/storage/${item.imageFileName}" alt="${item.imageName}">
										<div class="card-body p-0 pt-1 m-0">
											<p class="card-title">${item.imageOriginalName}</p>
										</div>
									</div>
								</td>
								<td id="imageName"><h5>${item.imageName}</h5></td>
								<td id="imageContent">${item.imageContent}</td>
								<td><button class="btn btn-success editBtn">수정</button></td>
								<td><button class="btn btn-danger deleteBtn">삭제</button></td>
							</tr>
							`;
					$('#tbody').append(result);
				});
		},
		error:function(e){
			console.log(e);
			Swal.fire({
				title: '파일을 불러오는데 실패했습니다.',
				text: "관리자에게 문의해주세요.",
				icon: 'error',
			});
		}


	});
});