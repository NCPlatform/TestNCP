<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="../header.jsp"></jsp:include>
<title>BOARD FORM</title>
</head>
<body>
<jsp:include page="../nav.jsp"></jsp:include>

<form id="uploadForm">
	<h2 class="pt-5">파일 업로드</h2>
	<div class="mb-3">
		<label for="imageName" class="form-label">상품명</label>
		<input type="text" class="form-control" id="imageName" name="imageName" placeholder="Product Name">
	</div>
	<div class="mb-3">
		<label for="imageContent" class="form-label">상품 설명</label>
		<textarea class="form-control" id="imageContent" name="imageContent" rows="10"></textarea>
	</div>
	<div id="showImgList" style="height:120px">
	
	</div>
	<div class="mb-3 d-flex justify-content-between">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" id="camera" width="30" height="30" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
				<path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
				<path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
			</svg>
	 		<input id="img" type="file" name="img[]" multiple="multiple" style="visibility: hidden;">
		</div>
		<div>
			<button type="button" id="uploadBtn" class="btn">
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
					<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
					<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
				</svg>
			</button>
			<button type="reset" class="btn">
				<svg xmlns="http://www.w3.org/2000/svg" id="reset" width="30" height="30" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
					<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
					<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
				</svg>
			</button>
		</div>
	</div>
</form>

<jsp:include page="../footer.jsp"></jsp:include>
<script src="/TestMaven/asset/js/imgCheck.js"></script>
<script src="/TestMaven/asset/js/upload.js"></script>
</body>
</html>