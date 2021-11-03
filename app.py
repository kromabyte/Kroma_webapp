from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

app.config['MAIL_SERVER'] = 'SMTP.Office365.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'form.kromawebapp@outlook.com'
app.config['MAIL_PASSWORD'] = 'Gymkhana3'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

mail = Mail(app)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/portfolio')
def portfolio():
    return render_template("portfolio.html")

@app.route('/aboutme')
def aboutme():
    return render_template("aboutme.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/success', methods=['GET','POST'])
def success():
    if request.method == "POST":
        name = request.form['Name']
        lastname = request.form['Lastname']
        email = request.form['Email']
        msg = request.form['Message']

        message = Message(subject=f"Mail From {name}{lastname}" ,sender="form.kromawebapp@outlook.com", recipients=["kromaa@live.cl"])
        message.body =f"Name: {name}{lastname}\nEmail: {email}\nMessage: {msg}"
        mail.send(message)
        success = "Message sent"
        
        return render_template("success.html", success=success)

    
if __name__ == "__main__":
    app.run(debug=True)