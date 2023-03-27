# Whatsapp Sticker 

---

Note: provided api not working while I was working on the task so I used Postman mock server for those Apis.
 
### Test data using my mock api

- For phone number:

  valid:
  ```
  any Malaysian number (ex: 0142373388)
  ```
  invalid:
  ```
  only 0142373387
  ```
  
- For pin:

  valid:
  ```
  only 1234
  ```
  invalid:
  ```
  anything other than the valid one
  ```
---

### Setup
-global dependencies version
  ```
  node  v12.22.3
  npm  8.3.0
  yarn  1.22.10
  Redux DevTools  2.17.0
  ```
-install dependencies after clone the repo
  ```
  yarn
  ```
-run it locally
```
yarn start
  ```
  
-run unit test
```
yarn test
  ```
  
-update Snapshot for unit test
```
yarn test:update
  ```
  
---

 
### A top-level directory layout
    .
    ├── ...
    ├── src                      # Source files
    │   ├── root                 # root config files for this app 
    │   ├── router               # where we have react router components
    │   ├── ui                   # common ui components that can re-use it  
    │   ├── ex: main-page        # other components that Not common and for special feature
    │   ├── api                  # files where we handle REST API
    │   ├── assets               # files and images the we use it in this app
    │   ├── webpack              # common webpack configuration for staging and production
    │   └── index                # entry point for webpack (where we start the application bundling process)
    │ 
    │ 
    ├── package                  # Test files (alternatively `spec` or `tests`)
    ├── otherConfiguration       # configuration files (like linting, testing and ts configuration)
    └── ...


---


### Tool used for development
- React 
- Redux
- react-router
- Jest
- React testing-library
- styled-components (JS-in-CSS)
- Webpack

---

### Redux overview
Store init state:
```js
{
       userState: {
          userId: "",
          isFetchingTriggerPin: false,
          isFetchingVerifyPin: false
       }

}

```

Actions:

```
TRIGGER_PIN >>> to fetch pin number by calling PhoneService
VERIFY_PIN >>> to verify phone number by calling PhoneService
UPDATE_USER_ID >>> to update user_id
```

---

### UI overview

Phone:

<img width="1187" alt="image" src="https://user-images.githubusercontent.com/47742500/227843370-98433b8c-7eec-47c2-93c0-5f9d2b294cab.png">

Desktop:

<img width="1509" alt="image" src="https://user-images.githubusercontent.com/47742500/227843529-2861da02-dbc4-44c5-aada-d4072cf95fa2.png">


friendly message when we have not api issue, not valid malaysian number or not valid nember:

<img width="1096" alt="image" src="https://user-images.githubusercontent.com/47742500/227844044-6713e2f7-5ac7-40f0-a5f6-14cb7a263ff3.png">

also for pin verification: 

<img width="746" alt="image" src="https://user-images.githubusercontent.com/47742500/227844345-a8c212cd-f44c-4d70-bf09-4ef2fd992498.png">


performance, Best Practices test using Lighthouse tool to make sure it SEO and user frindly:

<img width="1267" alt="image" src="https://user-images.githubusercontent.com/47742500/227846239-2879b8df-636e-4840-87b9-f5e52151e02c.png">


---

what will do if I have more time:
- adding more unit test cases
- add more types for those components which they don't have...
- add E2E test
- build infra for this app and deploy it


Looking forward to your feedback 😊 
