
____________
**PREREQUISITES:**

OS version: Ubuntu 20.04 LTS and higher

Python: 3.8 and higher

Pip version: 2.2 and higher

------------------------------------------
**Dataset Details**

**Training data**:

https://drive.google.com/drive/folders/1YcBY0SgO2ErnMcHrvTPnjFkENX0RUMyY

**Enrollment data**:

https://drive.google.com/drive/folders/1YcBY0SgO2ErnMcHrvTPnjFkENX0RUMyY

**Testing Data**:

**Public Test Data**

https://drive.google.com/drive/folders/1n1zZYvx8rFw0vUy20vGFMLL-kQUbV3CB

**Private Test Data**

https://drive.google.com/drive/folders/1Nf71uLGaX0_QlZpzoFsmMwUOOixB-0S9

---------------------------------------------------------------------------------

**1. DEPLOY THE SYSTEM GUI**

   If you want to deploy the prebuilt Speaker Recognition System, follow the following steps:
   Speaker Recognition System deployment and testing for WavlM Model

Instructions to run the web app using Flask Server.

1.Install Virtualenv and mkvirtualenv

2.Create and activate the environment of wavlM model using following source env/bin/activate

3. Install dependencies from requirements.txt and any other dependencies shown while running the backend.py using pip install -r requirements.txt
   
4. Download the trained model from link provided and put it in the root folder, use  the following link to download https://drive.google.com/file/d/109gOlv0FqV43eE7dr_1fpVIEFxtIqPy3/view?usp=drive_link.
   
5. Open the web app folder from the command prompt/terminal, activate the a environment, if not activated and run the server using 'python backend.py'
   
6. sudo apt-get install libsndfile1
   
7. This will run the web app.
   
8. Open the webapp in the web browser using IP address and Port Number displayed on the terminal. (e.g. https://localhost:port_number/)
   
9. Now you will be able to see a web application in the web browser and you can do registration and verification of the speaker.

Demo screenshots for the enrollment and verification for WAVlm Model:

Step1: Entering the IP address  https://203.129.246.105:6060/ the below home page will get browsered Page
![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/bbaf650c-a2d6-4e16-851a-05cf042796f8)
Step2:Click on the WavLm Demo on the Option
![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/3c44a6f9-aeb2-44ed-9a50-84b34dbc2f58)
Step3: Enrollment and verification Screen will Redirected
![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/23ab41b0-9318-4912-b045-dcf9b3b39cff)
Step 4:After clicking into enrollment Need to enroll yourself with Name , Surname and Gender and Age then start recording 
![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/1f71d064-1e52-4569-b7f4-21f1b1e3e54b)
 Step 5:After enrollment, the enrollment is done in English and testing can be done with multiple languages
 ![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/62c4839e-963b-40fa-a601-78f872a8895d)
 Step6: After Recording for the enrolled voice is completed it will pop up a window like enrollment under progress.
 ![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/44740a78-51e2-4842-9830-54071114cc64)
 Step7:Enrolled speaker Information Will be saved in the form of NGF33
 ![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/2b9f941f-d3fb-4444-a734-54752122d40c)
 Step8: Go back to the home page and click on verification for the enrolled speaker or the different speaker for the verification process.
 ![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/34be2636-d029-4587-b755-e56366b5475b)
 Step 9: Need to provide the Enrolled speaker ID and start the recording 
 ![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/41435b08-291c-4190-8564-d186bab03340)
 Step 10: Next step is the select the language you will get multiple languages, for example here we are providing kannada language input and will compare the features of input and output and provided 
 whether it matched or no is provided in next step.
 ![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/a073307a-e99f-437b-b36a-727bd8e5175c)
 Step 11:This step is specify whether the speaker is recognised or No
 ![image](https://github.com/SR-MEiTY/Speaker_Recognition2/assets/104900510/9f925f96-c797-43e8-aede-0a35ed06aa2f)



   
The Speaker Recognition system can be trained and a custom model can be built using the dataset. The process to build a new model is as follows:
   
   **a. Enrollment**
   
   In Speaker_Recognition2/referenceFiles/extract_enrol_emd.py you have to modify the following:

load the enrollment checkpoint for the link given here https://drive.google.com/file/d/109gOlv0FqV43eE7dr_1fpVIEFxtIqPy3/view?usp=drive_link

Speaker_feat=<path_of_checkpoint>

load the test checkpoint 
testset = test_dataset_loader(<path_for_test_feat>)
    
save the model to a new location using 
torch.save(<speaker_feat,path>)

Open terminal and type the following:
python3 extract_enrol_emd.py

   **b. Testing**
   
   In Speaker_Recognition2/referenceFiles/extract_test_emd.py you have to modify the following:

 load the checkpoint using
 a = torch.load(<path_of_the_checkpoint>)

 load the path of test data
testset = test_dataset_loader(<provide_the_path>)
   
 save the model to a new location
torch.save(<provide_the_path>)

Open terminal and type the following:
python3 extract_test_emd.py

   **c. Score Calculation**
    
In Speaker_Recognition2/referenceFiles/score.py you have to modify the following:

load the enrollment checkpoint
speaker_feat=torch.load(<Path_of_the_checkpoint>)

load the test checkpoint
test_feat=torch.load(<Path_of_the_test_checkpoint>)

provide the path for cohart.csv file
speaker_id=pd.read_csv(<Path_of_the_CSV_file>)

 provide the path for the test data folder
test_key =os.path.join(<Path_of_the_Test_Data_Folder>)

 save the results.csv file to a new location
p.to_csv(<Path_to_Save_the_Results>)

Open terminal and type the following:

python3 score.py

**d.Calculate The EER**

In performance.sh file you need to modify the following:

python evaluation.py --groundtruth give the path of cohart.csv file --prediction give the path of results.csv file which you obtain from the score.py

Open terminal and type the following:
./performance.sh

--------------------------------------------------------------------------------------------------------------------------------------




** License**
    
    This project is licensed under the NLTM License - see the LICENSE file for details.




