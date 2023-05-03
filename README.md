# Kroma_webapp
#### Page Link: <http://kroma.pythonanywhere.com/>
#### Description:
Kroma_webapp is a web application created with Flask, holistically it is a web page built with Html, Css, Javascript and Python.
The main functions are to maintain a virtual record on the internet that shows the entire world the artistic work of the Chilean
street artist nicknamed "Kroma" and also to allow visitors to the page direct contact with the artist in order to respond any query
or comment that you want to express towards him.

It begins by creating the web page templates with bootstrap, Html and customizing with Css, templates that contain the photographic
record of the paintings painted by "Kroma" and various other important information expressed in words. The first html file is the cover
of the web page, in it a small introduction is made to all the work that the artist did, showing images of his works, personalized images
with Css so that they interact with the user, showing a zoom effect in the image when the pointer is over it, there are also links in
icons of social networks linked to the following pages. The second template is the portfolio, here you will find the largest photographic
record of the works made by the artist and a small review at the top of the body of the page where the painting technique used by the
artist is explained, stencil in this case and other details, each image shown corresponds to a artwork, below this is its respective
description and name, when the cursor is positioned over an image, it interacts with the user, marking greater relevance, making the
image stand out with respect  to the others that have not been selected (this is achieved through Css), when you click on an image it
will be enlarged and displayed in a photo gallery where you can click on the respective forward and backward arrows to be able to better
appreciate each work one by one, for this i used a Javascript library found on github.

The third page shows more information about the artist, here is the logo created in photoshop, plus a small review where the artist's
history is explained a bit, how he came to do what he does and the reasons why he does it, followed by a sample of images where shows
the method and working process used by the artist can be appreciated, such as the scalpel cuts of the stencil templates, experiments
and etc. The fourth and last page is the contact page, which contains a contact form that requires entering some information to be completed
such as: name, lastname, email and message. In order to verify that the information that you are trying to send is correct, a validation
function is created using Javascript, what Javascript does is put conditions on the information that is being consulted to the user or sender,
and mark a response in the form depending on of the information that is being delivered, such as: in the name field where the information that
must be entered in that form field must contain only letters to be valid, otherwise it will be invalid, notifying the user that the information
that was placed is valid or invalid by modifying the Html and Css files so that they change the color of the border of the form to green if it
is valid and to red as a warning sign if it is invalid, also a help text will appear in red below the field of form that indicates what
error has been made, such as having entered numbers or signs in the name field, which will make the text say that the name field and “Name must contain only letters”.

All fields must be completed, therefore, the first validation that is made is that the form fields cannot be empty so that the submit
can be validated, if at the time of pressing the submit button there is an empty field, the form will not be submitted and it will put
the border of the form that has the error to color red and a text in color red will appear under the field that will say that the “field
cannot be empty”. The first and last name fields, apart from not being able to be empty, must only contain letters, using in Javascript a
group of regular expressions as conditions that only contain uppercase and lowercase letters to validate the field, showing the border of
the form field in color green, if any type of sign or number is entered in this field, it will make it invalid showing the border of the form
field in color red and a message will appear below it saying "name must have only letters" or "lastname must have only letters ". The "email"
field of the form apart from the fact that it cannot be empty, it uses another type of regular expressions as a condition for the email to be
valid, it must contain at least an "@" sign and a ". (dot)”, If the email that is entered does not have these conditions, the form field will
be shown as invalid and the border of the form field will change to color red followed by a text of the same color that will say that "Must be
a valid email address". The message field will be valid only if it is not empty since the message can contain numbers, signs, etc. In your
writing, if this field is empty it will be shown as invalid by changing the color of the border of the form field to red and below it will
show a message saying “Message must not be empty”. Finally, if all the fields of the form are duly validated, the user will be allowed to send
said submit, when that happens the user will be redirected to a fifth html page called success.html, which contains the thanks for the message
sent plus an invitation to review and follow me on social networks, locating icons with the logos of each social network, icons which when
hovering over an icon, the icon will enlarge and when clicking on the icon the user will be redirected to the “kroma” page on the social network you just selected.

Basically what Javascript does is to take the data that was entered into each field of the form as variables, which are used to be able to pass
them through the functions created in Javascript, such as verifying that there is no field that is empty, it is also added an "eventlistener",
which, as its name says, is capable of listening or perceiving when a submit event is made and a preventdefault to be able to prevent a default
behavior to the submit event, then what Javascript does is listen to the event of submit, when the submit event happens the functions created in
javascript start working with the data entered in the form fields, validating or invalidating the information regarding the conditions specified
in each function, if the functions in Javascript validate all the information that was entered the "preventdefault" function will not turn on, but
if there is any invalid data the preventdefault function will do its I work preventing the submit event from happening by default.

At the time of making the templates I realized that they all share certain characteristics, such as the navigation bar that contains the logo and
the links that lead to the other pages of the application and the footer where the logo and links are also located, but here I also added the icons
of the social networks that are linked to the respective social network pages such as instagram, facebook, github, etc. It was going to be very
tedious to modify all the html files one by one when you
wanted to modify something in the navigation bar or in the footer, so using Flask it allows me to generate a layout template created with Bootstrap,
Html and Css that contains the navigation bar and footer, which through Python and Jinja allow me to be able to extend this template to other html files,
allowing to edit only the body of each html page such as portfolio.html or home.html, leaving the navigation bar and the footer only in the layout.html
template, this allows me to make the changes made to the navigation bar or the footer of the page in the layout.html template automatically reflected in
all the html templates in which I have extended the layout template with Jinja, automating and facilitating the management of the web page.

Another function of this web application is to send an email with the information entered in the form to the personal email of, in this case, the artist,
this is achieved through python and flaskmail, flaskmail is a function existing in flask that allows the developer to handle the response and communication
of the web application with any email that is used to communicate. Basically what is done here is that through flask the data that was entered in the form
as variables in Python is extracted, they are ordered and then added to the function created with Python in Flask that will make Flaskmail send an email to
the Artist's email with the information that was entered in the form. I found this function super useful for the type of page I am creating given that as it
is an artist page which requires contacting a future collaborator or buyer in order to continue growing, it greatly facilitates this point since the page It
can be seen by anyone in the world, allowing the user to contact the artist directly from anywhere in the world.

