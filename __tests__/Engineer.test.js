const Engineer = require('../lib/Engineer')

test('creates and engineer object', () => {
    const engineer = new Engineer('Mark', 1, 'email', 'engineer', 'gitmark')

    expect(engineer.name).toBe('Mark');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toBe('gitmark');
    expect(engineer.getGithub()).toBe('gitmark');
    expect(engineer.getRole()).toBe('engineer');
})