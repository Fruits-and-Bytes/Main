# Fruits & Bytes

Fruits & Bytes is a travel-themed app that allows users to explore different countries and their native fruits, as well as the average salary of a software engineer in each country. With the ability to add destinations and login via Google OAuth, Fruits & Bytes makes it easy for users to discover new places and plan their next adventure.

<img src="https://imagizer.imageshack.com/img924/3862/F5szSm.png">

<br><br>


<br><br>

## Technologies Used

- **EJS:** for rendering dynamic HTML templates
- **MongoDB:** as the database to store information
- **Mongoose:** as the Object Data Modeling (ODM) library for MongoDB
- **Express:** as the web framework to handle HTTP requests and responses
- **Node.js:** a cross-platform, open-source runtime environment for executing JavaScript code on the server-side
- **Bootstrap:** a popular front-end component library for building responsive web applications
- **Passport:** an authentication middleware for Node.js that supports various authentication mechanisms

<br><br>
#### Our function to delete a destination from the user's wishlist emlpoys traditional JS on HTTP data:
```async function deleteDestination(req, res, next) {
    try {
        const destName = req.params.name;
        req.user.wishlist.forEach(function(d) {
            if(d.name === destName) {
                const index = req.user.wishlist.indexOf(d);
                req.user.wishlist.splice(index, 1);
            }
        });
        await req.user.save();
        res.redirect('/wishlist');
    } catch(err) {
        console.log(err);
        return next(err);
    }
};
```

<br><br>

# Additonal Resources

### Trello

Our Starting Point Trello View
<img src="https://imagizer.imageshack.com/img924/5126/Zp5Nff.png">

## [Click to view the current Trello](https://trello.com/invite/b/G35PcUN2/ATTIa4601109d99ed33b63e6f7350cf08a405433F3A7/destinations)

### Wireframe

[Click to view Wireframe](https://app.moqups.com/dTRslwFI4tiwBumZfZ1avWF9hUI20qGV/view/page/a8)

### ERD

[Click to view ERD](https://lucid.app/lucidchart/72bd2602-f1df-4337-a186-f2d3f7a6d5a3/edit?viewport_loc=397%2C-75%2C1365%2C1075%2C0_0&invitationId=inv_55b1d2a0-9eae-4822-95e3-aed61e484ef4)


<br><br>

# Getting Started

[Click to View Fruits & Bytes!](https://fruitsandbytes.herokuapp.com/)

<img src="https://imagizer.imageshack.com/img924/5241/DTEF6U.png">

<br><br>

# Next Steps


- In the future we plan to implement an API feature for IP camera's that overlook views of the destination in Fruites and Bytes.

- Another future enhancement we plan on implementing is a comments/likes section for users to engage with.


![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white) ![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white) ![MongoDb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![Bootsrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)