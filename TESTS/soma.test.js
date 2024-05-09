const {sum} = require('../soma')

test('Soma entre dois números', ()=>{
    expect(sum(2,3)).toBe(5)
})