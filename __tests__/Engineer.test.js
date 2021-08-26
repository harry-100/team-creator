
const Engineer = require('./../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('Andy', 32, 'andy@gmail.com', 'andy-100');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('check getGithub method', () => {
    const engineer = new Engineer('Andy', 32, 'andy@gmail.com', 'andy-100');
    expect(engineer.getGithub()).toBe('andy-100');
});

test('check getRole method', () => {
    const engineer = new Engineer('Andy', 32, 'andy@gmail.com', 'andy-100');
    expect(engineer.getRole()).toBe('Engineer');
})