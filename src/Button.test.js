import { mount } from 'enzyme';
import App from './App';

describe("Button Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('renders the button\'s text', () => { 
    expect(wrapper.find('.button').text()).toBe('Click me');
  });

  test('renders the button containing elements', () => {
    expect(wrapper.contains(
        <button data-testid='button' className='button'>
            Click me
        </button>
    )).toEqual(true);
  })
});

  
  