from flask import Flask, render_template, request


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index2.html")

@app.route("/user")
def user():
    return {
        "name": "syeed",
        "country": "Bangladesh",
        "job": "Soft. Engineer"
    }


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)
