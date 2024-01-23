import requests
from twilio.rest import Client

STOCK = "TSLA"
COMPANY_NAME = "tesla"

KEY_ALPHAVANTAGE = "YAJXFZMN593Z08QH"
paramenters_alphavantage = {
    'function' : 'TIME_SERIES_DAILY',
    'symbol' : STOCK,
    'apikey' : KEY_ALPHAVANTAGE
}
response_alphavantage = requests.get(
    "https://www.alphavantage.co/query", params=paramenters_alphavantage
)
response_alphavantage.raise_for_status()
print(response_alphavantage.json())
data_alphavantage = response_alphavantage.json()['Time Series (Daily)']
data_market = [val for (key, val) in data_alphavantage.items()]
data_market_date = [key for (key, val) in data_alphavantage.items()]
data_market_yasterday= data_market[0]
price_market_yasterday= data_market_yasterday['4. close']
# print(price_market_yasterday)

data_market_before_yasterday= data_market[1]
price_market_before_yasterday= data_market_before_yasterday['4. close']
# print(price_market_before_yasterday)

diffne_price_market =abs(float(price_market_yasterday) - float(price_market_before_yasterday))
# print(diffne_price_market)

diffne_percent = (diffne_price_market / float(price_market_yasterday)) * 100
# print(diffne_percent)

if diffne_percent > 4:
    KEY_NEWSAPI = "fcdf7361af1c443483ac17e820e94547"
    from_date = data_market_date[0]
    to_date = data_market_date[1]
    paramenters_news = {
        'q': COMPANY_NAME,
        'from': from_date,
        'to': to_date,
        'sortBy': 'popularity',
        'apiKey': KEY_NEWSAPI,
    }
    response_news = requests.get(
        "https://newsapi.org/v2/everything", params=paramenters_news
    )
    response_news.raise_for_status()
    data_news = response_news.json()['articles']
    print(data_news)
    # top_three_articeles = data_news[:3]



"""
TSLA: 🔺2%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
or
"TSLA: 🔻5%
Headline: Were Hedge Funds Right About Piling Into Tesla Inc. (TSLA)?. 
Brief: We at Insider Monkey have gone over 821 13F filings that hedge funds and prominent investors are required to file by the SEC The 13F filings show the funds' and investors' portfolio positions as of March 31st, near the height of the coronavirus market crash.
"""

