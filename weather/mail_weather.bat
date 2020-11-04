echo "Input e-mail address"
read -p "to: " to;
read -p "user: " user;
read -sp "password: " pass;
echo "" #改行
node mail_weather.js ${to} ${user} ${pass}
