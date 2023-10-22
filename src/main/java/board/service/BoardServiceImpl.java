package board.service;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import board.bean.UserImageDTO;
import board.dao.BoardDAO;
import board.service.ObjectStorage;

@Service
@Transactional
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardDAO boardDAO;
	@Autowired
	private ObjectStorage objectStorageService;
	
	private String bucketName ="testmavenstorage";
	
	@Override
	public void upload(List<UserImageDTO> userImageList) {
		boardDAO.upload(userImageList);
		
	}

	@Override
	public List<UserImageDTO> getUploadList() {
		return boardDAO.getUploadList();
	}

	@Override
	public void delete(String seqStr) {
		int seq = Integer.parseInt(seqStr);
		
		//삭제
		String imageFileName="storage/";
		imageFileName+=boardDAO.getImageFileName(seq);
		objectStorageService.deleteFile(bucketName, imageFileName);
		boardDAO.delete(seq);
	}

	@Override
	public void editComplete(String imageName, String imageContent, String seqStr, MultipartFile fileInputFile,
			HttpSession session, String bucketName) {
		
		int seq = Integer.parseInt(seqStr);
		
		String filePath = session.getServletContext().getRealPath("/WEB-INF/storage");//실제폴더위치
		File file;
		String originalFileName;
		String result = "";
		String fileName;
		
		originalFileName = fileInputFile.getOriginalFilename();
		
		String imageFileName="storage/";
		imageFileName+=boardDAO.getImageFileName(seq);
		objectStorageService.deleteFile(bucketName, imageFileName);
		
		fileName = objectStorageService.uploadFile(bucketName, "storage/", fileInputFile);
		
		file = new File(filePath, originalFileName);
		
		try {
			fileInputFile.transferTo(file);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("imageName", imageName);
		map.put("imageContent", imageContent);
		map.put("seq", seq);
		map.put("imageFileName", fileName);
		map.put("imageOriginalName", originalFileName);
		
		boardDAO.editComplete(map);
		
	}
	
}
