# Dev Tinder Frontend

This is a React app which communicates with the APIs in the NodeJS backend app in [DevTinder](https://github.com/chetan118/devTinder).

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

## Adding a custom domain name (chetansakpal.com)

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
- Check which ssl certificate is returned using `openssl s_client -connect 52.66.156.183:443 -servername chetansakpal.com`

## Sending Emails using Amazon SES

- Create an IAM user
- Give AmazonSESFullAccess to the user
- Amazon SES: Create an Identity
- Verify your domain name
- Verify an email address identity
- Install AWS SDK - v3
- https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples
- Setup SesClient
- Access Credentials should be created for the IAM User under the SecurityCredentials tab
- Add the credentials to the env file
- Write code for SESClient
- Write code for Sending email address
- Make the email dynamic by passing more params to the run function

## Scheduling Cron Jobs in NodeJS

- Installing node-cron package
- Learning about cron expressions
- Schedule a job
- Installing date-fns package
- Find all the unique email ids who have received connection requests in the previous day
- Send Email
- Explore queue mechanism to send bulk emails
  - bee queue package
  - bull package
- Amazon SES to send Bulk Emails
- Make sendEmail function dynamic (use templates)

## Razorpay payment gateway integration

- Sign up on Razorpay & complete KYC (will take around 3-5 days)
- Created an UI for premium page on the frontend
- Created an API for create order in the backend
- Added key id and key secret in the env file
- Instantiated Razoray in utils
- Created an order on Razorpay
- Created schema and model
- Saved the order in payments collection
- Made the API dynamic
- Setup Razorpay webhook on your live API
