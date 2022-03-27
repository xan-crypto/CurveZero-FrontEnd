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
    rates = [f'{(0.02 + 0.01 * np.log(i + 1))}:.2f' for i, date in enumerate(dates)]
    df = pd.DataFrame(data={'date': dates.strftime('%Y-%m'), 'rate':rates})
    df.to_json('front-end/src/resources/test_rates.json', orient='records')

def createFromCSV(csvFile='front-end/src/data/Rates_Term_data.csv'):
    df = pd.read_csv(csvFile)
    df.to_json('front-end/src/resources/rates.json', orient='records')

if __name__ == '__main__':
    createRandomRates()
    createFromCSV()