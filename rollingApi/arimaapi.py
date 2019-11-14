# from flask import Flask, json
# companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]
# app= Flask(__name__)
# @app.route("/")
# def hello():
#     return "Hello World!"

# @app.route('/companies', methods=['GET'])
# def get_companies():
#   return json.dumps(companies)


# if __name__ == "__main__":
#     app.run()
from pandas import read_csv
from pandas import datetime
from matplotlib import pyplot
from flask import Flask, json
from pandas import DataFrame
from statsmodels.tsa.arima_model import ARIMA

companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]
def application(environ, start_response):
  if environ['REQUEST_METHOD'] == 'GET':
    print('hello from header')  
    start_response(
      '200 OK',
      [
        ('Content-Type', 'application/json'),
        ('Access-Control-Allow-Origin', '*'),
        ('Access-Control-Allow-Headers', 'Authorization, Content-Type'),
        ('Access-Control-Allow-Methods', 'GET'),
      ]
    )
    return ''
app= Flask(__name__)
@app.route("/")
def hello():
    return "Hello World!"

@app.route('/companies', methods=['GET'])
def get_companies():
  return json.dumps(companies)

# Function to convert   
def listToString(s):  
    # initialize an empty string 
    str1 = ""  
    # traverse in the string   
    for ele in s:  
        str1 += ele   
    # return string   
    return str1  

def parser(x):
	return datetime.strptime('190'+x, '%Y-%m')


@app.route('/series', methods=['GET'], )
def get_series():
 print('Call started')
 series = read_csv('shampoo.csv', header=0, parse_dates=[0], index_col=0, squeeze=True, date_parser=parser)
# fit model
 model = ARIMA(series, order=(5,1,0))
 model_fit = model.fit(disp=0)
 sample = open('samplefile.txt', 'w') 
 #print(model_fit.summary(), file = sample)
 sample.close() 
 file1 = open("samplefile.txt","r") 
 strFile = file1.readlines()
 #print(strFile) 
 file1.close() 
 # plot residual errors
 residuals = DataFrame(model_fit.resid)
 residuals.plot()
 #pyplot.show()
 pyplot.savefig('foo', bbox_inches='tight')
 residuals.plot(kind='kde')
 #pyplot.show()
 print(residuals.describe())
 pyplot.savefig('foo1', bbox_inches='tight')
 return listToString(strFile)

if __name__ == "__main__":
    app.run()