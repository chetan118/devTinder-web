# Dev Tinder Frontend

## Deployment

- Signup on AWS
- Launch Instance
- Create key-value secret
- Run command `chmod 400 <secret>.pem` (for mac or linux)

  - For Windows

    ```
      icacls.exe devTinderMumbai-secret.pem /reset

      icacls.exe devTinderMumbai-secret.pem /grant:r "%username%:(R)"

      icacls.exe devTinderMumbai-secret.pem /inheritance:r
    ```

- Run command `ssh -i "devTinderMumbai-secret.pem" ubuntu@ec2-52-66-156-183.ap-south-1.compute.amazonaws.com`
- Install node version 23.9.0 (my local node version)
  - Install node for linux using nvm from https://nodejs.org/en/download
  - Install node with `nvm install 23.9.0`
- Clone the backend and frontend git repositories
- For Frontend
  - Install dependencies - `npm install`
  - Build files with `npm run build`
  - Install, start and enable nginx (for the http server)
    - `sudo apt update`
    - `sudo apt install nginx`
    - `sudo systemctl start nginx`
    - `sudo systemctl enable nginx`
    - Copy code from dist (build files) to `/var/www/html`
    - `sudo scp -r dist/* /var/www/html/`
    - Enable port `:80` of your instance
- For Backend
  - Allowed EC2 instance public IP on mongoDB server
  - Enable port `:7777` of your instance
  - Install dependencies - `npm install`
  - Install pm2 process manager - `npm install pm2 -g`
  - Start npm in a background process - `pm2 start npm -- start`
    - `pm2 logs`
    - `pm2 flush <name_of_the_process>`
    - `pm2 list`
    - `pm2 stop <name_of_the_process>`
    - `pm2 delete <name_of_the_process>`
    - `pm2 start npm --name "devtinder-backend" -- start` (starts the process with a custom name "devtinder-backend")
  - Configure nginx - `/etc/nginx/sites-available/default`
  - Restart nginx - `sudo systemctl restart nginx`
  - Modify the BASE_URL in frontend project to `/api`

## Nginx Configuration

Currently,

- Frontend -> http://52.66.156.183/
- Backend -> http://52.66.156.183:7777/

If Domain Name = devtinder.com is mapped to 52.66.156.183

It becomes,

- Frontend -> devtinder.com
- Backend -> devtinder.com:7777 (we don't want this)

  - it should be like devtinder.com/api (for example)

- nginx config:

  ```
    server_name 52.66.156.183;

    location /api/ {
        proxy_pass http://localhost:7777/;  # Pass the request to the Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
  ```

## Adding a custom domain name

- Purchased a domain chetansakpal.com from godaddy
- Signup on cloudflare
- Change the nameservers on godaddy and point it to cloudflare
- Wait for some time till your nameservers are updated
- Once done, godaddy is now just the domain registrar for chetansakpal.com
- and its dns records will be managed by cloudflare
- DNS record: A chetansakpal.com 52.66.156.183
- Enable SSL for website

## SSL Certificate to enable Full (strict) mode on cloudflare

- Run following commands
  ```
  sudo apt update
  sudo apt install certbot python3-certbot-nginx -y
  sudo certbot --nginx -d chetansakpal.com -d www.chetansakpal.com
  ```
- It will:
  - Automatically get a free SSL cert
  - Configure Nginx for HTTPS
  - Restart Nginx with the correct SSL config
- Enable port `:443` of your instance
- Then in Cloudflare: Switch SSL mode to: Full (Strict)
- Once HTTPS works:
  - Enable “Always Use HTTPS”
    → Cloudflare → SSL/TLS → Edge Certificates
  - Enable “Automatic HTTPS Rewrites”
    → Fixes mixed content issues
