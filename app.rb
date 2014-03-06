require 'rubygems'
require 'sinatra'
require 'sinatra/json'
require 'nokogiri'
require 'discogs'

wrapper = Discogs::Wrapper.new('bgQQHVZNKAtrsVADRkNK')

get '/' do
  erb :index
end

post '/search' do

  response = wrapper.search(params[:name])
  # results = Nokogiri::XML(response)

  erb :search, locals: {results: response}
end
