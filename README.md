
____________
**PREREQUISITES:**

OS version: Ubuntu 20.04 LTS and higher

Python: 3.8 and higher

Pip version: 2.2 and higher

------------------------------------------

**1. DEPLOY THE SYSTEM GUI**

If you want to deploy the prebuilt Speaker Recognition System, follow the following steps:
Speaker Recognition System deployment and testing for WavlM Model

Instructions to run the web app using Flask Server.

 1.Install Virtualenv 
 
 for windows:pip install virtualenv virtualenvwrapper-win

 for Linux:pip install virtualenv virtaulwrapper

 2.Create mkvirtualenv flaskenv by default it will create environment else you can use the following line
 
 3.Activate the environment of pertrained model using following source env/bin/activate

 4. Install dependencies from requirements.txt and any other dependencies shown while running the backend.py using pip install -r requirements.txt
   
 5. Download the trained model from link provided and put it in the root folder, use  the following link to download https://drive.google.com/file/d/109gOlv0FqV43eE7dr_1fpVIEFxtIqPy3/view?usp=drive_link.
   
 6. Open the web app folder from the command prompt/terminal, activate the a environment, if not activated and run the server using 'python backend.py'
   
 7. sudo apt-get install libsndfile1
   
 8. This will run the web app.
   
 9. Open the webapp in the web browser using IP address and Port Number displayed on the terminal. (e.g. https://localhost:port_number/)
   
 10. Now you will be able to see a web application in the web browser and you can do registration and verification of the speaker.

Demo screenshots for the enrollment and verification for WAVlm Model:

Step1: Entering the IP address  https://203.129.246.105:6060/ the below home page will get browsered Page
![1](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/34df3788-21c1-4c3a-a601-6899915d5fa8)
Step2:Click on the Speaker verification Demo on the Option
![2](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/22cc42fa-e163-48f7-b54f-04edf5795f2c)
Step3: Enrollment and verification Screen will Redirected
![3](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/3272fb9f-3958-4676-8033-84db2c45a59f)
Step 4:After clicking into enrollment Need to enroll yourself with Name , Surname and Gender and Age then start recording 
![4](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/f59dbd33-c3d9-4fe8-b8da-0951a4bee527)
Step 5:After enrollment, the enrollment is done in English and testing can be done with multiple languages
 ![5](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/67cf460d-7fb0-4f51-b60e-3c2b91a239d1)
 Step6: After Recording for the enrolled voice is completed it will pop up a window like enrollment under progress.
![6](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/f05c9b28-d355-484c-a3ed-9e2b16461980)
 Step7:Enrolled speaker Information Will be saved in the form of SSF32
 ![7](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/743d0a0e-ecd6-4292-9cdd-83207a42b7e7)
 Step8: Go back to the home page and click on verification for the enrolled speaker or the different speaker for the verification process.
 ![9](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/600ab272-1a6c-4a58-9cd5-1cac9ff19aff)
Step 9: Need to provide the Enrolled speaker ID and start the recording 
![10](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/0ae9863c-6f08-4d52-8071-d9a7766e622b)
 Step 10: Next step is the select the language you will get multiple languages, for example here we are providing kannada language input and will compare the features of input and output and provided 
 whether it matched or no is provided in next step.
![12](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/4a84370a-ef04-4c4b-9f5f-a207c5c278e9)

--------------------------------------------------------------------------------------------------------------------------------------
** License**
    
    This project is licensed under the NLTM License - see the LICENSE file for details.




