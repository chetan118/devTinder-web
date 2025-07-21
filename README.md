# Dev Tinder Frontend

## Deployment

- Signup on AWS
- Launch Instance
- Create key-value secret
- Run command `chmod 400 <secret>.pem` (for mac or linux)

  - For Windows

    - ```
      icacls.exe devTinder-secret.pem /reset

      icacls.exe devTinder-secret.pem /grant:r "%username%:(R)"

      icacls.exe devTinder-secret.pem /inheritance:r
      ```

- Run command `ssh -i "devTinder-secret.pem" ubuntu@ec2-13-48-10-118.eu-north-1.compute.amazonaws.com`
- Install node version 23.9.0 (my local node version)
  - Install node for linux using nvm from https://nodejs.org/en/download
  - Install node with `nvm install 23.9.0`
- Clone the backend and frontend git repositories
- For frontend
  - Install dependencies - `npm install`
  - Build files with `npm run build`
  - Install, start and enable nginx (for the http server)
    - `sudo apt update`
    - `sudo apt install nginx`
    - `sudo systemctl start nginx`
    - `sudo systemctl enable nginx`
  - Copy code from dist (build files) to `/var/www/html`
    - `sudo scp -r dist/* /var/www/html/`
