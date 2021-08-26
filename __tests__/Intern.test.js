const Intern = require('./../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('Mandy', 4, 'mandy@gmail.com', 'UofT');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('check getSchool method', () => {
    const intern = new Intern('Mandy', 4, 'mandy@gmail.com', 'UofT');
    expect(intern.getSchool()).toBe('UofT');
});

test('check getRole method', () => {
    const intern = new Intern('Mandy', 4, 'mandy@gmail.com', 'UofT');
    expect(intern.getRole()).toBe('Intern');
})