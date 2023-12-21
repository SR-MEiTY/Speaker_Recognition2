# Speaker_Recognition
Speaker Recognition System with GMM-HMM and WAVLM models.

Instructions to run the web app using Flask Server.

1. Install Anaconda or mini conda.
2. Create a Virtual Environment in command prompt using 'conda create --name flaskenv python=3.8'
3. Activate the environment using 'conda activate flaskenv'
4. Install the dependencies using pip install '<package_name>' or 'conda install <package_name>'
    1. flask
    2. flask_mysqldb
    3. librosa
    4. pydub
    5. ffmpeg
    6. numpy
5. Install dependencies from requirements.txt and any other dependencies shown while running the backend.py
7. Download the trained model from following link and put it in the root folder:
   https://drive.google.com/file/d/109gOlv0FqV43eE7dr_1fpVIEFxtIqPy3/view?usp=drive_link
8. Open the web app folder from the command prompt/terminal, activate the a environment, if not activated and run the server using 'python backend.py'
9. This will run the web app.
10. Open the webapp in the web browser using IP address and Port Number displayed on the terminal. (e.g. https://192.168.1.150:8888)
11. Now you will be able to see a web application in the web browser and you can do registration and verification of the speaker.

