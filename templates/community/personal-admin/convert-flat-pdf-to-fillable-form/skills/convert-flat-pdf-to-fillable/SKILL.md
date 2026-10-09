---
name: convert-flat-pdf-to-fillable
description: "Use this when the user wants a scanned or flat PDF turned into a fillable form with Instafill.ai."
---

Turn a scanned or flat PDF into a fillable form with Instafill.ai MCP.

1. If Instafill MCP is not connected, follow the Instafill.ai skill first and wait until tools are available.
2. Locate the PDF (chat attachment or a path the user gives) and copy it onto the working computer if needed. Confirm it is a PDF.
3. Call the Instafill MCP upload_form tool. Upload the file yourself: POST it as multipart/form-data with field name file to the returned direct upload URL, sending the one-shot token in the X-Upload-Token header. Do not send the user to a browser unless you cannot POST the file. The token is single-use and expires in about 10 minutes.
4. When the upload returns a form_id, poll get_form_details until conversion is complete (processed true, or conversion_job_status completed). Multi-page scans can take several minutes; tell the user you are waiting.
5. Deliver the fillable PDF to the user. Prefer Instafill MCP download tools when they exist. If the only available download is GET https://api.instafill.ai/v1/forms/{form_id}/download, use the connected Instafill session, not a pasted API key. Confirm the result is an AcroForm, then attach the file and, when possible, save a copy next to the original.
6. Do not convert with a stored API key or a REST-only flow when Instafill MCP is connected.
