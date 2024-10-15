# Nginx Configuration for ivo.ar

This directory contains the Nginx server configuration for the ivo.ar website.

## Files

- `ivo-ar.nginx.conf`: The main Nginx configuration file for the ivo.ar website.

## Usage

1. Copy the `ivo-ar.nginx.conf` file to your Nginx configuration directory (usually `/etc/nginx/sites-available/`).
2. Create a symbolic link to enable the site:
   ```
   sudo ln -s /etc/nginx/sites-available/ivo-ar.nginx.conf /etc/nginx/sites-enabled/
   ```
3. Test the Nginx configuration:
   ```
   sudo nginx -t
   ```
4. If the test is successful, reload Nginx:
   ```
   sudo systemctl reload nginx
   ```

## Notes

- This configuration assumes you're using Let's Encrypt for SSL certificates.
- The configuration includes a Content Security Policy (CSP) header. Adjust this as needed for your specific requirements.
- Remember to replace `/var/www/ivo-ar/out` with the actual path to your Next.js static output directory.

## Maintenance

When making changes to the Nginx configuration:

1. Update the file in this repository.
2. Copy the updated file to your server.
3. Test and reload Nginx as described in the Usage section.

Always test configuration changes in a staging environment before applying them to production.

