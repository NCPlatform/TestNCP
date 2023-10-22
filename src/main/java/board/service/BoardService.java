package board.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.web.multipart.MultipartFile;

import board.bean.UserImageDTO;

public interface BoardService {
	public void upload(List<UserImageDTO> userImageList);

	public List<UserImageDTO> getUploadList();

	public void delete(String seqStr);

	public void editComplete(String imageName, String imageContent, String seqStr, MultipartFile fileInputFile,
			HttpSession session, String bucketName);
}
