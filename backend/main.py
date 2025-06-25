import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'  # Suppress TensorFlow info and warning messages
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from tensorflow.keras.models import load_model
from PIL import Image
import io

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "..", "models", "model.h5")
print(MODEL_PATH)
model = load_model(MODEL_PATH)

@app.get("/")
def read_root():
    return {"message": "FastAPI backend for MRI classification"}

@app.post("/predict")
async def predict(image: UploadFile = File(...)):
    try:
        # Validate file type
        if not image.content_type.startswith('image/'):
            raise HTTPException(status_code=400, detail="File must be an image")
            
        contents = await image.read()
        
        # Validate file size (max 10MB)
        if len(contents) > 10 * 1024 * 1024:
            raise HTTPException(status_code=400, detail="File size exceeds 10MB limit")
            
        image = Image.open(io.BytesIO(contents)).convert('RGB')
        image = image.resize((128, 128))
        image = np.array(image) / 255.0
        image = np.expand_dims(image, axis=0)
        
        prediction = model.predict(image)
        probabilities = prediction[0].tolist()
        class_names = ["glioma", "meningioma", "notumor", "pituitary"]
        predicted_class = class_names[np.argmax(prediction[0])]
        max_probability = max(probabilities)
        return {"probability": max_probability, "prediction": predicted_class}
    except Exception as e:
        print(e)  # Print the exception for debugging purposes
        raise HTTPException(status_code=400, detail=str(e))