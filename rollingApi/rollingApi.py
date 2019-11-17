from pandas import read_csv
from pandas import datetime
from pandas import DataFrame
from matplotlib import pyplot
from statsmodels.tsa.arima_model import ARIMA
from sklearn.metrics import mean_squared_error
from flask import Flask, json
from flask import Flask
from flask_cors import CORS
import json

app= Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# Function to convert   
def listToString(s):  
    # initialize an empty string 
    str1 = ""  
    # traverse in the string   
    for ele in s: 
        str1 += ele.replace(" ", "&nbsp;").replace("\t", "&nbsp;&nbsp;&nbsp;&nbsp;").replace("\n", "<br/>")
	# return string   
	
    return str1  


def parser(x):
	return datetime.strptime('190'+x, '%Y-%m')

@app.route('/series', methods=['GET'])
def get_series():
 series = read_csv('testData.csv', header=0, parse_dates=[0], index_col=0, squeeze=True, date_parser=parser)
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
 pyplot.savefig('rolling.png', bbox_inches='tight')
 objOutput = {"Prediction": respObj, "MSE": '%.3f' % error, "Chart" : "rolling.png"}
 #print(json.dumps(objOutput))
 return json.dumps(objOutput)


@app.route('/arimaseries', methods=['GET'], )
def get_arimaseries():
 print('Call started')
 series = read_csv('testData.csv', header=0, parse_dates=[0], index_col=0, squeeze=True, date_parser=parser)
# fit model
 model = ARIMA(series, order=(5,1,0))
 model_fit = model.fit(disp=0)
 sample = open('infoData.txt', 'w') 
 print(model_fit.summary(), file = sample)
 sample.close() 
 file1 = open("infoData.txt","r") 
 strFile = file1.readlines()
 #print(strFile) 
 file1.close() 
 # plot residual errors
 residuals = DataFrame(model_fit.resid)
 residuals.plot()
 #pyplot.show()
 pyplot.savefig('residual_1', bbox_inches='tight')
 residuals.plot(kind='kde')
 #pyplot.show()
 print(residuals.describe())
 pyplot.savefig('residual_2', bbox_inches='tight')
 objOutput = {"response": listToString(strFile)}
 return json.dumps(objOutput)

if __name__ == "__main__":
    app.run()