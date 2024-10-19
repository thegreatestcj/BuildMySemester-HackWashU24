from fastapi import FastAPI

app = FastAPI()

# Root route
@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

# Another GET route with a path parameter
@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}