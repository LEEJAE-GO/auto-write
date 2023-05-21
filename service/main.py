from fastapi import FastAPI, Request, Form
from fastapi.responses import FileResponse as fr
from fastapi.templating import Jinja2Templates
from dependency.bardapi.bardapi import Bard

import os
import uvicorn

templates = Jinja2Templates(directory="frontend/template")
os.environ['_BARD_API_KEY']="<SESSION_KEY>"
app=FastAPI()

@app.get("/")
def main():
    return fr("frontend/template/index.html")

@app.post("/answer.do")
def postMain(request : Request, content: str = Form("content")):
    bard = Bard(timeout=10)
    req_data = bard.get_answer(content)['content']
    print(req_data)
    return templates.TemplateResponse("answer.html",{"request":request, "data": req_data})



if __name__=="__main__":
    uvicorn.run("main:app",host="0.0.0.0", port=8001,reload=True)