FROM node:14.13.1

CMD ["npm", "run", "build"]

FROM nginx:1.17.4-alpine

RUN apk add --no-cache bash

COPY ./nginx/wait.sh /wait.sh

RUN chmod +x /wait.sh

# CMD ["/wait.sh", "web-front:3000", "--", "nginx", "-g", "daemon off;"]

COPY ./web-front/ /home/app/frontend

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.dev.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/conf.d/default.dev.conf"]

# FROM nginx:1.17.4-alpine

# RUN apk add --no-cache bash

# COPY wait.sh /wait.sh

# RUN chmod +x /wait.sh

# CMD ["/wait.sh", "localhost:3000", "--", "nginx", "-g", "daemon off;"]

# RUN rm /etc/nginx/conf.d/default.conf
# COPY default.conf /etc/nginx/conf.d
