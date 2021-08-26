
const Manager = require('./../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('Ron', 2, 'ron@gmail.com', 12345);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('checks if role equals to Manager', () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe('Manager');
})

test('check getName method', () => {
    const manager = new Manager('Ron', 2, 'ron@gmail.com', 12345);
    expect(manager.getName()).toBe('Ron');
});

test('check getId method', () => {
    const manager = new Manager('Ron', 2, 'ron@gmail.com', 12345);
    expect(manager.getId()).toBe(2);
});

test('check getEmail method', () => {
    const manager = new Manager('Ron', 2, 'ron@gmail.com', 12345);
    expect(manager.getEmail()).toBe('ron@gmail.com');
});

