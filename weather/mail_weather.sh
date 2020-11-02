echo "Input e-mail address"
read -p "to: " to;
read -p "user: " user;
read -sp "password: " pass;
node mail_weather.js ${to} ${user} ${pass}
