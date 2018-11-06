# Redux Feedback Loop

## Description
This app allows users to submit feeback on their daily experience at Prime. Users are guided through a few simple questions where they are asked to relay their experience on a scale from 1 to 5. They are also able to leave comments if they wish. Upon submission, their feedback is stored in a PostgresQL database. After submitting their feedback they are able to go back and submit feedback again if they choose. There is also an admin view that gets all the feedback from the database. It is displayed in a table. The admin has the ability to see all feedback and delete feedback if they choose.

## Technologies Used
- PostgresQL
- Node
- Express
- React
- Redux
- Sweetalert

## Setup
Fork and clone the github repository to your computer. Run the following commands in Terminal `npm install`, `npm run server`, in another Terminal window run `npm run client`.

To set up the database, create a database called `"prime_feedback"`, then type the following commands into your PostgresQL database gui.

`-- Switch to "prime_feedback" before making:`
```CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
);```

`-- Sample feedback item`
```INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!');```


### Future Developments
- Add the ability to flag an existing feedback entry for further review on the /admin view.
- Deploy the project to Heroku.

