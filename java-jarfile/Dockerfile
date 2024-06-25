FROM alpine

ARG user=1000
ARG group=1000

RUN apk add --no-cache openjdk21-jre

USER $user:$group
WORKDIR /app

COPY app.jar .

ENTRYPOINT ["java", "-jar", "app.jar"]
