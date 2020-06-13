# Stock-Market-Prediction-Web-App-using-Machine-Learning
**Stock Market Prediction** Web App based on **Machine Learning** and **Sentiment Analysis** of Tweets **(API keys included in code)**. The front end of the Web App is based on **Flask** and **Wordpress**. The App forecasts stock prices of the next seven days for any given stock under **NASDAQ** or **NSE** as input by the user. Predictions are made using three algorithms: **ARIMA, LSTM, Linear Regression**. The Web App combines the predicted prices of the next seven days with the **sentiment analysis of tweets** to give recommendation whether the price is going to rise or fall

# Screenshots
<img src="https://github.com/kaushikjadhav01/Stock-Market-Prediction-Web-App-using-Machine-Learning/blob/master/screenshots/banner.PNG">
Find how the project looks in <b>screenshots folder</b> Or <a href="https://github.com/kaushikjadhav01/Stock-Market-Prediction-Web-App-using-Machine-Learning/tree/master/screenshots">click here</a>

# File and Directory Structure
<pre>
screenshots - Screenshots of Web App
static - static files of flask app: css, images, js, etc.
templates - html files
Tweets.py - structure of Tweets for sentiment Analysis
constants.py - config file for app with Twitter API keys and other details
main.py - main machine learning module
</pre>

# Technologies Used
<ul>
<a href="https://wordpress.org/"><li>Wordpress</a></li>
<a href="https://flask.palletsprojects.com/"><li>Flask</a></li>
<a href="https://www.tensorflow.org/"><li>Tensorflow</a></li>
<a href="https://keras.io/"><li>Keras</a></li>
<a href="https://pypi.org/project/yfinance/"><li>Yahoo Finance</a></li>
<a href="https://www.alphavantage.co/"><li>Alphavantage</a></li>
<a href="https://scikit-learn.org/"><li>Scikit-Learn</a></li>
<a href="https://www.tweepy.org/"><li>Tweepy</a></li>
<a href="https://www.python.org/"><li>Python</a></li>
<a href="https://www.php.net/"><li>PHP</a></li>
<a href="https://www.w3.org/Style/CSS/Overview.en.html"><li>CSS</a></li>
<a href="https://www.w3.org/TR/html52/"><li>HTML</a></li>
<a href="https://www.javascript.com/"><li>Javascript</a></li>
</ul>

# How to Install and Use
<ol>
<li>Download and install <b>Wordpress</b> from https://wordpress.org/download/</li>
<li>Once wordpress is installed, install <b>All In One WP Migration Plugin</b> on Wordpress</li>
<li>Once installed, go to the plugin and import the file "localhost-wordpress-20200313-074610-uxz1wx (1).wpress" provided in my repo</li>
<li>Go to command prompt, change directory to directory of repository and type <b>pip install -r requirements.txt</b></li>
<li>To run app, type in command prompt, <b>python main.py</b></li>
<li>Open your web browser and go to http://localhost/wordpress to access the web app</li>
</ol>
