while true; do
  response=$(curl -s -o /dev/null -w "%{http_code}" http://10.0.0.20/whoami)
  echo "Status code: $response"
  if [ $response -ne 200 ]; then
    echo "Status code is not 200, exiting..."
    exit 1
  fi
  sleep 0.2
done
