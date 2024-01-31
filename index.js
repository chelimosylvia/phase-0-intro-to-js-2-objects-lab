// Write your solution in this file!
let employee = {
    name: 'Rose',
    streetAddress: '21300 nrb',
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log('Original Employee:', employee);
  
  const updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, 'age', 30);
  console.log('Updated Employee (non-destructive):', updatedEmployee1);
  
  console.log('Original Employee (after non-destructive update):', employee);
  
  const updatedEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 30);
  console.log('Updated Employee (destructive):', updatedEmployee2);
  
  console.log('Original Employee (after destructive update):', employee);
  
  const employeeWithoutStreetAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
  console.log('Employee without Street Address (non-destructive):', employeeWithoutStreetAddress);
  
  console.log('Original Employee (after non-destructive deletion):', employee);
  
  const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
  console.log('Employee without Name (destructive):', destructivelyDeletedEmployee);
  
  console.log('Original Employee (after destructive deletion):', employee)  