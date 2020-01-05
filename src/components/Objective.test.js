 import React from 'react'
 import { shallow } from 'enzyme'
 import Objective from './Objective'

 describe('Objective', () => {
     const objective = {
         description: 'First objective',
         label: 'Home',
         type: 'personal',
         score: 0.1,
     }

     it('displays the description', () => {
        const wrapper = shallow(<Objective objective={objective} />)
        expect(wrapper.find('h1').text()).toEqual('First objective')
     });
 })