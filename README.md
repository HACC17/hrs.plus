# hrs.plus
Hawaii Revised Statutes +

## Development
1. Copy the `backend/dotenv` to `backend/.env`
```bash
cp backend/dotenv backend/.env
# Modify backend/.env as needed
```
2. Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
3. Install [Vagrant](https://www.vagrantup.com/downloads.html)
4. Open a shell, cd to the root repo dir, and run
```bash
vagrant up
# ...wait awhile as Vagrant+VirtualBox do their magic to provision the VM...
```
5. Open the page served from the local dev VM:
```
# Open browser to http://localhost:8080
open http://localhost:8080 # on OS X
```
6. _or_ to ssh into the VM
```
vagrant ssh
```

