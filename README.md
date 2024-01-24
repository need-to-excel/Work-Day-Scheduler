# Work-Day-Scheduler
## Code explanation
Created variables for the dayjs and the html elements. 
Created Save button and gave it a class. 
Created on event via jquery to grab value from the input into the data input class and save it in local storage. 
Created 11 one hour slots with dayjs to cover working hours.
Looped through these slots and added them to the data input elements in html.
Looped through the one hour slots, compared them to the current time via dayjs and set the relevant css style via adding relevant class. 

# How to use instructions
Customers can enter the data/information into the relevant timeblock in order to keep a track of their day activities. 
Timeblocks will change colour throughout day, green when in future, red in current hour and grey in past hour. 
When customers enter data/information into timeblocks, then will need to click Save button for the information to be stored. 


![image](https://github.com/need-to-excel/Work-Day-Scheduler/assets/108495222/17b48025-6721-4883-9ef0-073c71320946)

