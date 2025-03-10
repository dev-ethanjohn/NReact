// 2. Create an Input.jsx file that has a component
//    that returns an <input id="ex1" /> element

// 3. Make it so that when you type in the input, you
//    log out: [INPUT id=ex1]: input_value
//    where input_value is the actual text inside
//    the input box (on change/input)

function Input() {
  function handleInput(e) {
    const inputValue = e.target.value;
    const tagName = e.target.tagName;
    const id = e.target.getAttribute("id");
    const log = `[${tagName} id=${id}]: ${inputValue}`;

    console.log(log);
  }

  return <input type="text" id="username" onInput={handleInput} />;
}

export default Input;
