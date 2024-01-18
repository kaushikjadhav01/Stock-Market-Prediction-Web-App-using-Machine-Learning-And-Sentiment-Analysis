**Contributors guide**

**How to contribute to the code base**

Install Git

Guide - https://github.com/git-guides/install-git

Install Git GUI

Guide - https://git-scm.com/downloads/guis/

Project Overview - https://github.com/kaushikjadhav01/Stock-Market-Prediction-Web-App-using-Machine-Learning-And-Sentiment-Analysis/blob/main/README.md

**Types of code changes and contributions we accept**

- Minor issue fixes like typos, basic layout changes, etc
- Resolutions for raised issues, raising a new issue
- Addition and modifications to existing features provided with proper unit testing and code coverage

**Tips to begin development**
- Go through the documentation hosted on the GitHub pages website to understand the description of each of the classes and the hierarchy of inheritance.
- Setup the tools for development and a virtual device for quick testing.
- Familiarize yourself with android implementation tests for quick validation of any changes. [Getting started with Android implementation tests](https://developer.android.com/training/testing/fundamentals)
- You can also read up on Firebase to get a better understanding of the Firebase platform and the Android SDK. [Getting started with Firebase & Android SDK](https://firebase.google.com/docs/android/setup)

**Sample Workflow**
- Install Git and Android Studio on your machine.
- Clone the repo to the machine.
- Open the project in Android Studio and configure Gradle plugins and build scripts by running Build in Android Studio.
- Once the build is successful, open the Android device manager and install a virtual device (you can also use a physical device in case the machine is low on memory by using wireless debugging).
- Run the application in the newly created/ connected device.
- Create a new account in Firebase by following the sign-up process in the application.
- After updating the repository with latest version of 'main', fork a new branch to contain the new changes.
- Proceed to build the feature and use the 'deploy' the button at the top to flash the latest code to the device.
- Commit frequently to ensure that the changes are small and reversible in case of an issue.
- Once the feature is built, make sure that the new changes are commented appropriately for the documentation to be generated correctly for any new methods and classes.
- Also add appropriate tests to ensure that the newly added parts are continuously validated.
- From the build options dropdown in Android Studio pick the task 'generateDocsForDebug' or 'generateDocsForRelease' to generate updated documentation.
- Commit the documentation changes and push to remote.
- All the automated tasks will begin to run, monitor the progress and fix any failures which show up.
- Request a review from one of the maintainers and get an approval.
- The changes will now be merged.

**Branching Strategy**

- Create a feature branch or a bug branch from the dev branch
- Branch naming conventions : 
     - Adding a new feature to the existing code base: feature/--implementiation name--
     - Resolving a bug or an issue: bug/--fix name--
- Commit your code to the feature branch and raise a Pull Request to the dev branch.
- No commits should be added to the main branch from a feature branch, only the dev branch can add commits to the main.
- Please ensure all style checkers and validation steps are passing before requesting for review.

**Raising a PR and approvals**

- Raise a PR from the feature branch to the dev branch and request for review from the repository owners
- 2 mandatory reviews are required before merging
- Follow clean code and fix the PR comments before merging PR
- A release will be triggered every time the code is merged to the main branch, only the dev branch should be merged to the main 
 
**Allowed actions**

- Watching repo
- Forking repo
- Contributing to the repo
- Cloning and making changes
- Raising issues
- Fixing bugs
