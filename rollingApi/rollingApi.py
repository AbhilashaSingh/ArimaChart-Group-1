from pandas import read_csv
from pandas import datetime
from matplotlib import pyplot
from statsmodels.tsa.arima_model import ARIMA
from sklearn.metrics import mean_squared_error
from flask import Flask, json
from flask import Flask
from flask_cors import CORS
import json

app= Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

class Prediction:
  def __init__(self, predicted, expected):
    self.predicted = predicted
    self.expected = expected

def parser(x):
	return datetime.strptime('190'+x, '%Y-%m')

@app.route('/series', methods=['GET'])
def get_series():
 series = read_csv('shampoo.csv', header=0, parse_dates=[0], index_col=0, squeeze=True, date_parser=parser)
 X = series.values
 size = int(len(X) * 0.66)
 train, test = X[0:size], X[size:len(X)]
 history = [x for x in train]
 predictions = list()
 respObj = list()
 for t in range(len(test)):
	 model = ARIMA(history, order=(5,1,0))
	 model_fit = model.fit(disp=0)
	 output = model_fit.forecast()
	 yhat = output[0]
	 predictions.append(yhat)
	 obs = test[t]
	 history.append(obs)
	 objPredictions = {"Predicted": yhat[0], "Expected": obs}
	 respObj.append(objPredictions)
 error = mean_squared_error(test, predictions)
 #plot
 pyplot.plot(test)
 pyplot.plot(predictions, color='red')
 #pyplot.show()
 pyplot.savefig('chart/chart.png', bbox_inches='tight')
 objOutput = {"Prediction": respObj, "MSE": '%.3f' % error, "Chart" : "chart/chart.png"}
 #print(json.dumps(objOutput))
 return json.dumps(objOutput)

if __name__ == "__main__":
    app.run()