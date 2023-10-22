package board.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import board.bean.UserImageDTO;

@Mapper
public interface BoardDAO {
	void upload(List<UserImageDTO> userImageList);

	List<UserImageDTO> getUploadList();

	void delete(int seq);

	void editComplete(Map<String, Object> map);

	String getImageFileName(int seq);
}
