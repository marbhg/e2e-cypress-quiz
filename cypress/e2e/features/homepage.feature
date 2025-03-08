Feature: Visit home page 

   As user visit I want to visit Homegage


    Scenario: Visit 
        Given the user visits homepage
        When the user select answer "Text direction"
        And the user select answer "Background"
        And the user select answer "Img"
        And the user select answer "Divider"
        And the user select answer "Form"
        And the user select answer "Meta"
        And the user select answer "Link"
        And the user select answer "Frame"
        And the user click on submit answers
        Then user see score "You got 4 correct out of 10, or 40%."
        And the user see score letter "D-"





