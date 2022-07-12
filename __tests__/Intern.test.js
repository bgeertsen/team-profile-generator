const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Mark', 1, 'email', 'intern', 'UofO')

    
    expect(intern.name).toBe('Mark');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toBe("UofO")
    expect(intern.getName()).toBe('Mark');
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).toBe('email');
    expect(intern.getSchool()).toBe('UofO');
}) 