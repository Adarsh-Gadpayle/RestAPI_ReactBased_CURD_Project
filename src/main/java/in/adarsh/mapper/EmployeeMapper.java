package in.adarsh.mapper;

import in.adarsh.dto.EmployeeDto;
import in.adarsh.entity.Employee;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class EmployeeMapper {

	public static EmployeeDto mapToEmployeeDto(Employee employee) {
		return new EmployeeDto(
				employee.getId(),
				employee.getFirstName(),
				employee.getLastName(),
				employee.getEmail()
	
				);
		
	}
	
	public static Employee mapToEmployee(EmployeeDto employeedto) {
		return new Employee(
				employeedto.getId(),
				employeedto.getFirstName(),
				employeedto.getLastName(),
				employeedto.getEmail()

				);
	}

	public EmployeeMapper() {
		super();
	}
	
	
	
}
