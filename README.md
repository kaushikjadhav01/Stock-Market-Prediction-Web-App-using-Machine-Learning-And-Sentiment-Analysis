# Stock-Market-Prediction-Web-App-using-Machine-Learning
**Stock Market Prediction** Web App based on **Machine Learning** and **Sentiment Analysis** of Tweets **(API keys included in code)**. The front end of the Web App is based on **Flask** and **Wordpress**. The App forecasts stock prices of the next seven days for any given stock under **NASDAQ** or **NSE** as input by the user. Predictions are made using three algorithms: **ARIMA, LSTM, Linear Regression**. The Web App combines the predicted prices of the next seven days with the **sentiment analysis of tweets** to give recommendation whether the price is going to rise or fall

# Note
### Wordpress file has been moved from the repository due to exceeding quota of Github LFS. Download it now from <a href="https://drive.google.com/file/d/1q1kdNBQyQTIIq9OuMuYBUgD3fni-oJQp/view?usp=sharing">here</a>

# Screenshots
<img src="https://github.com/kaushikjadhav01/Stock-Market-Prediction-Web-App-using-Machine-Learning-And-Sentiment-Analysis/blob/master/screenshots/banner.png">
<img src="https://github.com/kaushikjadhav01/Stock-Market-Prediction-Web-App-using-Machine-Learning-And-Sentiment-Analysis/blob/master/screenshots/banner2.PNG">
<img src="https://github.com/kaushikjadhav01/Stock-Market-Prediction-Web-App-using-Machine-Learning-And-Sentiment-Analysis/blob/master/screenshots/11-resuts.png" width="750">
<img src="https://github.com/kaushikjadhav01/Stock-Market-Prediction-Web-App-using-Machine-Learning-And-Sentiment-Analysis/blob/master/screenshots/wp-admin.PNG" width="750">
Find more screenshots in the <b>screenshots folder</b> Or <a href="https://github.com/kaushikjadhav01/Stock-Market-Prediction-Web-App-using-Machine-Learning-And-Sentiment-Analysis/tree/master/screenshots">click here</a>

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
<b>Python 3.8.5 is required for the python packages to install correctly</b><br>
<ol>
<li>Clone the repo. Download and install <b>XAMPP server</b> from https://www.apachefriends.org/download.html and start <b>Apache</b> and <b>MySql</b> servers</li>
<li>Open <b>phpmyadmin</b> by visiting http://localhost/phpmyadmin/ and go to User Accounts -> Add a User, give username and password as <b>admin</b> and click on <b>Check All</b> next to Global Privileges and hit Go</li>
<li>Next, create a new database named <b>wordpress</b></li>
<li>Select the wordpress database and click on <b>Import</b> and select the <b>wordpress.sql</b> file from the repo.</li> 
<li>Download my wordpress website zip file from <a href="https://drive.google.com/file/d/1q1kdNBQyQTIIq9OuMuYBUgD3fni-oJQp/view?usp=sharing">here</a>
<li>Extract the above zip file in <b>xampp/htdocs</b> folder</li>
<li>Go to command prompt, change directory to directory of repository and type <b>pip install -r requirements.txt</b></li>
<li>To run app, type in command prompt, <b>python main.py</b></li>
<li>Open your web browser and go to <b>http://localhost/www</b> and click on the wordpress folders to access the web app</li>
<li>Wordpress Admin Panel is available at: <b>http://localhost/www/wordpress-5.6.2/wordpress/wp-admin</b></li>
</ol>
<br>
<b> Video of setup and demo is available <a href="https://drive.google.com/file/d/1iP5RqdlREx_YbP-5RZqo7fB1rElQ2igi/view?usp=sharing">here</a></b>
<br>
<h2> Admin Credentails </h2><br>
<b>Username:</b> admin
<br>
<b>Email:</b> stockmarketpred@gmail.com
<br>
<b>Password:</b> Samplepass@123

# Authors
## Kaushik Jadhav
<ul>
<li>Github:https://github.com/kaushikjadhav01</li>
<li>Medium:https://medium.com/@kaushikjadhav01</li>
<li>LinkedIn:https://www.linkedin.com/in/kaushikjadhav01/</li>
<li>Portfolio:http://kaushikjadhav01.github.io/</li>
</ul>
