const time = require('./time');

test('1235 milliseconds equals to 1 Seconds',()=>{
    expect(time(1235)).toBe("1 Seconds");
});

test('6000 milliseconds equals to 6 Seconds',()=>{
    expect(time(6000)).toBe("6 Seconds");
});

test('60000 milliseconds equals to 1 Minute 0 Seconds',()=>{
    expect(time(60000)).toBe("1 Minute 0 Seconds");
});

test('1600000 milliseconds equals to 26 Minutes 40 Seconds',()=>{
    expect(time(1600000)).toBe("26 Minutes 40 Seconds");
});

test('13600000 milliseconds equals to 3 Hours 46 Minutes 40 Seconds',()=>{
    expect(time(13600000)).toBe("3 Hours 46 Minutes 40 Seconds");
});

test('18812344 milliseconds equals to 5 Hours 13 Minutes 32 Seconds',()=>{
    expect(time(18812344)).toBe("5 Hours 13 Minutes 32 Seconds");
});
