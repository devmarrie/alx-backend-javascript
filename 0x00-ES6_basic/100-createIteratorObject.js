export default function createIteratorObject(report) {
    let currentDeptIndex = 0;
    let currentEmployeeIndex = 0;
  
    const departments = Object.values(report.allEmployees);
  
    return {
      next() {
        if (currentDeptIndex >= departments.length) {
          return { done: true };
        }
  
        const currentDepartment = departments[currentDeptIndex];
        const currentEmployee = currentDepartment[currentEmployeeIndex];
  
        if (currentEmployeeIndex >= currentDepartment.length - 1) {
          currentDeptIndex++;
          currentEmployeeIndex = 0;
        } else {
          currentEmployeeIndex++;
        }
  
        return { value: currentEmployee, done: false };
      }
    };
  }