import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <section>
        <img src="https://www.transparentpng.com/thumb/question-mark/red-question-mark-with-white-person-illustration-transparent-free-Mchpt4.png" alt="" />
        <h1> Bonus Part</h1>
      </section>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Question #1
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <strong>Q. How react Works?</strong><br />
            React is the most popular front end javascript library to create reactive user interface. React uses virtual DOM instead of regular DOM and when a state is changed by user interaction, it check the virtual DOM where need to change. Then it just replace the part where changes need only. This way react create Single Page Application without reloading the whole page or website.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Question #2
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <strong>Q. Difference between props and state:</strong><br />
            Props is the read only object pass by one component to another component. Props are read only and immutable so it is not possible to modify the props from inside the component.

            Ont the other hand, State is the updatable data structure that can contain data about components and can change according to state changed or user interaction. State is the heart of react component that determines the behavior how the component will render.
            </div>
            </div>
        </div>
        </div>
        <footer>
            <p>Thanks for visit my website</p>
        </footer>
    </div>
  );
};

export default Footer;