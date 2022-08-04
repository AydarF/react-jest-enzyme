import { shallow, mount } from 'enzyme';
import App from './App';

describe("Counter Testing", () => {
  let wrapper;
    // beforeEach function will run before any test
  beforeEach(() => {
    // Mount function creates an instance of your component
    // It will render the inner part of the component, i.e. its children
    wrapper = mount(<App />);
  });

  test('renders the title of counter', () => {  
    // You cag grab any element from tag name, class name, attribute, etc  
    expect(wrapper.find('h1').text()).toContain("This is a counter app");
  });

  test('render a button with text of `increment`', () => {
    expect(wrapper.find('.increment-btn').text()).toBe('Increment');
  });

  test('render the initial value of state in a div', () => {
    expect(wrapper.find('.counter-value').text()).toBe("0");
  });
  
  test('render the click event of increment button and increment value', () => {
    wrapper.find('.increment-btn').simulate('click');
    expect(wrapper.find('.counter-value').text()).toBe("1");
  });

  test('render the click event of decrement button and decrement value', () => {
    wrapper.find('.increment-btn').simulate('click');
    expect(wrapper.find('.counter-value').text()).toBe("1");
    wrapper.find('.decrement-btn').simulate('click');
    expect(wrapper.find('.counter-value').text()).toBe("0");
  });

  test('render the click event of reset button and reset value to the initial state', () => {
    wrapper.find('.reset-btn').simulate('click');
    expect(wrapper.find('.counter-value').text()).toBe("0");
  });
});
