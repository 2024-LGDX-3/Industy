package kr.spring.repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;

import kr.spring.entity.Member;

public interface MemberRepository extends JpaRepository<Member, String>{
	// DataBase와 연동을 통해 값을 가져오거나 넣어주는 인터페이스
	

}
