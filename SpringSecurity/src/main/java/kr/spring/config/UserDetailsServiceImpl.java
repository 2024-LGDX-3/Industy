package kr.spring.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.spring.repository.MemberRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	// Controller과 내가 만든 JPA 사이를 연결해주는 Spring secure
	
	@Autowired
	private MemberRepository memberRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
		//Spring Security 로그인 기능
		// 아이디랑 일치하는 회원이 있는지 검색 (내부적으로 알아서 진행함)
		// 로그인에 성공하면 username에는 성공한 사람의 id가 담겨있음
		
		Member member = memberRepository.findById(username).get();
		
		if(member == null) {
			// 로그인 실패
			throw new UsernameNotFoundException(username + "없음");
		}
		
	
}
}