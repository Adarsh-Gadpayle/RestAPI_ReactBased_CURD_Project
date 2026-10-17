package in.adarsh.service;

import org.springframework.stereotype.Service;

import in.adarsh.dto.EmployeeDto;

public interface EmployeeServices {

	EmployeeDto createEmployee(EmployeeDto employeedto);
	EmployeeDto getEmployeeById(Long employeeId);
	
	
}
