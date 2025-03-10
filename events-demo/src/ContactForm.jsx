//     2. Create a ContactForm.jsx file that has a component
//        that returns a <form /> element

//     3. Add the following inputs to the form:
//        - A text input for "first name"
//          Give this a placeholder and name property
//        - A text input for "last name"
//          Give this a placeholder and name property
//        - A number input for "age"
//          Give this a placeholder and name property
//        - A submit button with type submit

//     3. Make it so that on form SUBMISSION, you prevent
//        the default form reload behaviour and then you
//        log out the first name, last name and age submitted

//     4. Export this function and replace <App /> in the
//        main.jsx file with this imported ContactForm component

//     5. Check in your Browser to see if it works as expected

//     HINT1* How do you prevent event defaults?
//     HINT2* You have access to the form element in the event
//     HINT3* Check out the FormData Web API on MDN

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData
    const fd = new FormData(e.target);
    // console.log(fd);

    // METHOD 1
    // for (const entry of fd.entries()) {
    //   console.log(entry);
    // }

    // METHOD 2
    // console.log([...fd.entries()]);

    // METHOD 3
    console.table(Object.fromEntries(fd));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="lastName" placeholder="Last Name" />
      <input type="number" name="age" placeholder="10" />
      <button type="submit">Submit!</button>
    </form>
  );
}

export default ContactForm;
