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
  results = wrapper.search(params[:name])

  erb :search, locals: {results: results}
end
