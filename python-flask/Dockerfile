FROM alpine as build

ARG user=1000
ARG group=1000

RUN apk add --no-cache python3
RUN apk add --no-cache py3-pip

RUN mkdir /app && \
    chown $user:$group /app

USER $user:$group
WORKDIR /app

COPY requirements.txt .

RUN pip install -t .lib -r requirements.txt

COPY src/ src/

# ---

FROM alpine as runtime

ARG user=1000
ARG group=1000

RUN apk add --no-cache python3

USER $user:$group
WORKDIR /app

COPY --from=build /app /app

ENV PYTHONPATH=/app/.lib
ENTRYPOINT ["/usr/bin/python3", "src/app.py"]
