package board.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import board.service.BoardService;
import board.service.ObjectStorage;
import board.bean.UserImageDTO;

@Controller
@RequestMapping("board")
public class BoardController {
	@Autowired
	private BoardService boardService;
	@Autowired
	private List<UserImageDTO> list;
	@Autowired
	private ObjectStorage objectStorageService;
	private String bucketName ="testmavenstorage";
	
	@GetMapping(value="")
	public String index() {
		return  "/board/index";
	}
	@GetMapping(value="uploadForm")
	public String uploadForm() {
		return  "/board/fileUpload/uploadForm";
	}
	@GetMapping(value="uploadList")
	public String uploadList() {
		return  "/board/fileUpload/uploadList";
	}
	@PostMapping(value="upload", produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String upload(@ModelAttribute UserImageDTO userImageDTO, @RequestParam("img[]") List<MultipartFile> list, HttpSession session ) {
		
		//실제 폴더 위치
		String filePath = session.getServletContext().getRealPath("/WEB-INF/storage");
		System.out.println("실제폴더 = "+filePath);
		
		File file;
		String originalFileName;
		String result = "";
		String fileName;
		
		//파일명만 모아서 DB로 보내기
		List<UserImageDTO> userImageList = new ArrayList<UserImageDTO>();
		
		
		for(MultipartFile img : list) {
			originalFileName = img.getOriginalFilename();
			
			fileName = objectStorageService.uploadFile(bucketName, "storage/", img);
			
			file = new File(filePath, originalFileName);
			
			try {
				img.transferTo(file);
				
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			UserImageDTO dto = new UserImageDTO();
			System.out.println("DTO파일이름:"+userImageDTO.getImageName());
			dto.setImageName(userImageDTO.getImageName());//상품명
			dto.setImageContent(userImageDTO.getImageContent());//상품내용
			dto.setImageFileName(fileName);//UUID
			dto.setImageOriginalName(originalFileName);
			
			userImageList.add(dto);
			
		}//for
		
		boardService.upload(userImageList);
		
		
		return  "이미지 등록 완료";
	}
	
	@PostMapping(value="getUploadList", produces = "application/json;charset=UTF-8")
	@ResponseBody
	public List<UserImageDTO> getUploadList() {
		list = boardService.getUploadList();
		return  list;
	}
	
	@PostMapping(value="delete")
	@ResponseBody
	public void delete(@RequestParam String seq) {
		boardService.delete(seq);
		
	}
	
	@PostMapping(value="editComplete")
	@ResponseBody
	public void editComplete(@RequestParam String imageName, @RequestParam String seq, @RequestParam String imageContent, @RequestParam MultipartFile fileInput, HttpSession session) {
		boardService.editComplete(imageName,imageContent,seq,fileInput,session,bucketName);
		
	}
}
