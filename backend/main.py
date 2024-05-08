from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import numpy as np
from cnn_model import preprocess_data, cnn_predict
from chatbot import *

app = FastAPI()

class Item(BaseModel):
    height: str
    weight: str
    age: str
    householdIncome: str
    sleepHours: str
    memoryProblems: bool
    cantWork: bool
    sleepingHistory: bool
    limitedWork: bool
    outOfWork: str
    prescriptionCount: str

class ChatInput(BaseModel):
    user_input: str
    
origins = [
    "http://127.0.0.1:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True, 
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(item: Item):
    preprocessed_data = preprocess_data(item)
    print(preprocessed_data)
    prediction = cnn_predict(preprocessed_data)
    print(prediction)
    if isinstance(prediction, np.ndarray):
        prediction = prediction.tolist()
    return {'prediction': prediction[0]}


@app.post("/chat")
async def chat_endpoint(chat_input: ChatInput):
    knowledge_base: dict = load_knowledge_base('../models/knowledge_base.json')
    user_input: str = chat_input.user_input

    best_match: str | None = find_best_match(user_input, [q["question"] for q in knowledge_base["questions"]])

    if best_match:
        answer: str | None = get_answer_for_question(best_match, knowledge_base)
        if answer:
            return {"Bot": answer}
        else:
            return {"Bot": "I don't have an answer for that."}
    else:
        return {"Bot": "I don't know the answer. Can you teach me?"}