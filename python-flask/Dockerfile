FROM alpine as build

RUN apk add --no-cache python3
RUN apk add --no-cache py3-pip

RUN mkdir /app && \
    chown 1000:1000 /app

USER 1000:1000
WORKDIR /app

COPY requirements.txt .

RUN pip install -t .lib -r requirements.txt

COPY src/ src/

# ---

FROM alpine as runtime

RUN apk add --no-cache python3

USER 1000:1000
WORKDIR /app

COPY --from=build /app /app

ENV PYTHONPATH=/app/.lib
ENTRYPOINT ["/usr/bin/python3", "src/app.py"]
