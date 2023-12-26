Installation
____________

Prerequisites:

pip install -r requirements.txt

If you want to train the Model from the Scartch go the refrences folder thier train_ecapa.py file is present.
After downloading the finetuned checkpoint follow the following steps in order to extract finetuned features from the model:
Load the checkpoint using =torch.load"/home/iiitdwd/cocosda_wavlm/exps/exp1_wavlm2/epoch=15-VEER=5.100-mindcf=0.198.ckpt"
Change the path in the model to where epoch=15-VEER=5.100-mindcf=0.198.ckpt"
Save the new checkpoint to a new location torch.save(path, 'checkpoint_new.pt')

Enrollment:
___________
In Speaker_Recognition2/referenceFiles/extract_enrol_emd.py you have to modify the following:

#In line 41 you have to load the load the checkpoint using
a=torch.load("/home/iiitdwd/cocosda_wavlm/exps/exp_21thMay_rawnet_step3/epoch=1-VEER=49.963-mindcf=1.000.ckpt")['state_dict']

#In line 53 provide the path of enrollment data
testset = test_dataset_loader(
    list(glob.glob("/home/iiitdwd/cocosda_wavlm/data/Enr_data-20230204T124515Z-001/enr_data_1/*.wav")),
    "",
    500,
    num_eval=15   
)

#In line 86 save the model to a new location
torch.save(speaker_feat, "data_2ndNov/env_enr_1.pth")

Open terminal and type the following:
python3 extract_enrol_emd.py

Testing:
________
In Speaker_Recognition2/referenceFiles/extract_test_emd.py you have to modify the following:

#In line 42 you have to load the load the checkpoint using
a=torch.load("/home/iiitdwd/cocosda_wavlm/exps/RawNet3_AAM/epoch=1-VEER=27.700-mindcf=0.950.ckpt")['state_dict']

#In line 56 provide the path of test data
testset = test_dataset_loader(
    list(glob.glob("/home/iiitdwd/cocosda_wavlm/data/I-MSV-Private-test-20230204T115807Z-001/I-MSV-Private-test/data/*.wav")),
    "",
    500,
    num_eval=15   
)

#In line 94 save the model to a new location
torch.save(feats, "data/test_emb_raw_private.pt

Open terminal and type the following:
python3 extract_test_emd.py

To calculate the score:
_______________________
In Speaker_Recognition2/referenceFiles/score.py you have to modify the following:

#In line 76 load the enrollment checkpoint
speaker_feat=torch.load("/home/iiitdwd/cocosda_wavlm/TE/test_emb_wavlm3_enroll30.pth", map_location={'cuda:0': 'cpu'})

#In line 77 load the test checkpoint
test_feat=torch.load("/home/iiitdwd/cocosda_wavlm/data_21stOct/test_emb_wavlm_private.pth", map_location={'cuda:0': 'cpu'})

#In line 93 provide the path for cohart.csv file
speaker_id=pd.read_csv("/home/iiitdwd/cocosda_wavlm/data/I-MSV-Private-test-20230204T115807Z-001/I-MSV-Private-test/private_test_cohart.csv")

#In line 96 provide the path for the test data folder
test_key =os.path.join("/home/iiitdwd/cocosda_wavlm/data/I-MSV-Private-test-20230204T115807Z-001/I-MSV-Private-test/data",row.utterance_id) 

#In line 140 save the results.csv file to a new location
p.to_csv("predswavlm_pri_td30.csv")

Open terminal and type the following:
python3 score.py

To calculate the EER:
_____________________
In performance.sh file you need to modify the following:
 
python evaluation.py --groundtruth give the path of cohart.csv file --prediction give the path of results.csv file which you obtain from the score.py

Open terminal and type the following:
./performance.sh
--------------------------------------------------------------------------------------------------------------------------------------
Speaker Recognition System deployment and testing for WavlM Model

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
10. Open the webapp in the web browser using IP address and Port Number displayed on the terminal. (e.g. https://203.129.246.105:6060/)
11. Now you will be able to see a web application in the web browser and you can do registration and verification of the speaker.
Instruction for testing the enrollment and verification for WAVlm Model

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
