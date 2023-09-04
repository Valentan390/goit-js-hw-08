import throttle from 'lodash.throttle';

const userFormEmail = document.querySelector('.feedback-form');

const userData = {};

const fillContactFormFields = () => {

    const userDataFromLS = JSON.parse(localStorage.getItem("feedback-form-state"));
   
    if (userDataFromLS === null) {
      return;
  }
    for (const key in userDataFromLS) {
        if (userDataFromLS.hasOwnProperty(key)) {
          userFormEmail.elements[key].value = userDataFromLS[key];
            
        }
    }
    
};

fillContactFormFields();

const onContactFormFieldElChange = event => {

  const { target: contactFormFieldEl } = event;

  const name = contactFormFieldEl.name;
  const value = contactFormFieldEl.value;
  
   userData[name] = value;

 localStorage.setItem("feedback-form-state", JSON.stringify(userData));

};

userFormEmail.addEventListener('input', throttle(onContactFormFieldElChange, 500));

const onContactFormElSubmit = event => {

     const {
        elements: { email, message }
    } = event.currentTarget;

    if (email.value === '' || message.value === '') {
        return alert('Please fill in all the fields!');
    };
    const user = { Email: email.value, message: message.value };
    
    console.log(user);

   event.preventDefault();
   event.target.reset();
    
   localStorage.removeItem("feedback-form-state");

};

userFormEmail.addEventListener('submit', onContactFormElSubmit)