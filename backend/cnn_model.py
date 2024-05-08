from keras.models import load_model
from pydantic import BaseModel
import numpy as np

model = load_model ('../models/cnn_model_20240507_135537.keras')
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
    
def preprocess_data(data: Item):
    data_dict = data.model_dump() 
    weight = float(data_dict.get('weight', 0))
    height = float(data_dict.get('height', 0)) / 100
    bmi = weight / (height ** 2) if height > 0 else 0

    key_map = {
        'prescriptionCount': 'prescriptions_count',
        'age': 'age',
        'limitedWork': 'limited_work',
        'householdIncome': 'household_income',
        'sleepHours': 'sleep_hours',
        'memoryProblems': 'memory_problems',
        'outOfWork': 'out_of_work',
        'cantWork': 'cant_work',
        'sleepingHistory': 'trouble_sleeping_history'
    }

    out_of_work_mapping = {
        'No': 0,
        'School': 1,
        'Retired': 2,
        'Other': 3,
        'Home Caretaker': 4,
        'Layoff': 5,
        'Health': 6,
        'Disabled': 7
    }

    preprocessed_data = [
        int(data_dict.get(key_map['prescriptionCount'], 0)),
        bmi,
        int(data_dict.get(key_map['age'], 0)),
        int(data_dict.get(key_map['limitedWork'], 0)),
        int(data_dict.get(key_map['householdIncome'], 0)),
        int(data_dict.get(key_map['sleepHours'], 0)),
        int(data_dict.get(key_map['memoryProblems'], 0)),
        out_of_work_mapping.get(data_dict.get(key_map['outOfWork']), 0),
        int(data_dict.get(key_map['cantWork'], 0)),
        int(data_dict.get(key_map['sleepingHistory'], 0))
    ]

    return preprocessed_data


def cnn_predict(data):
    X_sample = np.array(data)
    X_sample = X_sample.reshape(1, *X_sample.shape)

    predictions = model.predict(X_sample)
    return predictions[0]