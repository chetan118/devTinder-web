# Episode-17 | DevTinder UI - Part 3

## TODOs

- You should not be able to access other routes without login
- If token is not present, redirect user to login page
- Logout functionality
- Get the feed and add the feed in the redux store
- Build the user card from feed data
- Edit profile functionality
  - Create a new EditProfile component
  - Create a form with required fields
    - Gender should be a dropdown, About should be text area
  - Show the user card besides the edit form
  - On Save profile, call PATCH profile/edit and update store
  - Show errors on the edit form, same as login form
  - Use daisyui toast component to show the success message for 3 secs
