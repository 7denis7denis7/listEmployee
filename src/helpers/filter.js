export const searchByName = (searchValue, data) => {
  if (searchValue) {
    const lowerCaseSearchValue = searchValue.toLowerCase();

    return data.filter((employee) =>
      employee.employee_name.toLowerCase().includes(lowerCaseSearchValue)
    );
  }
};
