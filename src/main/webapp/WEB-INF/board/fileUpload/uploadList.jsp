<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="../header.jsp"></jsp:include>
<title>BOARD LIST</title>
</head>
<body>
<jsp:include page="../nav.jsp"></jsp:include>
	<h2 class="pt-5">파일 리스트</h2>
	<table class="table table-hover align-middle text-center" >
		<thead class="table-dark fw-bold">
			<tr>
				<td align="center" width="60">번호</td>
				<td align="center" width="200">이미지</td>
				<td align="center" width="200">상품명</td>
				<td align="center" width="200">내용</td>
				<td align="center" width="60">수정</td>
				<td align="center" width="60">삭제</td>
			</tr>
		</thead>
		<tbody id="tbody">
			
		</tbody>
	</table>

<jsp:include page="../footer.jsp"></jsp:include>
<script src="/TestMaven/asset/js/list.js"></script>
<script src="/TestMaven/asset/js/deleteBtn.js"></script>
<script src="/TestMaven/asset/js/editBtn.js"></script>
</body>
</html>