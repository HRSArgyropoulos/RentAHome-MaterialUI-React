# Rent A Home - Booking system (search / add apartments)

## React, MateriaUI, Zustand state management
________

#### Description:
RentAHome is website where hosts can lists apartments and other people can search for those apartments in different destinations. 

- On the Host your home page you can find a 3 part stepper where the host can list his apartment. In the first step the host can either enter his name and continue as new host in the next step or he can enter his code in already a host field and search for his document. If the host is found the name will appear in the name field and the host will be able to continue. If the host does not exist and a name is provided in the next step an id will be provided from the server and the new host (with his id and name) will be saved in the database. From then the host can enter the appartment details and in the final step review his application. When the host submits his application the apartment details will be saved in the database and the users can find this apartment in the Homes to rent page.
  
- On the Homes to rent page the user can search for a specific destination and dates for apartments saved in the database. The initial search sends a get request with the appropriate keys in the server. If apartments were not found you will get an appropriate message otherwise a list will appear. On this list certain filters can be applied to reduce the results shown to the user. Changing the filters will not make a new request to the server to reduce load. If you want to make a new request you will have to alter the initial search.

> **Notice 1:** To get some results from the database, search for {
  "location": "Barcelona",
  "checkIn": "21-10-2021",
  "checkOut": "23-10-2021",
  "persons": 2,
}.

> **Notice 2:** This project needs a better way to handle the dates overall maybe with the dayjs or intl js global object. The styling and responsiveness also needs improving in later versions of this project. 

________
#### Live preview of this project on Heroku: 

[https://rentahome-client.herokuapp.com/](https://rentahome-client.herokuapp.com/)


**or** 

#### you can clone it locally and run:
##### `yarn install`
To install all dependencies needed for this application.

##### `yarn start`

To run the app in the development mode.\
Open [http://localhost:3100](http://localhost:3100) to view it in the browser.

________
#### Preview
![Gif 1](preview.gif)
![Screenshot 1](https://i.imgur.com/Iye6nP9.png)
![Screenshot 2](https://i.imgur.com/RvLxW2a.png)