@echo off
echo ========================================
echo Cybersecurity Challenge Repository
echo ========================================
echo.
echo This script will help you push your cybersecurity challenge repository to GitHub.
echo.
echo Prerequisites:
echo 1. Git must be installed and accessible from command line
echo 2. You must have a GitHub account
echo 3. You must create a new repository on GitHub
echo.
echo Steps to follow:
echo.
echo 1. Go to https://github.com and create a new repository
echo    - Name it: cybersecurity-challenges
echo    - Make it public or private (your choice)
echo    - Don't initialize with README (we already have one)
echo.
echo 2. Once created, GitHub will show you commands to run.
echo    They will look something like this:
echo.
echo    git init
echo    git add .
echo    git commit -m "Initial commit: Cybersecurity Challenge Repository"
echo    git branch -M main
echo    git remote add origin https://github.com/YOUR_USERNAME/cybersecurity-challenges.git
echo    git push -u origin main
echo.
echo 3. Run those commands in this directory.
echo.
echo 4. If you get any errors, make sure Git is in your PATH.
echo.
echo Current directory contents:
echo.
dir /B
echo.
echo Press any key to continue...
pause > nul
