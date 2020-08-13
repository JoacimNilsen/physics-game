import {particle} from "../particle"

describe("test particle", () => {
 test('should return object with given arguments' , () => {
           const
            position= [5, 10],
            velocity=[10, 5],
            accel=[1, 2],
            mass= 1;
          const p = new particle(position, velocity, accel, mass)
          
          expect(p.position).toBe(position)
          expect(p.velocity).toBe(velocity)
          expect(p.accel).toBe(accel)
          expect(p.mass).toBe(mass)
 }) 
})