
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
 
 for windows:pip install virtualenvwrapper-win

 for Linux:pip install virtaulwrapper

 2.Create mkvirtualenv flaskenv by default it will create environment else you can use the following line
 
 3.Activate the environment of pertrained model using following source env/bin/activate

 4. Install dependencies from requirements.txt and any other dependencies shown while running the backend.py using pip install -r requirements.txt
   
 5. Download the trained model from link provided and put it in the root folder, use  the following link to download https://drive.google.com/file/d/109gOlv0FqV43eE7dr_1fpVIEFxtIqPy3/view?usp=drive_link.
   
 6. Open the web app folder from the command prompt/terminal, activate the a environment, if not activated and run the server using 'python backend.py'
   
 7. sudo apt-get install libsndfile1
   
 8. This will run the web app.
   
 9. Open the webapp in the web browser using IP address and Port Number displayed on the terminal. (e.g. https://203.129.246.105:6060/)
   
 10. Now you will be able to see a web application in the web browser and you can do registration and verification of the speaker.

Demo screenshots for the enrollment and verification for WAVlm Model:

Step1: Entering the IP address  https://203.129.246.105:6060/ the below home page will get browsered Page
![1](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/f17ca5ef-facf-457e-b779-00745be69c0f)
Step2:Click on the Speaker Verification Demo on the Option
![2](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/3de4911b-01ed-4600-8bb8-f4ff523f26dd)
Step3: Enrollment and verification Screen will Redirected
![3](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/cf551f12-5c77-4e1f-9d4b-1a5584f3e855)
Step 4:After clicking into enrollment Need to enroll yourself with Name , Surname and Gender and Age then start recording 
![4](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/01eed03e-de32-43dc-84f2-e07cd8b2eb19)
 Step 5:After enrollment, the enrollment is done in English and testing can be done with multiple languages
![5](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/895d8d94-8579-4003-92a8-3ce8ea69ef16)
 Step6: After Recording for the enrolled voice is completed it will pop up a window like enrollment under progress and enrolled speaker information will be save in the form of SSF32.
 ![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/44740a78-51e2-4842-9830-54071114cc64)
 Step7: Go back to the home page and click on verification for the enrolled speaker or the different speaker for the verification process.
  ![8](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/b1a90db2-83ca-4590-b55d-92898aa5699c)
 Step 8: Need to provide the Enrolled speaker ID and start the recording 
 ![9](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/9bc7a73a-c840-451d-a1d2-40570d3eea49)
 Step 9: Next step is the select the language you will get multiple languages, for example here we are providing kannada language input and will compare the features of input and output and provided 
 whether it matched or no is provided in next step.
 ![10](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/aee006f6-bc69-46f4-bdcf-581c36c76ee9)
Step 11:This step is specify whether the speaker is recognised or No
 ![12](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/521b47ec-90b7-4590-854f-9d4c38b7dc41)

** License**
    
    This project is licensed under the NLTM License - see the LICENSE file for details.




