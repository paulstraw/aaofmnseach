require 'sinatra'
require 'echowrap'
require 'discogs-wrapper'

Echowrap.configure do |config|
	config.api_key = '9K9E1LQCAUJRHYJ2H'
	config.consumer_key = '31874c98849a762743b3157440bb351d'
	config.shared_secret = 'OyPDbXcgQpSwzy6aDCEwlg'
end

get '/' do
	erb :index
end
