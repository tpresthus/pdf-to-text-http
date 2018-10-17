# Usage

The service provides two different means to passing a PDF that will be parsed. One for actually uploading a PDF, and one for providing a URI to a PDF.

# URI to PDF

`HTTP GET` to `/?pdf=http%3A%2F%2Ffoo.bar%2Ftest.pdf`

# File upload

Use `HTTP POST` to upload the PDF:

`HTTP POST` to `/` with `Content-type: application/pdf`.

# Response

*Possible response codes*:
  - 415 Unsupported Media Type
  - 400 Bad Request
  - 200 OK

Upon successful parsing:

`200 OK` is returned with `Content-type: text/plain` and the parsed PDF text as its body.
