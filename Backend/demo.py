from fastapi import FastAPI

app = FastAPI()


@app.get("/hellooo")
async def hello():
    return {"message": "Hello World"}

@app.get("/hello")
async def hello():
    return {"message": "Helloo World"}

@app.post("/hellooo")
async def hello():
    return {"message": "Hello World"}