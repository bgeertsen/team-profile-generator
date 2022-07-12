const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Mark', 1, 'email', 'engineer');

    expect(employee.name).toBe('Mark');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toBe('Mark');
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe('email');
    expect(employee.getRole()).toBe('engineer');
})