package in.adarsh.service;

import org.springframework.stereotype.Service;

import in.adarsh.dto.EmployeeDto;
import in.adarsh.entity.Employee;
import in.adarsh.mapper.EmployeeMapper;
import in.adarsh.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeServices{
	private EmployeeRepository employeeRepository;
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeedto) {
 
		Employee employee = EmployeeMapper.mapToEmployee(employeedto);
		Employee savedEmployee = employeeRepository.save(employee);
		
		
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}
	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		 
		return null;
	}

}
