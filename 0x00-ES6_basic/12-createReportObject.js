export default function createReportObject(employeesList) {
  const departments = {};
  for (const [departmentName, employees] of Object.entries(employeesList)) {
    departments[departmentName] = [...employees];
  }

  return {
    allEmployees: departments,
    getNumberOfDepartments() {
      return Object.keys(departments).length;
    },
  };
}
