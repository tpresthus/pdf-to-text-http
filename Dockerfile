FROM alpine:3.4

RUN apk add --no-cache poppler-utils

ENTRYPOINT ["/usr/bin/pdftotext"]

#CMD ["-", "-"]
