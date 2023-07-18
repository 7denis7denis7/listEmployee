export const totalSum = (arr) => {
  return arr.reduce((acc, employee) => acc + employee.employee_salary, 0);
};
