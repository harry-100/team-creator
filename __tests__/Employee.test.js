
const Employee = require('../lib/Employee');

test('creates a Employee object', () => {
    const emp = new Employee('Andy', 1, 'andy@gmail.com');
    expect(emp.name).toEqual(expect.any(String));
    expect(emp.id).toEqual(expect.any(Number));
    expect(emp.email).toEqual(expect.any(String));
})

test('checks if role is equal to employee', () => {
    const emp = new Employee();
    expect(emp.getRole()).toBe('Employee');
});

test('checks if getName return correct name', () => {
    const emp = new Employee('Ron', 12, 'ron@gmail.com');
    expect(emp.getName()).toBe('Ron');
});

test('checks if getId return correct id', () => {
    const emp = new Employee('Ron', 12, 'ron@gmail.com');
    expect(emp.getId()).toBe(12);
});

test('checks if getEmail return correct email', () => {
    const emp = new Employee('Ron', 12, 'ron@gmail.com');
    expect(emp.getEmail()).toBe('ron@gmail.com');
});