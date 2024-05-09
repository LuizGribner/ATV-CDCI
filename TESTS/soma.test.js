const {sum, sub, div, mult} = require('../soma')


    
        test('Soma entre dois números', () => {
            expect(sum(2,3)).toBe(5)
        }) 

    
        test('Subtração entre dois números', () => {
            expect(sub(3,5)).toBe(-2)
        }) 
    
    
        test('Divisão entre dois números', () => {
            expect(div(10,2)).toBe(5)
        }) 
    
    
        test('Multiplicação entre dois números', () => {
            expect(mult(6,8)).toBe(48)
        }) 
    



