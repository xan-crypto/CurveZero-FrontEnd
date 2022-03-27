import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from collections import namedtuple

dateRate = namedtuple('dateRate', ['Date', 'Rate'])

def createRandomRates():
    # Create a list of months for 10 years
    dates = []
    start = datetime.now()
    end = start + timedelta(days=365 * 10)
    dates = pd.date_range(start, end, freq='m')

    # Yield curve uses logarithmic function
    rates = [0.02 + 0.01 * np.log(i + 1) for i, date in enumerate(dates)]
    dicTosave = []

    for date, rate in zip(dates, rates):
        _date = date.strftime('%Y-%m')
        
        # TODO: Trying to get same structure as alibabaTest.json
        dicTosave.append(dateRate(_date, rate))
        

    df = pd.DataFrame(data={'date': dates.strftime('%Y-%m'), 'rate':rates})
    
    df.to_json('front-end/src/data/test_rates.json', orient='records')

def createFromCSV(csvFile='front-end/src/data/Rates_Term_data.csv'):
    df = pd.read_csv(csvFile)
    df.to_json('front-end/src/data/rates.json')

if __name__ == '__main__':
    createRandomRates()
    createFromCSV()