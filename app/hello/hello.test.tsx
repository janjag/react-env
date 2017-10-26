import * as React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';

import { name } from '../../test/dummies/test.dummy';

import Hello from './hello';

const wrapper = mount(<Hello name={name}/>);

describe('Hello', () => {
  
      describe('render', () => {
  
          it('renders the text', () => {
              const textElem = wrapper.find('h1');
              
              assert.equal(textElem.text(), 'Hello, Test!');
          });
      });
  });
