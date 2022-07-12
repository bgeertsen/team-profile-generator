const Manager = require('../lib/Manager.js')

test('creates a Manager object', () => {
    const manager = new Manager('Mark', 1, 'email', 'manager', 202)

    expect(manager.name).toBe('Mark');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getName()).toBe('Mark');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('email');
}) 